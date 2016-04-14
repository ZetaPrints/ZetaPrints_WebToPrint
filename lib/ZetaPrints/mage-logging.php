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

    $metaData = array(
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
        $msg = "function parameters:\n" . var_export($backtrace[1]['args'], true);
    } else {
        if (is_array($msg)) {
            $msg = "\n" . var_export($msg, true);
        }
    }

    Mage::log(sprintf('%s %s: %s', $calleeName, json_encode($metaData), $msg));
}
