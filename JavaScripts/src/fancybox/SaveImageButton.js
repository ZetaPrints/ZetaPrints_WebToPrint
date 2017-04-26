import $ from '../jQueryLoader';
import Logger from '../Logger';
import UiHelper from "../helper/UiHelper";
import Assert from "../helper/Assert";
import PreviewController from "../PreviewController";

export default class SaveImageButton {
    /**
     * @return {SaveImageButton}
     */
    static instance() {
        if (!SaveImageButton._instance) {
            SaveImageButton._instance = new SaveImageButton();
        }

        return SaveImageButton._instance;
    }

    /**
     */
    constructor() {
        /**
         * @type {jQuery|HTMLLinkElement}
         * @private
         */
        this._button = null;

        /**
         * @type {null}
         * @private
         */
        this._state = null;
    }

    /**
     * @return {jQuery|HTMLLinkElement}
     */
    get button() {
        return this._button;
    }

    /**
     * Adds the button
     *
     * @param {PreviewController} preview_controller
     * @param {DataInterface} zp
     * @param {boolean} in_preview
     * @param {string} name
     * @param {string} guid
     */
    static fancybox_add_save_image_button(preview_controller, zp, in_preview, name, guid) {
        SaveImageButton.instance().add(preview_controller, zp, in_preview, name, guid);
    }

    /**
     * Change the button
     *
     * @param {boolean} changed
     */
    static fancybox_update_save_image_button(changed) {
        SaveImageButton.instance().update(changed);
    }

    /**
     * Remove the button
     */
    static fancybox_remove_save_image_button() {
        SaveImageButton.instance().remove();
    }

    /**
     * Adds the button if it does not already exist
     *
     * @param preview_controller
     * @param {DataInterface} data
     * @param {boolean} in_preview
     * @param {string} name
     * @param {string} guid
     */
    add(preview_controller, data, in_preview, name, guid) {
        if (!this._button) {
            this._button = this._create_button(preview_controller, data, in_preview, name, guid);
        }
    }

    /**
     * Change the button
     *
     * @param {boolean} changed
     */
    update(changed) {
        const new_state = changed === undefined ? SaveImageButton.STATE_UNDEFINED : (changed ? SaveImageButton.STATE_DIRTY : SaveImageButton.STATE_CLEAN);
        if (this._state !== new_state) {
            this._state = new_state;

            if (new_state === SaveImageButton.STATE_UNDEFINED) {
                this._button.addClass('disabled');
                this._get_outer().removeClass('saved');
            } else if (new_state === SaveImageButton.STATE_DIRTY) {
                this._get_outer().removeClass('saved');
                this._button.removeClass('disabled');
            } else {
                this._button.addClass('disabled');
                this._get_outer().addClass('saved');
            }
        }
    }

    /**
     * Remove the button
     */
    remove() {
        this._button.remove();
        this._get_outer().removeClass('saved');
        this._button = null;
    }

    /**
     * @param {PreviewController} preview_controller
     * @param {DataInterface} zp
     * @param {boolean} in_preview
     * @param {string} name
     * @param {string} guid
     * @return {*|jQuery}
     * @private
     */
    _create_button(preview_controller, zp, in_preview, name, guid) {
        Assert.assertInstanceOf(preview_controller, PreviewController);

        const $outer = this._get_outer();
        if ($outer.length === 0) {
            throw new ReferenceError('Could not find fancybox-outer')
        }

        const $button = $('<a id="zp-save-image-button" class="disabled">' +
            '<span class="icon left-part" />' +
            '<span class="text">' +
            '<span class="save-image-text">' + save_text + '</span>' +
            '<span class="saved-image-text">' + saved_text + '</span>' +
            '</span>' +
            '</a>').appendTo($outer);

        const $close = UiHelper.instance().fancybox_close_button.addClass('resizer-tweaks');

        if (in_preview) {
            $close
                .clone()
                .css('display', 'inline')
                .click(function () {
                    zp._shape_to_show = name;

                    preview_controller.get_preview_for_page_number(zp.current_page).preview_click();
                    // $('#preview-image-page-' + zp.current_page).click();

                    $(this).remove();
                    $close.attr('id', 'fancybox-close');
                })
                .appendTo($outer);

            $close.attr('id', 'fancybox-close-orig');
        }

        $button.addClass('no-middle');

        $button.click(function () {
            if ($button.hasClass('disabled')) {
                return;
            }

            /**
             * @type {ImageEditingContext}
             */
            const image_editing_context = zp.image_edit;
            image_editing_context.save();
            image_editing_context.$input.prop('checked', true).change();

            $outer.addClass('saved');
            $button.addClass('disabled');
        });

        return $button;
    }

    /**
     * @return {jQuery|HTMLElement}
     * @private
     */
    _get_outer() {
        return UiHelper.instance().fancybox_outer;
    }
}

/**
 * @type {SaveImageButton}
 * @private
 */
SaveImageButton._instance = null;

SaveImageButton.STATE_CLEAN = 1;
SaveImageButton.STATE_DIRTY = 2;
SaveImageButton.STATE_UNDEFINED = 3;