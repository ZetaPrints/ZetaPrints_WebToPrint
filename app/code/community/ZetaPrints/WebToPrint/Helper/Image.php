<?php

class ZetaPrints_WebToPrint_Helper_Image extends ZetaPrints_WebToPrint_Helper_Data implements ZetaPrints_Api
{
    /**
     * Returns the WebToPrint image URLs for the given context
     *
     * @param Mage_Checkout_Block_Cart_Item_Renderer $context
     * @return string[]
     */
    public function getCartImageUrls($context)
    {
        $options = unserialize($context->getItem()->getOptionByCode('info_buyRequest')->getValue());

        if (!isset($options['zetaprints-previews']) || !$options['zetaprints-previews']) {
            return [];
        }

        $images = array_filter(array_map('trim', explode(',', $options['zetaprints-previews'])));

        return array_map([$this, 'get_thumbnail_url'], $images);
    }

    /**
     * Returns the first WebToPrint image URL for the given context
     *
     * @param Mage_Checkout_Block_Cart_Item_Renderer $context
     * @return string
     */
    public function getFirstCartImageUrl($context)
    {
        $urls = $this->getCartImageUrls($context);

        return reset($urls);
    }
}
