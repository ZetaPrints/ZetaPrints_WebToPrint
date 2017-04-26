/**
 * Created by cod on 18.4.17.
 */

import Logger from "../Logger";
export default class PreviewOverlay {
    /**
     * @param {HTMLElement} product_image_element
     * @param {string} updating_preview_image_text
     */
    constructor(product_image_element, updating_preview_image_text) {
        this._element = $('<div id="zp-preview-overlay" class="zp-no-preview">' +
            '<div class="zp-preview-overlay-spinner">' +
            '<div />' +
            '</div>' +
            '<div class="zp-preview-overlay-text-wrapper">' +
            '<span class="zp-preview-overlay-text-left">' +
            '&nbsp;' +
            '</span>' +
            '<span class="zp-preview-overlay-text-middle">' +
            updating_preview_image_text + '&hellip;' +
            '</span>' +
            '<span class="zp-preview-overlay-text-right">' +
            '&nbsp;' +
            '</span>' +
            '</div>' +
            '</div>')
            .appendTo(product_image_element);
    }

    // get element() {
    //     return this._element;
    // }

    /**
     * Hides the Preview Overlay
     *
     * @return {PreviewOverlay}
     */
    hide() {
        Logger.log('[PreviewOverlay] hide', this._element);
        this._element.addClass('zp-hidden');

        return this;
    }

    /**
     * Shows the Preview Overlay
     *
     * @return {PreviewOverlay}
     */
    show() {
        Logger.log('[PreviewOverlay] show', this._element);
        this._element.removeClass('zp-hidden');

        return this;
    }

    /**
     * @return {PreviewOverlay}
     */
    remove_no_preview() {
        this._element.removeClass('zp-no-preview');

        return this;
    }
}
