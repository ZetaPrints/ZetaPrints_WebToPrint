import $ from "./jQueryLoader";
import UiHelper from "./helper/UiHelper";
import Logger from "./Logger";

export default class UpdatePreviewButtonController {
    /**
     * @param {PersonalizationForm} personalization_form_instance
     */
    constructor(personalization_form_instance) {
        if (!personalization_form_instance) {
            throw new ReferenceError('Missing argument "personalization_form_instance"')
        }
        this.personalization_form_instance = personalization_form_instance;
        this.show = this.show.bind(this);
    }

    /**
     * @param {DataInterface} data
     */
    static fancybox_add_update_preview_button(data) {
        const ui_helper = UiHelper.instance();

        //Don't add the button if it exists
        if (ui_helper.update_preview_button.length) {
            Logger.debug('[UpdatePreviewButton] Update preview button already exists');
            return;
        }

        const $outer = ui_helper.fancybox_outer;
        const $update_preview = $('<a id="zp-update-preview-button">' +
            '<span class="icon left-part">' +
            '<span class="icon arrows" />' +
            '</span>' +
            '<span class="title">'
            + update_preview_button_text +
            '</span>' +
            '</a>').appendTo($outer);

        ui_helper.fancybox_close_button.addClass('resizer-tweaks');

        $update_preview.click(function () {
            if (!$outer.hasClass('modified')) {
                return false;
            }

            $outer
                .find(UiHelper.instance().fancybox_image_selector)
                .bind('load.update-preview', function (event) {
                    $(this).unbind('load.update-preview');

                    $outer.removeClass('preview-updating');

                    UiHelper.instance().fancybox_content
                        .bind('mousemove.zp-show-shapes', function (event) {
                            $(this).unbind(event);

                            $outer.removeClass('zp-hide-shapes');
                        });
                });


            $outer.addClass('preview-updating zp-hide-shapes');

            data.update_preview({data: {zp: data}});
        })
    }

    /**
     */
    static fancybox_update_update_preview_button() {
        const $fancybox_resize = UiHelper.instance().fancybox_resize;

        if ($fancybox_resize.length) {
            $fancybox_resize.addClass('middle-position');
        } else {
            UiHelper.instance().update_preview_button.addClass('no-middle');
        }
    }


    /**
     */
    static fancybox_remove_update_preview_button() {
        UiHelper.instance().update_preview_button.remove();
        UiHelper.instance().fancybox_resize.removeClass('middle-position');
        UiHelper.instance().fancybox_outer.removeClass('preview-updating zp-hide-shapes');
        UiHelper.instance().fancybox_content.unbind('mousemove.zp-show-shapes');
        UiHelper.instance().fancybox_image.unbind('load.update-preview');
    }
}

