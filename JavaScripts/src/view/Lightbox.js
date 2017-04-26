/**
 * Created by cod on 20.4.17.
 */
import $ from '../jQueryLoader';
import Logger from '../Logger';
import LightboxConfiguration from "../model/LightboxConfiguration";
import AbstractLightbox from "./AbstractLightbox";


export default class Lightbox extends AbstractLightbox {
    /**
     * @param {string|jQuery|HTMLElement} element
     * @param {LightboxConfiguration|object} options
     */
    register(element, options = undefined) {
        Logger.debug('[Lightbox] register', element);
        $(element).fancybox(this._prepare_options(options || new LightboxConfiguration()));
    }

    /**
     * @param {LightboxConfiguration|object} options
     */
    open(options = undefined) {
        Logger.debug('[Lightbox] open');
        $.fancybox(this._prepare_options(options || new LightboxConfiguration()));
    }
}
