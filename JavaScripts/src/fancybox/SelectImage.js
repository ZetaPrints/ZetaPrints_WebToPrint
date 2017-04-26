import $ from  '../jQueryLoader'
import UiHelper from "../helper/UiHelper";
import Assert from "../helper/Assert";
import PreviewController from "../PreviewController";

export default class SelectImage {
    /**
     * @param {PreviewController} preview_controller
     * @param {jQuery|function} $
     * @param {DataInterface} zp
     * @param {boolean} in_preview
     */
    static fancybox_add_use_image_button(preview_controller, $, zp, in_preview) {
        Assert.assertInstanceOf(preview_controller, PreviewController);

        //Don't add the button if it exists
        if (UiHelper.instance().select_image_button.length) {
            return;
        }

        const $outer = UiHelper.instance().fancybox_outer;

        const $button = $('<a id="zp-select-image-button">' +
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
            '</a>').appendTo($outer);

        const $close = UiHelper.instance().fancybox_close_button.addClass('resizer-tweaks');

        if (in_preview) {
            $close
                .clone()
                .css('display', 'inline')
                .click(function () {
                    zp._shape_to_show = this._detect_share_name();

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
            if ($outer.hasClass('selected')) {
                return;
            }

            const $input = SelectImage._get_image_selector()
                .not('.minimized')
                .find(' > .selector-content > .tabs-wrapper > .images-scroller')
                .find('a[href="' + UiHelper.instance().fancybox_image.attr('src') + '"]')
                .parent()
                .children('input')
                .prop('checked', true)
                .change();

            $outer.addClass('selected');

            if (in_preview) {
                const shape_name = $input.attr('name').substring(12);

                $('#zetaprints-preview-image-container')
                    .find(' > .zetaprints-field-shape[title="' + shape_name + '"] > .top')
                    .click();

                UiHelper.instance().fancybox_close_button.remove();
                $close.attr('id', 'fancybox-close');
            }
        })
    }

    /**
     * @param {jQuery|function} $
     */
    static fancybox_update_preview_button($) {
        UiHelper.instance().fancybox_close_button.addClass('resizer-tweaks');

        const is_checked = SelectImage._get_image_selector()
            .not('.minimized')
            .find(' > .selector-content > .tabs-wrapper > .images-scroller')
            .find('a[href="' + UiHelper.instance().fancybox_image.attr('src') + '"]')
            .parent()
            .children('input')
            .prop('checked');

        if (is_checked) {
            UiHelper.instance().fancybox_outer.addClass('selected');
        } else {
            UiHelper.instance().fancybox_outer.removeClass('selected');
        }
    }

    /**
     * @param {jQuery|function} $
     */
    static fancybox_remove_use_image_button($) {
        UiHelper.instance().select_image_button.remove();
    }

    /**
     * @return {jQuery|HTMLElement}
     * @private
     */
    static _get_image_selector() {
        return UiHelper.instance().select_image_elements;
    }

    /**
     * @return {string}
     * @private
     */
    static _detect_share_name() {
        return SelectImage._get_image_selector()
            .not('.minimized')
            .find(' > .selector-content > .tabs-wrapper > .images-scroller')
            .find('a[href="' + UiHelper.instance().fancybox_image.attr('src') + '"]')
            .parent()
            .children('input')
            .attr('name')
            .substring(12);
    }
}
