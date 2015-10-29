<?php

class ZetaPrints_WebToPrint_Model_Convert_Mapper_Product_Updating extends  Mage_Dataflow_Model_Convert_Mapper_Abstract {

  public function map () {

    //Always print debug information. Issue #80
    $this->debug = true;

    $updateAll
      = (bool) Mage::getStoreConfig('webtoprint/settings/refresh-templates');

    $action = $this->getAction();

    $assignToParents = (bool) $action->getParam('assign-to-parents');
    $categoryMappingStore = $action->getParam('category-mapping-store');

    unset($action);

    $categoryMappingStore = Mage::app()->getStore($categoryMappingStore);

    if (!$categoryMappingStore->getId())
      $categoryMappingStore = null;

    $cataloguesMapping = null;

    $helper = Mage::helper('webtoprint/category');

    $templates = Mage::getModel('webtoprint/template')->getCollection()->load();

    foreach ($templates as $template) {
      $product_model = Mage::getModel('catalog/product');

      if ($product_id = $product_model->getIdBySku($template->getGuid())) {
        $this->debug("Product {$template->getGuid()} already exists");

        $product = $product_model->load($product_id);

        if (!$product->getWebtoprintTemplate()) {
          $this->debug("Product {$template->getGuid()} doesn't have web-to-print attribute.");

          Mage::register('webtoprint-template-changed', true);
          $product->setSku("{$template->getGuid()}-rename-me")
            ->setRequiredOptions(true)
            ->setWebtoprintTemplate($template->getGuid())
            ->save();
          Mage::unregister('webtoprint-template-changed');

          $this->debug("Web-to-print attribute was added to product {$template->getGuid()}");
        }
        else {
          $this->debug("SKU of product {$template->getGuid()} is equal to its web-to-print attribute");

          Mage::register('webtoprint-template-changed', true);
          $product->setSku("{$template->getGuid()}-rename-me")
            ->setRequiredOptions(true)
            ->save();
          Mage::unregister('webtoprint-template-changed');

          $this->debug("SKU of product {$template->getGuid()} was changed.");
        }
      } else {
        $products = $product_model->getCollection()->addAttributeToFilter('webtoprint_template', array('eq' => $template->getGuid()))->load();

        if (! (bool) $template->getExist()) {
          if (count($products) == 0) {
            $template->delete();
            continue;
          }

          $behaviour = (int) Mage::getStoreConfig('webtoprint/settings/templates-removing-behaviour');

          if ($behaviour == ZetaPrints_WebToPrint_Model_System_Config_Source_TemplateDeletingBehaviour::NONE) {
            foreach ($products as $product) {
              $full_product = $product_model->load($product->getId());

              $this->debug("Template for product {$full_product->getWebtoprintTemplate()} was removed");

              Mage::register('webtoprint-template-changed', true);
              $full_product
                ->setRequiredOptions(false)
                ->setWebtoprintTemplate('');

              Mage::dispatchEvent(
                'webtoprint_product_update',
                array(
                  'product' => $full_product,
                  'template' => zetaprints_parse_template_details(
                    new SimpleXMLElement($template->getXml())
                  ),
                  'params' => array(
                    'process-quantities' => $this->_isProcessQuantities()
                  )
                )
              );

              $full_product->save();
              Mage::unregister('webtoprint-template-changed');

              $this->debug("Product {$full_product->getSku()} was unlinked from the template");
            }

            $template->delete();

          } elseif ($behaviour == ZetaPrints_WebToPrint_Model_System_Config_Source_TemplateDeletingBehaviour::DELETE) {
            foreach ($products as $product) {
              $full_product = $product_model->load($product->getId());

              $this->debug("Template for product {$full_product->getWebtoprintTemplate()} was removed");

              $full_product->delete();

              $this->debug("Product {$product->getSku()} was removed");
            }

            $template->delete();

          } else if ($behaviour >= 0) {
            $category = Mage::getModel('catalog/category')->load($behaviour);

            if (!$category->getId()) {
              $this->warning('Category doesn\'t exist. Check configuration.');
              continue;
            }

            foreach ($products as $product) {
              $full_product = $product_model->load($product->getId());

              $this->debug("Template for product {$full_product->getWebtoprintTemplate()} was removed");

              Mage::register('webtoprint-template-changed', true);
              $full_product
                ->setCategoryIds(array($behaviour))
                ->setRequiredOptions(false)
                ->setWebtoprintTemplate('');

              Mage::dispatchEvent(
                'webtoprint_product_update',
                array(
                  'product' => $full_product,
                  'template' => zetaprints_parse_template_details(
                    new SimpleXMLElement($template->getXml())
                  ),
                  'params' => array(
                    'process-quantities' => $this->_isProcessQuantities()
                  )
                )
              );

              $full_product->save();
              Mage::unregister('webtoprint-template-changed');

              $this->debug("Product {$product->getSku()} was moved to category {$category->getName()}");
            }

            $template->delete();
          }

        } else {
          foreach ($products as $product)
            if ($updateAll
                || (strtotime($product->getUpdatedAt()) <= strtotime($template->getDate()))) {
              $full_product = $product_model->load($product->getId());

              $this->debug("Template for product {$full_product->getWebtoprintTemplate()} changed");

              Mage::register('webtoprint-template-changed', true);

              //Mark product as changed and then save it.
              $full_product->setDataChanges(true);

              $templateDetails = zetaprints_parse_template_details(
                new SimpleXMLElement($template->getXml())
              );

              if ($cataloguesMapping === null) {
                $cataloguesMapping = array();

                $url = Mage::getStoreConfig('webtoprint/settings/url');
                $key = Mage::getStoreConfig('webtoprint/settings/key');

                $catalogues = zetaprints_get_list_of_catalogs($url, $key);

                foreach ($catalogues as $catalogue)
                  $cataloguesMapping[$catalogue['guid']]
                    = $catalogue['title'];

                unset($catalogues, $catalogue, $url, $key);
              }

              $templateDetails['catalogue']
                = $cataloguesMapping[$template->getCatalogGuid()];

              $categoryIds = $helper->getCategoriesIds(
                $templateDetails,
                $assignToParents,
                $categoryMappingStore
              );

              if ($categoryIds)
                $full_product->setCategoryIds($categoryIds);

              Mage::dispatchEvent(
                'webtoprint_product_update',
                array(
                  'product' => $full_product,
                  'template' => $templateDetails,
                  'params' => array(
                    'process-quantities' => $this->_isProcessQuantities()
                  )
                )
              );

              $full_product->save();

              Mage::unregister('webtoprint-template-changed');

              $this->debug("Product {$full_product->getWebtoprintTemplate()} was succesfully updated");
            }
        }
      }
    }
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
