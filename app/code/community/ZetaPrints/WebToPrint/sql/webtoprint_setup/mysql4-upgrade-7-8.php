<?php

$tmpMediaPath = Mage::getModel('catalog/product_media_config')->getTmpMediaPath('previews');
if (!file_exists($tmpMediaPath)) {
    mkdir($tmpMediaPath, 0777, true);
}

