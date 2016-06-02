<?php

function _zetaprints_debug($msg = null)
{
    static $modernPhpVersion = -1;
    if ($modernPhpVersion === -1) {
        $modernPhpVersion = version_compare(PHP_VERSION, '5.4.0') >= 0;
    }
    if ($modernPhpVersion) {
        $backtrace = debug_backtrace(0, 2);
    } else {
        $backtrace = debug_backtrace();
    }

    $coreHttpHelper = Mage::helper('core/http');
    $metaData = array(
        'ip' => $coreHttpHelper ? $coreHttpHelper->getRemoteAddr() : null,
        'customerId' => null
    );

    $customerSession = Mage::getSingleton('customer/session');
    if (is_object($customerSession) && $customerSession->isLoggedIn()) {
        $customerData = $customerSession->getCustomer();
        $metaData['customerId'] = is_object($customerData) ? $customerData->getId() : null;
    }

    $checkoutSession = Mage::getSingleton('checkout/session');
    if (is_object($checkoutSession)) {
        $metaData['quoteId'] = $checkoutSession->getQuoteId();
    }

    $calleeName = $backtrace[1]['function'];

    if (!$msg) {
        $msg = "function parameters:" . json_encode($backtrace[1]['args']);
    } elseif (is_array($msg)) {
        $msg = json_encode($msg);
    }

    Mage::log(sprintf('[ZetaPrints] %s %s: %s', $calleeName, json_encode($metaData), $msg));
}
