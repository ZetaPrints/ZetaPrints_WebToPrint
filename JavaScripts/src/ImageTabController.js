import UiHelper from './helper/UiHelper';
import $ from './jQueryLoader';
import Assert from './helper/Assert';
import Feature from './Feature';
import Page from './model/Page';
import DataHelper from './helper/DataHelper';

export default class ImageTabController {
    /**
     * @param {PersonalizationForm} personalization_form
     */
    constructor(personalization_form) {
        this.personalization_form = personalization_form;
    }

    /**
     * Register the on click event listener
     */
    register_click() {
        const _this = this;
        this._get_tab_buttons().on('click', function () {
            _this._handle_click(this);
        });
    }

    /**
     * @param {HTMLElement} element
     * @private
     */
    _handle_click(element) {
        const personalization_form = this.personalization_form;
        const data = personalization_form.data;
        const ui_helper = UiHelper.instance();
        const product_form = ui_helper.product_form;

        this._get_tab_buttons().removeClass('selected');

        // Hide preview image, preview placeholder with spinner, text fields and image fields for the current page
        ui_helper.hide([
            'a.zetaprints-template-preview',
            'div.zetaprints-page-stock-images',
            UiHelper.instance().input_fields,
            'div.zetaprints-preview-placeholder',
            '.page-size-table-body'
        ]);

        // Remove shapes for current page
        if (data.has_shapes) {
            Feature.instance().call(
                Feature.feature.inPreviewEdit,
                personalization_form.in_preview_edit_controller.add_in_preview_edit_handlers
            );
        }

        $(element).addClass('selected');
        const page_rel = $('img', element).attr('rel');
        personalization_form.disable_image_zoomer();

        // Show text fields and image fields for the selected page if it's enabled
        if (!data.is_fields_hidden) {
            ui_helper.show([
                '#stock-images-' + page_rel,
                '#input-fields-' + page_rel
            ]);
        }

        // Show preview image, preview placeholder with spinner for the selected page
        ui_helper.show([
            '#preview-image-' + page_rel,
            '#zp-placeholder-for-preview-' + page_rel,
            '#page-size-' + page_rel
        ]);

        // Add resizer for text inputs and text areas for the selected page
        if ($.fn.text_field_resizer) {
            $('#input-fields-' + page_rel + ' .zetaprints-text-field-wrapper').text_field_resizer();
        }

        // Remember number of selected page
        data.current_page = parseInt(page_rel.split('-')[1], 10);

        product_form.modified = DataHelper.has_changed_fields_on_page(data.current_page);

        const has_shapes = data.has_shapes && Feature.instance().is_activated(Feature.feature.inPreviewEdit);

        // let image_box_width = $product_image_box.width();
        // let image_width = $('#preview-image-' + page)
        //     .children('img')
        //     .outerWidth();

        const page = new Page(data.template_details.pages[data.current_page]);
        if (!page.preview_is_scaled || has_shapes) {
            ui_helper.hide(ui_helper.enlarge_button);
        } else {
            // Show Enlarge button
            ui_helper.show(ui_helper.enlarge_button);
        }

        this._toggle_buttons(page, has_shapes);

        //Set preview images sharing link for the current page
        if (window.place_preview_image_sharing_link) {
            personalization_form.set_preview_sharing_link_for_page(
                data.current_page,
                data.preview_sharing_links
            );
        }

        //Add shapes for selected page
        //if (zp.has_shapes
        //    && window.place_all_shapes_for_page
        //    && window.shape_handler)
        //  place_all_shapes_for_page(
        //                          zp.template_details.pages[zp.current_page].shapes,
        //                          $product_image_box,
        //                          shape_handler);

        if ($('#zp-dataset-page-' + data.current_page).length) {
            $('#zp-dataset-button').removeClass('hidden');
        } else {
            $('#zp-dataset-button').addClass('hidden');
        }

        product_form.user_data_changed = DataHelper.is_user_data_changed(page);

        if (personalization_form.can_show_next_page_button_for_page(data.current_page, data)) {
            ui_helper.next_page_button.show();
        } else {
            ui_helper.next_page_button.hide();
        }
    }

    /**
     * @return {*|jQuery|HTMLElement}
     * @private
     */
    _get_tab_buttons() {
        return $('div.zetaprints-image-tabs li');
    }

    /**
     * Checks if page is static then hides the buttons or shows them
     *
     * @param {Page} page
     * @param {boolean} has_shapes
     * @private
     */
    _toggle_buttons(page, has_shapes) {
        Assert.assertInstanceOf(page, Page);

        const ui_helper = UiHelper.instance();
        //Check if page is static then...
        if (page.static) {
            //... hide Update preview button,
            ui_helper.hide(ui_helper.update_preview_form_button);
            // ui_helper.update_preview_form_button.addClass('zp-hidden');

            //Form button
            ui_helper.hide(ui_helper.form_button);
            // ui_helper.form_button.addClass('zp-hidden');

            //and Editor button
            ui_helper.hide(ui_helper.editor_button);
            // ui_helper.editor_button.addClass('zp-hidden');
        } else {
            //... otherwise show them
            ui_helper.show(ui_helper.update_preview_form_button);
            // ui_helper.update_preview_form_button.removeClass('zp-hidden');

            //!!! Check if page is passive

            //Check if there's shapes and zpadvanced theme is enabled then...
            if (has_shapes) {
                //... hide Editor button
                ui_helper.show(ui_helper.editor_button);
                // ui_helper.editor_button.removeClass('zp-hidden');

                //Show Form button
                ui_helper.show(ui_helper.form_button);
                // ui_helper.form_button.removeClass('zp-hidden');
            }
        }
    }
}
