import $ from '../jQueryLoader';
import Logger from '../Logger';
import UiHelper from "../helper/UiHelper";
import Assert from "../helper/Assert";
import PreviewController from "../PreviewController";
import NotificationHelper from "../NotificationCenter";
import AbstractButton from "../view/AbstractButton";
import AbstractFancyboxButton from "./AbstractFancyboxButton";

export default class SaveImageButton extends AbstractFancyboxButton {
    /**
     * @param controller
     */
    constructor(controller) {
        super(controller);

        /**
         * @type {null}
         * @private
         */
        this._state = null;
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
     * @inheritDoc
     */
    _create_button(data, in_preview, name, guid) {
        const $outer = this._get_outer();
        if ($outer.length === 0) {
            throw new ReferenceError('Could not find fancybox-outer')
        }

        return $('<a id="zp-save-image-button" class="no-middle disabled">' +
            '<span class="icon left-part" />' +
            '<span class="text">' +
            '<span class="save-image-text">' + save_text + '</span>' +
            '<span class="saved-image-text">' + saved_text + '</span>' +
            '</span>' +
            '</a>').appendTo($outer);
    }

    /**
     * @inheritDoc
     */
    _on_click(data) {
        Logger.debug('[SaveImageButton] Click');

        const $button = this._button;
        if ($button.hasClass('disabled')) {
            return;
        }

        /**
         * @type {ImageEditingContext}
         */
        const image_editing_context = data.image_edit;
        image_editing_context.save();
        image_editing_context.$input.prop('checked', true).change();

        this._get_outer().addClass('saved');
        $button.addClass('disabled');

        NotificationHelper.instance().notify(SaveImageButton.Events.CLICKED, {instance: this});
    }

    /**
     * @inheritDoc
     */
    _build_get_share_name_callback(data, in_preview, name, guid) {
        return () => {
            return name;
        }
    }
}

SaveImageButton.STATE_CLEAN = 1;
SaveImageButton.STATE_DIRTY = 2;
SaveImageButton.STATE_UNDEFINED = 3;

SaveImageButton.Events = {
    CLICKED: 'SaveImageButton.Events.CLICKED'
};
