/**
 * Created by cod on 20.4.17.
 */
import $ from '../jQueryLoader';
import LightboxConfiguration from "../model/LightboxConfiguration";

$.fancybox.defaults.ajax.headers = {};

export default class AbstractLightbox {
    /**
     * @return {LightboxConfiguration}
     * @protected
     */
    _get_default_options() {
        return new LightboxConfiguration();
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

        const merged_options = $.extend(true, {}, this._get_default_options(), options);
        const fancybox = $['fancybox'];
        const fancybox_version = typeof fancybox.version === 'string' ? parseInt(fancybox.version, 10) : 1;

        if (fancybox_version === 2) {
            return this._prepare_options_for_v2(merged_options);
        } else if (fancybox_version === 1) {
            return this._prepare_options_for_v1(merged_options);
        }

        throw new Error('No matching fancyBox version found');
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
            prepared_options['helpers'] = $.extend(true, {}, prepared_options['helpers'], {overlay: {closeClick: true}});
        }
        if (!options.showOverlay) {
            prepared_options['helpers'] = $.extend(true, {}, prepared_options['helpers'], {overlay: null});
        }

        prepared_options['beforeLoad'] = options.willShow;
        prepared_options['afterShow'] = options.didShow;
        prepared_options['beforeClose'] = options.willClose;
        prepared_options['afterClose'] = options.didClose;

        return prepared_options;
    }
}
