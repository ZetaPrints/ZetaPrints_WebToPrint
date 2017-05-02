<?php

class ZetaPrints_WebToPrint_Model_System_Config_Source_TemplateDeletingBehaviour
{
    const NONE = -1;
    const DELETE = -2;

    protected $_options;

    public function toOptionArray()
    {
        if (!$this->_options) {

            $collection = Mage::getResourceModel('catalog/category_collection');
            $collection->addAttributeToSelect('name')
                ->addPathFilter('^1/[0-9/]+$')
                ->load();

            $categories = [];

            foreach ($collection as $category) {
                $categories[] = [
                    'label' => $category->getName(),
                    'value' => $category->getId(),
                ];
            }

            $this->_options = [
                ['value' => self::NONE, 'label' => 'Ignore'],
                ['value' => self::DELETE, 'label' => 'Delete products'],
                ['label' => 'Move products to category:', 'value' => $categories],
            ];
        }

        return $this->_options;
    }
}
