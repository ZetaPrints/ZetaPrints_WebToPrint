import $ from "../jQueryLoader";
import UiHelper from "../helper/UiHelper";
import Logger from "../Logger";
import AbstractFancyboxButton from "./AbstractFancyboxButton";

export default class UpdatePreviewButton extends AbstractFancyboxButton {
    /**
     * @param {DataInterface} data
     */
    static fancybox_add_update_preview_button(data) {
    }

    /**
     */
    static fancybox_update_update_preview_button() {
    }

    /**
     */
    static fancybox_remove_update_preview_button() {
    }

    /**
     * @inheritDoc
     */
    _create_button(data, in_preview, name, guid) {
        if ($('#zp-update-preview-button').length) {
            // Don't add the button if it exists
            Logger.error('[UpdatePreviewButton] Update preview button already exists');
            return;
        }


        // TODO: Is this needed?
        UiHelper.instance().fancybox_close_button.addClass('resizer-tweaks');

        return $('<a id="zp-update-preview-button">' +
            '<span class="icon left-part">' +
            '<span class="icon arrows" />' +
            '</span>' +
            '<span class="title">'
            + update_preview_button_text +
            '</span>' +
            '</a>').appendTo(this._get_outer());
    }

    /**
     * @inheritDoc
     */
    _on_click(data) {
        const $outer = this._get_outer();
        if (!$outer.hasClass('modified')) {
            return false;
        }

        const images = $outer.find(UiHelper.instance().fancybox_image_selector);
        images.bind('load.update-preview', function (event) {
            $(this).unbind('load.update-preview');

            $outer.removeClass('preview-updating');

            UiHelper.instance().fancybox_content.bind('mousemove.zp-show-shapes', function (event) {
                $(this).unbind(event);

                $outer.removeClass('zp-hide-shapes');
            });
        });

        $outer.addClass('preview-updating zp-hide-shapes');

        /** @type {PreviewController} */
        const controller = this._controller;
        controller.update_preview(data);
    }

    /**
     * @param {DataInterface} data
     */
    // static fancybox_add_update_preview_button(data) {
    //     const ui_helper = UiHelper.instance();
    //
    //     // Don't add the button if it exists
    //     if (ui_helper.update_preview_button.length) {
    //         Logger.debug('[UpdatePreviewButton] Update preview button already exists');
    //         return;
    //     }
    //
    //     const $outer = ui_helper.fancybox_outer;
    //     // const $update_preview = $('<a id="zp-update-preview-button">' +
    //     //     '<span class="icon left-part">' +
    //     //     '<span class="icon arrows" />' +
    //     //     '</span>' +
    //     //     '<span class="title">'
    //     //     + update_preview_button_text +
    //     //     '</span>' +
    //     //     '</a>').appendTo($outer);
    //     //
    //     // ui_helper.fancybox_close_button.addClass('resizer-tweaks');
    //
    //     $update_preview.click(function () {
    //         if (!$outer.hasClass('modified')) {
    //             return false;
    //         }
    //
    //         $outer
    //             .find(UiHelper.instance().fancybox_image_selector)
    //             .bind('load.update-preview', function (event) {
    //                 $(this).unbind('load.update-preview');
    //
    //                 $outer.removeClass('preview-updating');
    //
    //                 UiHelper.instance().fancybox_content
    //                     .bind('mousemove.zp-show-shapes', function (event) {
    //                         $(this).unbind(event);
    //
    //                         $outer.removeClass('zp-hide-shapes');
    //                     });
    //             });
    //
    //
    //         $outer.addClass('preview-updating zp-hide-shapes');
    //
    //         data.update_preview({data: {zp: data}});
    //     })
    // }

    /**
     * @inheritDoc
     */
    update() {
        const $fancybox_resize = UiHelper.instance().fancybox_resize;

        if ($fancybox_resize.length) {
            $fancybox_resize.addClass('middle-position');
        } else {
            this.button.addClass('no-middle');
        }
    }

    /**
     * @inheritDoc
     */
    remove() {
        super.remove();

        const ui_helper_fancybox = UiHelper.instance().fancybox;
        ui_helper_fancybox.resize.removeClass('middle-position');
        ui_helper_fancybox.outer.removeClass('preview-updating zp-hide-shapes');

        ui_helper_fancybox.content.unbind('mousemove.zp-show-shapes');
        ui_helper_fancybox.image.unbind('load.update-preview');
    }
}
