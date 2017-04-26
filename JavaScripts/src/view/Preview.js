/**
 * Created by cod on 25.4.17.
 */

import UiHelper from "../helper/UiHelper";
import Logger from "../Logger";
export default class Preview {
    /**
     * @param {DataInterface} data
     * @param {number} page_number
     * @param {PreviewController} controller
     * @return {*|jQuery}
     */
    constructor(data, page_number, controller) {
        this.preview_click = this.preview_click.bind(this);
        this._page_number = page_number;
        this._controller = controller;
        this._data = data;
        this._element = null;
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
        /**
         * @type {TemplateDetail}
         */
        const template_details = data.template_details;
        const product_image_element = UiHelper.instance().product_image_gallery;

        // Don't load default image for the first page when updating it
        // on page loading. Otherwise the activity disappears after the default image
        // is loaded but before the image is updated.
        const url = this._get_url(page_number, data, template_details);

        this._element = $('<a id="preview-image-page-' + page_number + '" ' +
            'class="zetaprints-template-preview zp-hidden" ' +
            'href="' + url + '">' +
            '<img title="' + click_to_view_in_large_size + '" ' +
            'src="' + url + '" ' +
            'alt="Preview image for page ' + page_number + '" />' +
            '</a>')
            .appendTo(product_image_element);

        this._element.click((event) => {
            event.preventDefault();
            this.preview_click();
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
    }

    /**
     *
     */
    preview_click() {
        throw new Error('What should happen now?');
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
     * @param {TemplateDetail} template_details
     * @return {string}
     * @private
     */
    _get_url(page_number, data, template_details) {
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