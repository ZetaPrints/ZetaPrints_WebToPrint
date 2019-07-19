<?php

class ZetaPrints_WebToPrint_ThumbnailController
    extends Mage_Core_Controller_Front_Action
    implements ZetaPrints_Api
{

    public function getAction()
    {
        if (!$this->getRequest()->has('guid')) {
            return;
        }

        $guid = $this->getRequest()->get('guid');

        $width = 0;
        if ($this->getRequest()->has('width')) {
            $width = (int)$this->getRequest()->get('width');
        }

        $height = 0;
        if ($this->getRequest()->has('height')) {
            $height = (int)$this->getRequest()->get('height');
        }

        //Check if width or height is setted
        if (($width + $height) != 0) {
            $guid = str_replace('.', "_{$width}x{$height}.", $guid);
        }

        $url = Mage::helper('webtoprint')->getApiUrl() . '/thumb/' . $guid;

        $response = zetaprints_get_content_from_url($url);

        if (!zetaprints_has_error($response)) {
            $headers = isset($response['content']['header']) ? $response['content']['header'] : '';

            if (is_array($headers)) {
                $this->getResponse()
                    ->setHeader('Last-Modified', $headers['Last-Modified'], true)
                    ->setHeader('ETag', $headers['ETag'], true)
                    ->setHeader('Pragma', '', true)
                    ->setHeader('Cache-Control', 'public', true)
                    ->setHeader('Cache-Control', $headers['Cache-Control'])
                    ->setHeader('Expires', '', true)
                    ->setHeader('Content-Length', $headers['Content-Length'], true);
            }

            $finfo = new finfo(FILEINFO_MIME_TYPE);
            $contentType = $finfo->buffer($response['content']['body']);

            $this->getResponse()
                ->setHeader('Content-Type', $contentType)
                ->setBody($response['content']['body']);
        }
    }
}
