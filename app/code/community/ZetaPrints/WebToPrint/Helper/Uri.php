<?php

class ZetaPrints_WebToPrint_Helper_Uri extends Mage_Core_Helper_Abstract
{
    public function prepareImageDownloadUri($imageUri)
    {
        $imageProxy = $this->getImageProxyUrl();
        if (!$imageProxy) {
            return $imageUri;
        }

        $baseUrl = Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_WEB);
        $baseUrlLength = strlen($baseUrl);
        $host = str_replace(['http://', 'https://'], '', trim($baseUrl, '/'));

        //        echo rtrim($imageProxy, '/')
        //            . '/'
        //            . substr($imageUri, $baseUrlLength)
        //            . '?remote=' . $host;
        //        echo PHP_EOL;

        return $imageProxy
            . '/'
            . substr($imageUri, $baseUrlLength)
            . '?remote=' . $host;
    }

    /**
     * @return string
     */
    public function getImageProxyUrl()
    {
        return rtrim(trim((string)Mage::getStoreConfig('webtoprint/settings/image_proxy_url')), '/');
    }

    /**
     * @return string
     */
    public function getApiUrl()
    {
        $url = trim(Mage::getStoreConfig('webtoprint/settings/url'));
        if (!$url) {
            throw new UnexpectedValueException('API URL is not defined');
        }

        return $url;
    }

    /**
     * @return string
     */
    public function getApiKey()
    {
        $key = Mage::getStoreConfig('webtoprint/settings/key');
        if (!$key) {
            throw new UnexpectedValueException('API key is not defined');
        }

        return $key;
    }
}
