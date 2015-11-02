<?php

function _zetaprints_debug ($msg = null) {
  static $modernPhpVersion = version_compare(PHP_VERSION, '5.4.0') >= 0;
  if ($modernPhpVersion) {
    $backtrace = debug_backtrace(0, 2);
  } else {
  $backtrace = debug_backtrace();
  }

  $callee_name = $backtrace[1]['function'];

  if (!$msg)
    $msg = "function parameters:\n" . var_export($backtrace[1]['args'], true);
  else if (is_array($msg))
    $msg = "\n" . var_export($msg, true);

  Mage::log("$callee_name: $msg");
}
