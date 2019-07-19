import $ from '../jQueryLoader';
import Logger from '../Logger';
import LightboxConfiguration from '../model/LightboxConfiguration';
import AbstractLightbox from './AbstractLightbox';

export default class Lightbox extends AbstractLightbox {
    /**
     * @param {string|jQuery|HTMLElement} element
     * @param {LightboxConfiguration|object} options
     */
    register(element, options = undefined) {
        Logger.debug('[Lightbox] Register', element);
        jQuery.migrateMute = true;
        $(element).fancybox(this._prepare_options(options || new LightboxConfiguration()));
        jQuery.migrateMute = false;
    }

    /**
     * @param {LightboxConfiguration|object} options
     */
    open(options = undefined) {
        Logger.debug('[Lightbox] Open');
        $.fancybox(this._prepare_options(options || new LightboxConfiguration()));
    }
}
