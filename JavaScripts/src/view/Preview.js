/**
 * Created by cod on 25.4.17.
 */

import UiHelper from "../helper/UiHelper";
import Logger from "../Logger";
import LightboxConfiguration from "../model/LightboxConfiguration";
import Lightbox from "./Lightbox";
export default class Preview {
    /**
     * @param {DataInterface} data
     * @param {number} page_number
     * @param {PreviewController} controller
     * @param {LightboxCallbackConfiguration} lightbox_callbacks
     * @return {*|jQuery}
     */
    constructor(data, page_number, controller, lightbox_callbacks) {
        this.open_lightbox = this.open_lightbox.bind(this);
        this._page_number = page_number;
        this._controller = controller;
        this._data = data;
        this._element = null;
        this._lightbox_callbacks = lightbox_callbacks;

        this._url = this._detect_url(page_number, data);
    }

    /**
     * @return {jQuery}
     */
    get element() {
        return this._element;
    }

    /**
     * Shows the preview
     */
    show() {
        const _this = this;
        const data = this._data;
        const page_number = this._page_number;
        const product_image_element = UiHelper.instance().product_image_gallery;

        // Don't load default image for the first page when updating it on page loading. Otherwise the activity
        // disappears after the default image is loaded but before the image is updated.
        this._element = $('<a id="preview-image-page-' + page_number + '" ' +
            'class="zetaprints-template-preview zp-hidden" ' +
            'href="' + this._url + '">' +
            '<img title="' + click_to_view_in_large_size + '" ' +
            'src="' + this._url + '" ' +
            'alt="Preview image for page ' + page_number + '" />' +
            '</a>')
            .appendTo(product_image_element);

        this._element.click((event) => {
            event.preventDefault();
            this.open_lightbox();
        });

        const images = this._element.children();

        images.bind('load', {page_number: page_number}, function () {
            _this._image_on_load(this, data);
        });
    }

    /**
     * Updates the link's and image's URL
     *
     * @param {string} url
     */
    update_url(url) {
        const $preview = this._element;
        if (!$preview) {
            Logger.error('[Preview] DOM element does not exist');
        }
        $preview.attr('href', '' + url);
        $preview.find('img').attr('src', '' + url);

        this._url = '' + url;

        Lightbox.redraw();
    }

    /**
     *
     */
    open_lightbox() {
        const url = this._url;

        // Remove trailing slashes. This seems to be required in Fancybox 2
        const href = url.substr(-1) === '/' ? url.slice(0, -1) : url;

        const local_lightbox_configuration = new LightboxConfiguration({
            'opacity': true,
            'showOverlay': false,
            'transitionIn': 'elastic',
            'speedIn': 500,
            'speedOut': 500,
            'showTitle': false,
            'hideOnContentClick': true,
            'showNavArrows': false,
            'href': href
        });

        const lightbox = new Lightbox();
        lightbox.open(Object.assign({}, local_lightbox_configuration, this._lightbox_callbacks));
    }

    /**
     * @param {HTMLImageElement} element
     * @param {DataInterface} data
     * @private
     */
    _image_on_load(element, data) {
        this._controller.image_on_load_callback(data, this._page_number, element, this);
    }


    /**
     * @param {number} page_number
     * @param {DataInterface} data
     * @return {string}
     * @private
     */
    _detect_url(page_number, data) {
        const template_details = data.template_details;
        if (page_number === 1 && data.update_first_preview_on_load) {
            return '';
        } else if (template_details.pages[page_number]['updated-preview-url']) {
            const url = template_details.pages[page_number]['updated-preview-url'];

            this._controller.update_preview_sharing_link_for_page(
                data,
                page_number,
                url.split('/preview/')[1]
            );

            return url;
        }

        return '' + template_details.pages[page_number]['preview-url'];
    }
}