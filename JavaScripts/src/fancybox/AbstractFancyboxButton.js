import $ from '../jQueryLoader';
import UiHelper from "../helper/UiHelper";
import Assert from "../helper/Assert";
import PreviewController from "../PreviewController";
import AbstractButton from "../view/AbstractButton";
import CloseButton from "./CloseButton";

export default class AbstractFancyboxButton extends AbstractButton {
    /**
     * @param {PreviewController} controller
     */
    constructor(controller) {
        Assert.assertInstanceOf(controller, PreviewController);
        super(controller);

        /**
         * @type {CloseButton}
         * @protected
         */
        this._close_button = null;

        /**
         * @type {boolean}
         * @protected
         */
        this._in_preview = false;

        this._on_click = this._on_click.bind(this);
    }

    /**
     * Adds the button if it does not already exist
     *
     * @param {DataInterface} data
     * @param {boolean} in_preview
     * @param {string} name
     * @param {string} guid
     */
    add(data, in_preview = false, name = '', guid = '') {
        if (this._button) {
            return false;
        }
        this._in_preview = in_preview;

        const button = this._create_button(data, in_preview, name, guid);
        if (typeof button.jquery === 'undefined') {
            throw new TypeError('The return type of _create_button() must be jQuery element');
        }
        button.click(() => {
            this._on_click(data);
        });

        if (in_preview) {
            const get_share_name_callback = this._build_get_share_name_callback(data, in_preview, name, guid);
            if (typeof get_share_name_callback !== 'function') {
                throw new TypeError('The return type of _build_get_shape_name_callback() must be function');
            }
            this._close_button = new CloseButton(this._controller, get_share_name_callback);
        }

        this._button = button;

        return true;
    }

    /**
     * Remove the button
     */
    remove() {
        super.remove();
        this._get_outer().removeClass('saved');
    }

    /**
     * @param {DataInterface} data
     * @param {boolean} in_preview
     * @param {string} name
     * @param {string} guid
     * @return {*|jQuery}
     * @protected
     */
    _create_button(data, in_preview, name, guid) {
        throw new Error('Not implemented');
    }

    /**
     * @param {DataInterface} data
     * @param {boolean} in_preview
     * @param {string} name
     * @param {string} guid
     * @return {function}
     * @protected
     */
    _build_get_share_name_callback(data, in_preview, name, guid) {
        throw new Error('Not implemented');
    }

    // /**
    //  * @param {DataInterface} data
    //  * @param {function} get_share_name_callback
    //  * @protected
    //  */
    // _prepare_close_button(data, get_share_name_callback) {
    //     Assert.assertFunction(get_share_name_callback, 'get_share_name_callback');
    //     const preview_controller = this._controller;
    //
    //     const original_close_button = UiHelper.instance().fancybox_close_button;
    //     original_close_button.addClass('resizer-tweaks');
    //
    //     const patched_close_button = original_close_button.clone();
    //     patched_close_button
    //         .css('display', 'inline')
    //         .click(() => {
    //             data._shape_to_show = get_share_name_callback(data);
    //
    //             /** @type {Preview} */
    //             const preview = preview_controller.get_preview_for_page_number(data.current_page);
    //             preview.open_lightbox();
    //
    //             this._restore_original_close_button();
    //         })
    //         .appendTo(this._get_outer());
    //
    //     original_close_button.attr('id', 'fancybox-close-orig');
    //
    //     this._original_close_button = original_close_button;
    //     this._patched_close_button = patched_close_button;
    // }

    /**
     * @return {jQuery|HTMLElement}
     * @protected
     */
    _get_outer() {
        return UiHelper.instance().fancybox_outer;
    }

    /**
     * @param {DataInterface} data
     * @protected
     */
    _on_click(data) {
        throw new Error('Not implemented');
    }
}
