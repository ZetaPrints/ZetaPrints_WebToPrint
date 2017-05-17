/**
 * Created by cod on 20.4.17.
 */
import $ from '../jQueryLoader';
import LightboxConfiguration from "../model/LightboxConfiguration";

// Remove the X-fancybox header
$.fancybox.defaults.ajax.headers = {};

export default class AbstractLightbox {
    /**
     * Redraw the currently visible lightbox
     */
    static redraw() {
        const fancybox_version = AbstractLightbox._get_version();
        if (fancybox_version === 2) {
            $.fancybox.update()
        } else if (fancybox_version === 1) {
            $.fancybox.resize();
        }
    }

    /**
     * Close the currently visible lightbox
     */
    static close() {
        $.fancybox.close()
    }

    /**
     * @param {LightboxConfiguration|object} options
     * @return {*}
     * @protected
     */
    _prepare_options(options) {
        if (!(options instanceof LightboxConfiguration)) {
            options = new LightboxConfiguration(options);
        }

        const fancybox_version = AbstractLightbox._get_version();
        if (fancybox_version === 2) {
            return this._prepare_options_for_v2(options);
        } else if (fancybox_version === 1) {
            return this._prepare_options_for_v1(options);
        }

        throw new Error('No matching fancyBox version found');
    }

    /**
     * @return {number}
     * @private
     */
    static _get_version() {
        const fancybox = $['fancybox'];

        return typeof fancybox.version === 'string' ? parseInt(fancybox.version, 10) : 1;
    }

    /**
     * @param {LightboxConfiguration} options
     * @private
     */
    _prepare_options_for_v1(options) {
        let prepared_options = $.extend(true, {}, options);

        prepared_options['centerOnScroll'] = options.autoCenter;
        prepared_options['showNavArrows'] = options.arrows;
        prepared_options['hideOnContentClick'] = options.closeClick;
        prepared_options['overlayShow'] = options.showOverlay;
        prepared_options['hideOnOverlayClick'] = options.closeOnOverlayClick;
        prepared_options['titleShow'] = options.showTitle;
        prepared_options['onStart'] = options.willShow;
        prepared_options['onComplete'] = options.didShow;
        prepared_options['onCleanup'] = options.willClose;
        prepared_options['onClosed'] = options.didClose;
        prepared_options['showCloseButton'] = options.showCloseButton;

        return prepared_options;
    }

    /**
     * @param {LightboxConfiguration} options
     * @private
     */
    _prepare_options_for_v2(options) {
        let prepared_options = $.extend(true, {}, options);

        if (!options.showTitle) {
            prepared_options['helpers'] = $.extend(true, {}, prepared_options['helpers'], {title: null});
        }
        if (!options.closeOnOverlayClick) {
            prepared_options['helpers'] = $.extend(true, {}, prepared_options['helpers'], {overlay: {closeClick: false}});
        }
        if (!options.showOverlay) {
            prepared_options['helpers'] = $.extend(true, {}, prepared_options['helpers'], {overlay: null});
        }

        prepared_options['closeBtn'] = options.showCloseButton;
        prepared_options['beforeShow'] = options.willShow;
        prepared_options['afterShow'] = options.didShow;
        prepared_options['beforeClose'] = options.willClose;
        prepared_options['afterClose'] = options.didClose;

        return prepared_options;
    }
}
