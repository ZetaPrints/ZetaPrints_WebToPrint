/**
 * Created by cod on 10.4.17.
 */

import PreviewOverlay from "../view/PreviewOverlay";
import $ from "../jQueryLoader";
import Logger from "../Logger";
import Fancybox from "./UiHelper/Fancybox";
import ProductForm from "../view/ProductForm";

export default class UiHelper {
    /**
     * @return {UiHelper}
     */
    static instance() {
        if (!UiHelper._instance) {
            UiHelper._instance = new UiHelper();
        }
        return UiHelper._instance;
    }

    constructor() {
        if (UiHelper._instance) {
            Logger.error('An instance of UiHelper already exists');
        }
        /**
         * @type {PreviewOverlay}
         * @private
         */
        this._preview_overlay = null;

        /**
         * @type {ProductForm}
         * @private
         */
        this._product_form = null;
        this._fancybox_helper = new Fancybox();
    }

    /**
     * Hides the given element by adding the class zp-hidden
     *
     * @param {string|jQuery|HTMLElement|string[]|jQuery[]|HTMLElement[]|} element
     * @return {UiHelper}
     */
    hide(element) {
        if (Array.isArray(element)) {
            element.forEach((i) => this.hide(i));

            return this;
        }
        if (typeof element === 'string' || typeof element.nodeName === 'string') {
            return this.hide($(element));
        }
        if (typeof element.jquery === 'undefined') {
            throw new TypeError('Expected argument element to be a string, HTMLElement or jQuery object');
        }

        element.addClass('zp-hidden');

        return this;
    }

    /**
     * Shows the given element by removing the class zp-hidden
     *
     * @param {string|jQuery|HTMLElement|string[]|jQuery[]|HTMLElement[]|} element
     * @return {UiHelper}
     */
    show(element) {
        if (Array.isArray(element)) {
            element.forEach((i) => this.show(i));

            return this;
        }
        if (typeof element === 'string' || typeof element.nodeName === 'string') {
            return this.show($(element));
        }
        if (typeof element.jquery === 'undefined') {
            throw new TypeError('Expected argument element to be a string, HTMLElement or jQuery object');
        }

        element.removeClass('zp-hidden');

        return this;
    }

    /**
     * Returns if the element has the zp-hidden class
     *
     * @param {string|jQuery|HTMLElement} element
     * @return {boolean}
     */
    has_hide_class(element) {
        if (typeof element === 'string' || typeof element.nodeName === 'string') {
            return this.has_hide_class($(element));
        }
        if (typeof element.jquery === 'undefined') {
            throw new TypeError('Expected argument element to be a string, HTMLElement or jQuery object');
        }

        return element.hasClass('zp-hidden');
    }

    /**
     * @return {PreviewOverlay}
     */
    get preview_overlay() {
        if (!this._preview_overlay) {
            this._preview_overlay = new PreviewOverlay(this.product_image_gallery, updating_preview_image_text);
        }

        return this._preview_overlay;
    }

    /**
     * Returns the product image gallery
     *
     * The gallery is the parent of the original product image element
     *
     * @return {HTMLElement}
     */
    get product_image_gallery() {
        return this.original_product_image.parent()[0];
    }

    /**
     * Returns the original product image element
     *
     * This element will be removed and replaced by the page preview element
     *
     * @return {jQuery|HTMLElement}
     */
    get original_product_image() {
        return $('#image, #image-main');
    }

    /**
     * @return {jQuery|HTMLElement}
     */
    get product_image_box() {
        return $('#zetaprints-preview-image-container');
    }

    /**
     * @return {jQuery|HTMLElement}
     */
    get next_page_button() {
        return $('#zp-next-page-button');
    }

    /**
     * @return {jQuery|HTMLElement}
     */
    get enlarge_button() {
        return $('#zp-enlarge-button');
    }

    /**
     * @return {jQuery|HTMLElement}
     */
    get editor_button() {
        return $('#zp-editor-button');
    }

    /**
     * @return {jQuery|HTMLElement}
     */
    get update_preview_form_button() {
        return $('#zp-update-preview-form-button');
    }

    /**
     * @return {jQuery|HTMLElement}
     * @deprecated
     */
    get update_preview_button() {
        return $('#zp-update-preview-button');
    }

    /**
     * @return {jQuery|HTMLElement}
     */
    get form_button() {
        return $('#zp-form-button')
    }

    /**
     * @return {ProductForm}
     */
    get product_form() {
        if (!this._product_form) {
            this._product_form = new ProductForm($('#product_addtocart_form'));
        }

        return this._product_form;
    }

    /**
     * @return {*|jQuery|HTMLElement}
     */
    get select_image_elements() {
        return $(this.select_image_elements_selector);
    }

    /**
     * @return {string}
     */
    get select_image_elements_selector() {
        return '.' + this.select_image_elements_class_name;
    }

    /**
     * @return {string}
     */
    get select_image_elements_class_name() {
        return 'zetaprints-images-selector';
    }

    /**
     * @return {*|jQuery|HTMLElement}
     */
    get select_image_button() {
        return $('#zp-select-image-button')
    }

    /**
     * @return {Fancybox}
     */
    get fancybox() {
        return this._fancybox_helper;
    }

    /**
     * @return {jQuery|HTMLElement}
     */
    get fancybox_close_button() {
        return this.fancybox.close_button;
    }

    /**
     * @return {jQuery|HTMLElement}
     */
    get fancybox_outer() {
        return this.fancybox.outer;
    }

    /**
     * @return {*|jQuery|HTMLElement}
     */
    get fancybox_content() {
        return this.fancybox.content;
    }

    /**
     * @return {*|jQuery|HTMLElement}
     */
    get fancybox_wrap() {
        return this.fancybox.wrap;
    }

    /**
     * @return {*|jQuery|HTMLElement}
     */
    get fancybox_resize() {
        return this.fancybox.resize;
    }

    /**
     * @return {*|jQuery|HTMLElement}
     */
    get fancybox_overlay() {
        return this.fancybox.overlay;
    }

    /**
     * @return {*|jQuery|HTMLElement}
     */
    get fancybox_image() {
        return this.fancybox.image;
    }

    /**
     * @return {string}
     */
    get fancybox_image_selector() {
        return this.fancybox.image_selector;
    }
}

/**
 * @type {UiHelper}
 * @private
 */
UiHelper._instance = null;
