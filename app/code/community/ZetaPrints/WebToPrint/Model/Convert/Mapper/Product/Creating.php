<?php

class ZetaPrints_WebToPrint_Model_Convert_Mapper_Product_Creating
  extends  Mage_Dataflow_Model_Convert_Mapper_Abstract
  implements ZetaPrints_Api {

  protected $_new_products_category_id;

  public function map () {
    //Always print debug information. Issue #80
    $this->debug = true;

    $this->warning('Product type: ' .
                       $this->getAction()->getParam('product-type', 'simple') );

    if (!$assignToWebsites = $this->_getWebsitesForAssign())
      return;

    //Get all web-to-print templates
    $templates = Mage::getModel('webtoprint/template')->getCollection()->load();

    //Get all products
    $products = Mage::getModel('catalog/product')
                  ->getCollection()
                  ->addAttributeToSelect('webtoprint_template')
                  ->load();

    //If there're products then...
    if ($has_products = (bool) count($products)) {
      //... create array to store used web-to-print template GUIDs
      $used_templates = array();

      //For every product...
      foreach($products as $product) {
        //... remember its ID
        $used_templates[$product->getId()] = null;

        //And if it has web-to-print attribute set then...
        if($product->hasWebtoprintTemplate() && $product->getWebtoprintTemplate())
          //... also remember the value of the attribute
          $used_templates[$product->getWebtoprintTemplate()] = null;
      }
    }

    unset($products);

    // Get ID of source product if present and try to load source product
    $sourceId = $this->getAction()->getParam('source-product-id');
    $sourceProduct = null;

    if($sourceId) {
      $sourceProduct = Mage::getModel('catalog/product')->load($sourceId);

      if($sourceProduct->getId()) {
        $this->warning('Base product: ' . $sourceProduct->getName());

        $sourceProduct->getCategoryIds();
        $sourceProduct->setId(null);

        $sourceData = $sourceProduct->getData();

        $sourceData['stock_item'] = null;
        $sourceData['url_key'] = null;
      }
      else
        $sourceProduct = null;
    }

    $url = Mage::getStoreConfig('webtoprint/settings/url');
    $key = Mage::getStoreConfig('webtoprint/settings/key');

    $_catalogues = zetaprints_get_list_of_catalogs($url, $key);
    $cataloguesMapping = array();

    foreach ($_catalogues as $_catalogue)
      $cataloguesMapping[$_catalogue['guid']] = $_catalogue['title'];

    $_catalogues = array();

    $categoryMappingStore = $this
                              ->getAction()
                              ->getParam('category-mapping-store');

    $categoryMappingStore = Mage::app()->getStore($categoryMappingStore);

    $assignToParents = (bool) $this
                                ->getAction()
                                ->getParam('assign-to-parents');

    if (!$categoryMappingStore->getId())
      $categoryMappingStore = null;

    $useProductPopulateDefaults
       = Mage::getStoreConfig('webtoprint/settings/products-populate-defaults');

    $_defaultCategory = array();

    $helper = Mage::helper('webtoprint/category');

    $line = 0;

    $number_of_templates = count($templates);
    $number_of_created_products = 0;

    foreach ($templates as $template) {
      $line++;

      if ($has_products)
        if (array_key_exists($template->getGuid(), $used_templates)) {
          $this->debug("{$line}. Product {$template->getGuid()} already exists");

          continue;
        }

      if (!$sourceProduct) {
        $product_model = Mage::getModel('catalog/product');

        $product_model
          ->setWebsiteIds($assignToWebsites)
          ->setAttributeSetId($product_model->getDefaultAttributeSetId())
          ->setTypeId($this->getAction()->getParam('product-type', 'simple'))
          ->setStatus(Mage_Catalog_Model_Product_Status::STATUS_DISABLED)
          ->setVisibility(0);

        if ($useProductPopulateDefaults) {
          $product_model
            ->setVisibility(Mage_Catalog_Model_Product_Visibility::VISIBILITY_BOTH)
            ->setStatus(Mage_Catalog_Model_Product_Status::STATUS_ENABLED)
            ->setWeight(0)
            ->setPrice(0)
            ->setTaxClassId(0);
        }

        $templateDetails = zetaprints_parse_template_details(
          new SimpleXMLElement($template->getXml())
        );

        $templateDetails['catalogue']
          = $cataloguesMapping[$template->getCatalogGuid()];

        $categoryIds = $helper->getCategoriesIds(
          $templateDetails,
          $assignToParents,
          $categoryMappingStore
        );

        if (!$categoryIds && $useProductPopulateDefaults)
          $categoryIds = $this->_getDefaultCategoryId();

        $product_model->setCategoryIds($categoryIds);
      } else {
        $product_model = $sourceProduct;

        $product_model
          ->setOrigData()
          ->setData($sourceData);
      }

      $product_model
        ->setSku(zetaprints_generate_guid() . '-rename-me')
        ->setName($template->getTitle())
        ->setDescription($template->getDescription())
        ->setShortDescription($template->getDescription())
        ->setRequiredOptions(true)
        ->setWebtoprintTemplate($template->getGuid());

      Mage::dispatchEvent(
        'webtoprint_product_create',
        array(
          'product' => $product_model,
          'template' => $templateDetails,
          'params' => array(
            'process-quantities' => $this->_isProcessQuantities()
          )
        )
      );

      try {
        $product_model->save();
      } catch (Exception $e) {
        $this->error("{$line}. Error creating product from template: {$template->getGuid()}");
        $this->error($e->getMessage());

        continue;
      }

      $stock_item = Mage::getModel('cataloginventory/stock_item');

      $stock_item->setStockId(1)
        ->setUseConfigManageStock(0)
        ->setProduct($product_model)
        ->save();

      $this->debug("{$line}. Product for template {$template->getGuid()} was created.");

      $number_of_created_products++;

      unset($product_model);
      unset($stock_item);
    }

    $this->notice("Number of templates: {$number_of_templates}");
    $this->notice("Number of created products: {$number_of_created_products}");

    $this->warning('Warning: products were created with general set of properties. Update other product properties using bulk edit to make them operational.');
  }

  /**
   * Try to get category ID by category name
   *
   * If category exists return its ID, if not try to create it.
   * Only create category if there is one root category in the store.
   *
   * @param string $name
   * @return null|int
   */
  protected function _getDefaultCategoryId () {
    if (!isset($this->_defaultCategory))
      $this->_defaultCategory = $this->_createDefaultCategory();

    return $this->_defaultCategory;
  }

  protected function _createDefaultCategory () {
    $model = Mage::getModel('catalog/category');
    $name = 'New templates';

    $collection = $model
                    ->getCollection()
                    ->addAttributeToFilter('name', $name);

    if ($collection->count())
      return array($collection->getFirstItem()->getId());

    $collection
      ->clear()
      ->getSelect()
      ->reset('where');

    $collection->addAttributeToFilter('parent_id', 1);

    if ($collection->count() > 1) {
      $this->debug('Not a single root category');

      return array();
    } elseif ($collection->count() == 0) {
      $this->warning('Couldn\'t find root category.');

      return array();
    }

    $rootCategory = $collection->getFirstItem();

    if(!$rootCategory->getId()) {
      $this->warning('Couldn\'t load root category');

      return array();
    }

    $model
      ->setStoreId($rootCategory->getStoreId())
      ->setData(array(
                  'name' => $name,
                  'is_active' => 1,
                  'include_in_menu' => 1 ))
      ->setPath($rootCategory->getPath())
      ->setAttributeSetId($model->getDefaultAttributeSetId());

    try {
      $model->save();

      return array($model->getId());
    } catch (Exception $e) {
      $this->error($e->getMessage());

      return array();
    }
  }

  protected function _getWebsitesForAssign () {
    if (count(Mage::app()->getWebsites()) < 2)
      return array(Mage::app()->getWebsite(true)->getId());

    $websites = Mage::getStoreConfig('webtoprint/settings/assign-to-websites');

    if (!$websites) {
      $url = Mage::getModel('adminhtml/url')->getUrl(
        'adminhtml/system_config/edit',
        array(
          'section' => 'webtoprint',
          '_fragment' => 'row_webtoprint_settings_assign-to-stores')
      );

      $msg = 'Magento installation has multiple websites. Please select '
             . 'website(s) in Assign new products to website(s) setting on '
             . '<a href="' . $url . '">web-to-print settings page.</a> '
             . 'Newly created products will be assigned to selected website(s)';

      $this->error($msg);

      return;
    }

    return explode(',', $websites);
  }

  protected function _isProcessQuantities () {
    $value = $this
      ->getAction()
      ->getParam('process-quantities', false);

    if ($value === false)
      return false;

    $value = trim($value);

    return $value == 'true' || $value == 'yes' || $value == '1';
  }

  private function error ($message) {
    $this->addException($message, Mage_Dataflow_Model_Convert_Exception::ERROR);
  }

  private function notice ($message) {
    $this->addException($message, Mage_Dataflow_Model_Convert_Exception::NOTICE);
  }

  private function warning ($message) {
    $this->addException($message, Mage_Dataflow_Model_Convert_Exception::WARNING);
  }

  private function debug ($message) {
    if ($this->debug)
      $this->notice($message);
  }
}

?>
