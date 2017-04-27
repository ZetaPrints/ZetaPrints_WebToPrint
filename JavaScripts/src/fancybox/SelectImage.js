import $ from  '../jQueryLoader'
import UiHelper from "../helper/UiHelper";
import AbstractFancyboxButton from "./AbstractFancyboxButton";

export default class SelectImage extends AbstractFancyboxButton {
    /**
     * @inheritDoc
     */
    _on_click(data) {
        const $outer = this._get_outer();

        if ($outer.hasClass('selected')) {
            return;
        }

        const $input = this._get_image_inputs()
            .prop('checked', true)
            .change();

        $outer.addClass('selected');

        if (this._in_preview) {
            const shape_name = $input.attr('name').substring(12);

            $('#zetaprints-preview-image-container')
                .find(' > .zetaprints-field-shape[title="' + shape_name + '"] > .top')
                .click();

            this._restore_original_close_button();
        }
    }

    /**
     * @inheritDoc
     */
    _build_get_shape_name_callback(data, in_preview, name, guid) {
        return () => {
            return this._detect_share_name();
        }
    }

    /**
     * @inheritDoc
     */
    _create_button(data, in_preview, name, guid) {
        if (UiHelper.instance().select_image_button.length) {
            throw new Error('this must not happen')
        }

        return $('<a id="zp-select-image-button" class="no-middle">' +
            '<span class="icon left-part">' +
            '<span class="icon tick" />' +
            '</span>' +
            '<span class="text">' +
            '<span class="use-image-text">' +
            use_image_button_text +
            '</span>' +
            '<span class="selected-image-text">' +
            selected_image_button_text +
            '</span>' +
            '</span>' +
            '</a>').appendTo(this._get_outer());
    }

    /**
     * @inheritDoc
     */
    update() {
        // TODO: Is this needed?
        UiHelper.instance().fancybox_close_button.addClass('resizer-tweaks');

        const is_checked = this._get_image_inputs()
            .prop('checked');

        if (is_checked) {
            this._get_outer().addClass('selected');
        } else {
            this._get_outer().removeClass('selected');
        }
    }

    /**
     * @return {jQuery}
     * @private
     */
    _get_image_inputs() {
        return UiHelper.instance().select_image_elements
            .not('.minimized')
            .find(' > .selector-content > .tabs-wrapper > .images-scroller')
            .find('a[href="' + UiHelper.instance().fancybox_image.attr('src') + '"]')
            .parent()
            .children('input');
    }

    /**
     * @return {string}
     * @private
     */
    _detect_share_name() {
        return this._get_image_inputs()
            .attr('name')
            .substring(12);
    }
}
