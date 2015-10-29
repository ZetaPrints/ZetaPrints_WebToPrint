<?php

class ZetaPrints_WebToPrint_Model_Resource_Template_Collection
  extends Mage_Core_Model_Resource_Db_Collection_Abstract {

  protected function _construct() {
    $this->_init('webtoprint/template');
  }

  public function get_by_guid ($guid) {
    $this->getSelect()->where("guid = ?", (string)$guid);
    return $this;
  }
}
