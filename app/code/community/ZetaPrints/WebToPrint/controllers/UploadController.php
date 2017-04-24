<?php

class ZetaPrints_WebToPrint_UploadController extends Mage_Core_Controller_Front_Action implements ZetaPrints_Api
{
    public function indexAction()
    {
        $this->callbackToResult(
            function () {
                return $this->preformUpload();
            }
        );
    }

    public function byUrlAction()
    {
        $request = $this->getRequest();

        if ($request->has('url') && $url = $request->get('url')) {
            $this->callbackToResult(
                function () use ($url) {
                    return $this->retrieveImage($url);
                }
            );
        }
    }

    /**
     * Executes the given callback and transforms the result into an API result
     *
     * @param callable $callback
     */
    private function callbackToResult(callable $callback)
    {
        try {
            $data = $callback();
            echo json_encode($data);
        } catch (ZetaPrints_WebToPrint_Exception_DataException $e) {
            Mage::log(
                sprintf(
                    'Caught ZetaPrints exception %s #%s: %s (%s)',
                    get_class($e),
                    $e->getCode(),
                    $e->getMessage(),
                    $this->getExceptionEnvironment()
                )
            );
            if (class_exists('Iresults_Debug_Model_ExceptionHandler', false)) {
                Iresults_Debug_Model_ExceptionHandler::handleException($e);
            } else {
                Mage::logException($e);
            }

            if (Mage::getIsDeveloperMode()) {
                echo $this->formatErrorOutput($e);
            } else {
                echo 'Error';
            }
        }
    }

    /**
     * @return array
     */
    private function preformUpload()
    {
        $uploaded_file = $_FILES['customer-image'];

        if ($uploaded_file['error'] != UPLOAD_ERR_OK) {
            throw new ZetaPrints_WebToPrint_Exception_DataErrorException(
                sprintf(
                    'An error occurred during uploading the files %s',
                    isset($uploaded_file['name']) ? $uploaded_file['name'] : ''
                )
            );
        }

        /** @var Mage_Catalog_Model_Product_Media_Config $media_config */
        $media_config = Mage::getModel('catalog/product_media_config');

        $extension = substr($uploaded_file['name'], strrpos($uploaded_file['name'], '.'));
        $file_name = zetaprints_generate_guid() . strtolower($extension);
        $zp_dir = (string)Mage::getConfig()->getNode('default/zetaprints/webtoprint/uploading/dir');
        $file_path = $media_config->getTmpMediaPath("{$zp_dir}/{$file_name}");

        $result = move_uploaded_file($uploaded_file['tmp_name'], $file_path);

        if (!$result) {
            throw new ZetaPrints_WebToPrint_Exception_DataErrorException(
                sprintf(
                    'Could not move uploaded file "%s" to "%s"',
                    isset($uploaded_file['name']) ? $uploaded_file['name'] : '',
                    $file_path
                )
            );
        }

        /** @var ZetaPrints_WebToPrint_Helper_Data $helper */
        $helper = Mage::helper('webtoprint');

        $user_credentials = $helper->get_zetaprints_credentials();

        $img_url = $this->prepareImageUrl($media_config, $zp_dir, $file_name);


        $params = [
            'ID'   => $user_credentials['id'],
            'Hash' => zetaprints_generate_user_password_hash($user_credentials['password']),
            'URL'  => $img_url,
        ];

        $url = Mage::getStoreConfig('webtoprint/settings/url');
        $key = Mage::getStoreConfig('webtoprint/settings/key');

        $image = zetaprints_download_customer_image($url, $key, $params);

        if (is_array($image) && count($image) == 1) {
            $image = $image[0];
        } else {
            throw new ZetaPrints_WebToPrint_Exception_InvalidImageDataException(
                sprintf('Invalid image data for image URL "%s"', $url)
            );
        }

        $result = [
            'guid'      => $image['guid'],
            'thumbnail' => '',
        ];

        if ($image['mime'] === 'image/jpeg' || $image['mime'] === 'image/jpg') {
            $result['thumbnail'] = $helper
                ->get_photo_thumbnail_url(
                    $image['thumbnail'],
                    0,
                    100
                );
        } else {
            $result['thumbnail'] = $helper->get_photo_thumbnail_url($image['thumbnail']);
        }

        // Keep the source file
        // unlink($file_path);

        return $result;
    }

    /**
     * @param string $url
     * @return array|mixed|null
     */
    private function retrieveImage($url)
    {
        /** @var ZetaPrints_WebToPrint_Helper_Data $helper */
        $helper = Mage::helper('webtoprint');

        $credentials = $helper->get_zetaprints_credentials();

        $params = [
            'ID'   => $credentials['id'],
            'Hash' => zetaprints_generate_user_password_hash($credentials['password']),
            'URL'  => $url,
        ];

        $w2pBaseUrl = Mage::getStoreConfig('webtoprint/settings/url');
        $key = Mage::getStoreConfig('webtoprint/settings/key');

        $image = zetaprints_download_customer_image($w2pBaseUrl, $key, $params);

        if (is_array($image) && count($image) == 1) {
            $image = $image[0];
        } else {
            throw new ZetaPrints_WebToPrint_Exception_ImageRetrievalException(
                sprintf(
                    'Could not retrieve image from %s',
                    $url
                )
            );
        }

        if ($image['mime'] === 'image/jpeg' || $image['mime'] === 'image/jpg') {
            $image['thumbnail_url'] = $helper
                ->get_photo_thumbnail_url(
                    $image['thumbnail'],
                    0,
                    100
                );
        } else {
            $image['thumbnail_url'] = $helper
                ->get_photo_thumbnail_url($image['thumbnail']);
        }

        return $image;
    }

    private function getExceptionEnvironment()
    {
        $environment = [];
        /** @var Mage_Customer_Model_Session $customerSession */
        $customerSession = Mage::getSingleton('customer/session');
        if ($customerSession->isLoggedIn()) {
            $customerData = $customerSession->getCustomer();
            $environment['customerId'] = $customerData->getId();
        } else {
            $environment['customerId'] = 'not logged in';
        }

        /** @var Mage_Checkout_Model_Session $checkoutSession */
        $checkoutSession = Mage::getSingleton('checkout/session');
        if ($checkoutSession) {
            $environment['quoteId'] = $checkoutSession->getQuoteId();
        }

        return json_encode($environment);
    }

    /**
     * @param Mage_Catalog_Model_Product_Media_Config $media_config
     * @param string                                  $zp_dir
     * @param string                                  $file_name
     * @return string
     */
    private function prepareImageUrl($media_config, $zp_dir, $file_name)
    {
        //FIXME fast n dirty image upload fix
        $img_url = $media_config->getTmpMediaUrl("{$zp_dir}/{$file_name}");

        if (substr($img_url, 0, 1) == '/') {
            $img_url = 'http://' . $_SERVER['SERVER_NAME'] . $img_url;
        }

        return $img_url;

        // TEMP fix
        //$img_url = 'http://w2p-proxy.devweb.li' . substr($img_url, strlen('http://shop.philatelie.li'));
    }

    /**
     * @param Exception $exception
     * @param int       $statusCode
     * @return string
     */
    private function formatErrorOutput(Exception $exception, $statusCode = 400)
    {
        http_response_code($statusCode);

        $exceptionData = [
            'error'     => $exception->getMessage(),
            'backtrace' => $exception->getTraceAsString(),
        ];

        return json_encode($exceptionData, JSON_PRETTY_PRINT);
    }
}
