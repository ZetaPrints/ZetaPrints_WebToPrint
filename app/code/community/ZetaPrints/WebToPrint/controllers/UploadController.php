<?php

class ZetaPrints_WebToPrint_UploadController
  extends Mage_Core_Controller_Front_Action
  implements ZetaPrints_Api {

  public function indexAction () {
    $uploaded_file = $_FILES['customer-image'];

    if ($uploaded_file['error'] != UPLOAD_ERR_OK) {
      echo 'Error';
      return;
    }

    $media_config = Mage::getModel('catalog/product_media_config');

    $extension = substr($uploaded_file['name'], strrpos($uploaded_file['name'], '.'));
    $file_name = zetaprints_generate_guid() . strtolower($extension);
    $zp_dir = (string)Mage::getConfig()->getNode('default/zetaprints/webtoprint/uploading/dir');
    $file_path = $media_config->getTmpMediaPath("{$zp_dir}/{$file_name}");

    $result = move_uploaded_file($uploaded_file['tmp_name'], $file_path);

    if (!$result) {
      echo 'Error';
      return;
    }

    $helper = Mage::helper('webtoprint');

    $user_credentials = $helper->get_zetaprints_credentials();

    //FIXME fast n dirty image upload fix
    $img_url = $media_config->getTmpMediaUrl("{$zp_dir}/{$file_name}");

    if(substr($img_url, 0, 1) == '/')
      $img_url = 'http://'.$_SERVER['SERVER_NAME'].$img_url;
    else
      //ZetaPrints doesn't accept URLs with HTTPS scheme
      $img_url = str_replace('https://', 'http://', $img_url);

    $params = array(
      'ID' => $user_credentials['id'],
      'Hash' => zetaprints_generate_user_password_hash($user_credentials['password']),
      'URL' => $img_url);

    $url = Mage::getStoreConfig('webtoprint/settings/url');
    $key = Mage::getStoreConfig('webtoprint/settings/key');

    $image = zetaprints_download_customer_image($url, $key, $params);

    unlink($file_path);

    if (is_array($image) && count($image) == 1)
      $image = $image[0];
    else {
      echo 'Error';
      return;
    }

    $result = array('guid' => $image['guid']);

    if ($image['mime'] === 'image/jpeg' || $image['mime'] === 'image/jpg')
      $result['thumbnail'] = $helper
                               ->get_photo_thumbnail_url($image['thumbnail'],
                                                         0,
                                                         100);
    else
      $result['thumbnail'] = $helper
                                 ->get_photo_thumbnail_url($image['thumbnail']);

    echo json_encode($result);
  }

  public function byUrlAction () {
    $request = $this->getRequest();

    if (!($request->has('url') && $url = $request->get('url')))
      return;

    $helper = Mage::helper('webtoprint');

    $credentials = $helper->get_zetaprints_credentials();

    $params = array(
      'ID' => $credentials['id'],
      'Hash'
        => zetaprints_generate_user_password_hash($credentials['password']),
      'URL' => $url
    );

    $url = Mage::getStoreConfig('webtoprint/settings/url');
    $key = Mage::getStoreConfig('webtoprint/settings/key');

    $image = zetaprints_download_customer_image($url, $key, $params);

    if (is_array($image) && count($image) == 1)
      $image = $image[0];
    else {
      echo 'Error';
      return;
    }

    if ($image['mime'] === 'image/jpeg' || $image['mime'] === 'image/jpg')
      $image['thumbnail_url'] = $helper
                                  ->get_photo_thumbnail_url($image['thumbnail'],
                                                            0,
                                                            100);
    else
      $image['thumbnail_url'] = $helper
                                 ->get_photo_thumbnail_url($image['thumbnail']);

    echo json_encode($image);
  }
}
?>
