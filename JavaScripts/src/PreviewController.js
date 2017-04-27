/**
 * Created by cod on 10.4.17.
 */

import $ from './jQueryLoader';
import UiHelper from "./helper/UiHelper";
import Logger from "./Logger";
import Assert from "./helper/Assert";
import Preview from "./view/Preview";
import TemplateDetail from "./model/TemplateDetail";
import Page from "./model/Page";
import Feature from "./Feature";
import Resizing from "./fancybox/Resizing";
import DataHelper from "./helper/DataHelper";
import LightboxCallbackConfiguration from "./model/LightboxCallbackConfiguration";
import UpdatePreviewButton from "./fancybox/UpdatePreviewButton";

export default class PreviewController {
    /**
     * @param {PersonalizationForm} form_instance
     * @param {FakeAddToCartButton} fake_add_to_cart_button
     */
    constructor(form_instance, fake_add_to_cart_button) {
        this.form_instance = form_instance;
        this.fake_add_to_cart_button = fake_add_to_cart_button;
        this.$_preview_placeholder = null;
        this._number_of_failed_updates = 0;

        this._success = this._success.bind(this);
        this.update_preview = this.update_preview.bind(this);
        this._update_preview_error = this._update_preview_error.bind(this);
        this._update_preview_button = new UpdatePreviewButton(this);

        /**
         * @type {Object.<string, Preview>}
         * @private
         */
        this._preview_elements = {};
    }

    /**
     * @return {TemplateDetail}
     */
    get template_details() {
        return this.form_instance.data.template_details;
    }

    /**
     * Returns the Preview instance for the given page number
     *
     * @param {number|string} page_number
     * @return {Preview}
     */
    get_preview_for_page_number(page_number) {
        if (isNaN(parseInt(page_number, 10))) {
            throw new TypeError(`Expected argument page_number to be convertible into type "number", "${page_number}" given`);
        }

        return this._preview_elements['' + page_number];
    }

    /**
     * Returns the Preview instance for the given page_guid
     *
     * @param {string} page_guid
     * @return {Preview}
     * @private
     */
    _get_preview_for_page_guid(page_guid) {
        Assert.assertString(page_guid);

        return this._preview_elements[page_guid];
    }

    /**
     * Adds a preview
     *
     * @param {DataInterface} data
     */
    add_previews(data) {
        //Add previews to the product page
        const pages = data.template_details.pages;
        for (let page_number in pages) {
            if (pages.hasOwnProperty(page_number)) {
                const preview = new Preview(
                    data,
                    parseInt(page_number, 10),
                    this,
                    this._get_lightbox_callbacks()
                );
                this._preview_elements['' + page_number] = preview;

                preview.show();
            }
        }
    }

    /**
     * @param {DataInterface} data
     * @param {number} page_number
     * @param {HTMLImageElement|Element} image_element
     * @param {Preview} preview
     */
    image_on_load_callback(data, page_number, image_element, preview) {
        const ui_helper = UiHelper.instance();

        const form_instance = this.form_instance;
        const has_image_zoomer = form_instance.has_image_zoomer;

        // Remove preview image placeholder
        this._remove_preview_placeholder();

        const $next_page_button = ui_helper.next_page_button;
        const $product_image_box = ui_helper.product_image_box;
        const $enlarge_button = ui_helper.enlarge_button;
        const $update_preview_button = ui_helper.update_preview_form_button;

        let previewOverlay = ui_helper.preview_overlay;
        previewOverlay.remove_no_preview();

        // Show or hide Next page button for the current page
        if (form_instance.can_show_next_page_button_for_page(data.current_page, data)) {
            $next_page_button.show();
        } else {
            $next_page_button.hide();
        }

        const pages = data.template_details.pages;
        const page = pages[page_number];
        if (page.preview_is_scaled === undefined) {
            const $_img = $(image_element)
                .clone()
                .css({
                    position: 'absolute',
                    left: '-10000px'
                })
                .appendTo('body');

            page.preview_is_scaled = $_img.width() > $product_image_box.width();

            $_img.remove();
        }

        // If no image zoomer on the page and image is for the first page and first page was opened
        if (!has_image_zoomer) {
            if (page_number === 1 && data.current_page === 1) {
                //then show preview for the first page
                UiHelper.instance().show(this.get_preview_for_page_number(1).element);
            }

            const current_page = pages[data.current_page];

            if (page_number === data.current_page && !current_page.preview_is_scaled) {
                UiHelper.instance().hide($enlarge_button);
            }
        }

        page.is_updating = false;

        if (!DataHelper.page_has_updating(pages)) {
            //Enable Update preview action
            $update_preview_button.unbind('click');
            $update_preview_button.click(() => {
                this.update_preview(this.form_instance.data);
            });

            previewOverlay.hide();
        }
    }

    /**
     * Updates the preview
     *
     * @param {DataInterface} zeta_prints_data
     * @param {number[]|number|undefined}update_pages
     * @param {boolean} preserve_fields
     */
    update_preview(zeta_prints_data, update_pages = undefined, preserve_fields = false) {
        Assert.assertObject(zeta_prints_data);
        const form_instance = this.form_instance;

        //!!!TODO: workaround
        // Remember page number
        const current_page = typeof update_pages === 'undefined'
            ? zeta_prints_data.current_page
            : update_pages.shift();

        if (typeof current_page === 'undefined') {
            Logger.warn('Could not detect current page');
            return;
        }

        // Disable click action
        UiHelper.instance().update_preview_form_button.unbind('click');
        UiHelper.instance().preview_overlay.show();

        if ($.fn.text_field_editor) {
            $('div.zetaprints-page-input-fields input,' +
                'div.zetaprints-page-input-fields textarea').each(function () {

                $(this).text_field_editor('hide');
            });
        }


        /** @type {Page} */
        const page = zeta_prints_data.template_details.pages[current_page];
        const metadata = form_instance._prepare_metadata_from_page_number(current_page);

        page.is_updating = true;
        metadata[metadata.length] = {
            name: 'zetaprints-TemplateID',
            value: zeta_prints_data.template_details.guid
        };
        metadata[metadata.length] = {name: 'zetaprints-From', value: current_page};

        if (preserve_fields) {
            metadata[metadata.length] = {name: 'zetaprints-Preserve', value: 'yes'};
        }

        $.ajax({
            url: zeta_prints_data.url.preview,
            type: 'POST',
            dataType: 'json',
            data: $.param(metadata),
            error: () => {
                this._update_preview_error(page);
            },
            success: (data) => {
                this._success(new Page(page), current_page, new TemplateDetail(data), update_pages, preserve_fields, zeta_prints_data)
            }
        });
    }

    /**
     * @return {LightboxCallbackConfiguration}
     * @private
     */
    _get_lightbox_callbacks() {
        const form_controller = this.form_instance;
        const data = form_controller.data;
        const in_preview_edit_controller = form_controller.in_preview_edit_controller;
        const shape_repository = form_controller.shape_repository;
        const image_editor_controller = form_controller.image_editor;

        const did_show_callback = (lightbox_options) => {
            const ui_helper = UiHelper.instance();
            const feature_instance = Feature.instance();

            ui_helper.fancybox_image.attr('title', click_to_close_text);

            //!!! Needs to be implemented via zp object.
            //!!! Page state should be saved in page object.
            if (DataHelper.has_changed_fields_on_page(data.current_page)) {
                ui_helper.fancybox_outer.addClass('modified');
            } else {
                ui_helper.fancybox_outer.removeClass('modified');
            }

            feature_instance.call(Feature.feature.fancybox.resizing, Resizing.fancybox_resizing_add, lightbox_options);
            feature_instance.call(
                Feature.feature.fancybox.updatePreview,
                () => {
                    this._update_preview_button.update();
                }
            );

            if (false === (data.has_shapes && feature_instance.is_activated(Feature.feature.inPreviewEdit))) {
                return;

                // window.place_all_shapes_for_page => InPreviewEditController.place_all_shapes_for_page
                // && window.highlight_shape => InPreviewEditController.highlight_shape
                // && window.popup_field_by_name => InPreviewEditController.popup_field_by_name
                // && window.fancy_shape_handler => InPreviewEditController.fancy_shape_handler
            }

            const $fancy_inner = ui_helper.fancybox_content;

            in_preview_edit_controller.place_all_shapes_for_page(
                shape_repository.get_shapes_of_current_page(),
                $fancy_inner,
                (event) => {
                    in_preview_edit_controller.fancy_shape_handler(event);
                }
            );

            if (data._shape_to_show) {
                const shape = shape_repository.get_shape(data.current_page, data._shape_to_show);
                data._shape_to_show = undefined;

                in_preview_edit_controller.highlight_shape(shape, $fancy_inner);

                in_preview_edit_controller.popup_field_by_name(
                    shape.name,
                    undefined,
                    shape._fields ? shape._fields : shape.name
                );
            }
        };

        const willShow = () => {
            if (UiHelper.instance().select_image_button.length) {
                Feature.instance().call(
                    Feature.feature.fancybox.selectImage,
                    () => {
                        form_controller.select_image.remove();
                    }
                );
            }
            if (image_editor_controller.save_image_button.button) {
                Feature.instance().call(
                    Feature.feature.fancybox.saveImageButton,
                    () => {
                        image_editor_controller.save_image_button.remove()
                    }
                );
            }

            if (!data.template_details.pages[data.current_page].static) {
                Feature.instance().call(Feature.feature.fancybox.updatePreview, () => {
                    this._update_preview_button.add(data);
                });
            }
        };

        const didClose = () => {
            Feature.instance().call(
                Feature.feature.fancybox.updatePreview,
                () => {
                    this._update_preview_button.remove();
                }
            );
            Feature.instance().call(
                Feature.feature.fancybox.resizing,
                Resizing.fancybox_resizing_hide
            );
        };
        const willClose = () => {
            if (data.has_shapes && Feature.instance().is_activated(Feature.feature.inPreviewEdit)) {
                $('div.zetaprints-field-shape', UiHelper.instance().fancybox_content).removeClass('highlighted');
                in_preview_edit_controller.popdown_field_by_name();
            }
        };

        return new LightboxCallbackConfiguration({
            willShow,
            willClose,
            didClose,
            didShow: function () {
                // The method needs access to the fancyBox instance
                did_show_callback(this);
            },
        });
    }

    /**
     * @param {Page} page
     */
    _update_preview_error(page) {
        const $update_preview_button = UiHelper.instance().update_preview_form_button;
        if (++this._number_of_failed_updates >= 2) {
            alert(cannot_update_preview_second_time);

            $('div.zetaprints-notice.to-update-preview').addClass('zp-hidden');
            this.fake_add_to_cart_button.remove();
            $('div.save-order span').css('display', 'none');
        } else {
            alert(cannot_update_preview);
        }

        $update_preview_button.click(() => {
            Logger.log('Should update preview');
            this.update_preview(this.form_instance.data);
        });

        page.is_updating = false;

        UiHelper.instance().preview_overlay.hide();
    }

    /**
     *
     * @param {Page} page
     * @param {number} current_page
     * @param {TemplateDetail} server_data
     * @param update_pages
     * @param preserve_fields
     * @param {DataInterface} local_data
     * @private
     */
    _success(page, current_page, server_data, update_pages, preserve_fields, local_data) {
        /**
         * @type {PersonalizationForm}
         */
        const form_instance = this.form_instance;

        if (!server_data) {
            this._update_preview_error(page);

            return;
        }

        //!!! Make code in function to not depend on current page number
        //!!! (it's broken way to update preview, user can switch to another
        //!!! page while updating preview)
        //!!! Go throw template details and update previews which has updated
        //!!! preview images (updated-preview-image field)

        //!!! Use updated-preview-image and updated-thumb-image instead
        //!!! updated-preview-url and updated-preview-url
        //!!! Make urls in controller

        const pages_server_data = server_data.pages;
        const pages_local_data = this.template_details.pages;

        // Update link to preview image in opened fancybox
        const fancy_img = UiHelper.instance().fancybox_image;
        if (fancy_img.length) {
            $(fancy_img).attr('src', pages_server_data[current_page]['updated-preview-url']);
        }

        for (let page_number in pages_server_data) {
            if (pages_server_data.hasOwnProperty(page_number)) {
                const page_server_data = pages_server_data[page_number];
                this._update_current_data(page_server_data, pages_local_data[page_number]);

                const preview_url = page_server_data['updated-preview-url'];
                if (!preview_url) {
                    continue;
                }

                const page_number_int = parseInt(page_number, 10);
                if (isNaN(page_number_int)) {
                    throw new TypeError('Page number could not be converted to int');
                }

                // Update links to preview image on current page
                const preview = this._get_preview_for_page_guid('' + page_number);
                if (preview) {
                    preview.update_url(preview_url);
                }

                this._update_thumbnails(page_number_int, pages_server_data);

                const filename = page_server_data['updated-preview-image'].split('preview/')[1];
                this.update_preview_sharing_link_for_page(local_data, page_number_int, filename);
            }
        }

        // If there's image zoomer on the page
        if (form_instance.has_image_zoomer) {
            form_instance.disable_image_zoomer();

            //Add preview placeholder
            this.add_preview_placeholder();

            //Add all shapes to personalization form after first preview
            //update
            //if (zp.has_shapes && window.place_all_shapes_for_page
            //    && window.shape_handler)
            //  place_all_shapes_for_page(zp.template_details.pages_server_data[1].shapes,
            //                            $product_image_box,
            //                            shape_handler);
        }

        // Show preview sharing link if the feature is enabled
        if (window.place_preview_image_sharing_link) {
            form_instance.set_preview_sharing_link_for_page(
                current_page,
                local_data.preview_sharing_links
            );
        }
        this._store_user_data(local_data, page);

        if (typeof update_pages !== 'undefined' && update_pages.length > 0) {
            this.update_preview(local_data, update_pages, preserve_fields);
        }
    }

    /**
     * @param {DataInterface} local_data
     * @param {Page} page
     * @private
     */
    _store_user_data(local_data, page) {
        UiHelper.instance().product_form.user_data_changed = false;

        if (
            DataHelper.is_all_pages_updated(local_data.template_details)
            || local_data.template_details.missed_pages === 'include'
            || local_data.template_details.missed_pages === ''
        ) {

            $('input[name="zetaprints-previews"]').val(DataHelper.export_previews_to_string(local_data.template_details));

            UiHelper.instance().hide($('div.zetaprints-notice.to-update-preview'));
            this.fake_add_to_cart_button.remove();
            $('div.save-order span').css('display', 'none');

            const pages = local_data.template_details.pages;
            for (let n in pages) {
                if (pages.hasOwnProperty(n)) {
                    DataHelper.store_user_data(pages[n]);
                }
            }
        } else {
            DataHelper.store_user_data(page);
        }
    }

    /**
     * @param {Page} page_server_data
     * @param {Page} page_current_data
     * @private
     */
    _update_current_data(page_server_data, page_current_data) {
        if (page_server_data['updated-preview-image']) {
            page_current_data['updated-preview-image'] = page_server_data['updated-preview-image'];
            page_current_data['updated-preview-url'] = page_server_data['updated-preview-url'];
        }

        if (page_server_data['updated-thumb-image']) {
            page_current_data['updated-thumb-image'] = page_server_data['updated-thumb-image'];
            page_current_data['updated-thumb-url'] = page_server_data['updated-thumb-url'];
        }
    }

    /**
     * Update link to preview thumbnail for current page tab
     *
     * @param {number} page_number
     * @param {Object.<string, Page>} pages_server_data
     * @private
     */
    _update_thumbnails(page_number, pages_server_data) {
        const $thumbs = $('div.zetaprints-image-tabs img');
        $thumbs
            .filter('[rel="page-' + page_number + '"]')
            .attr('src', pages_server_data[page_number]['updated-thumb-url']);
    }

    /**
     * Update preview sharing link if the feature is enabled
     *
     * @param {DataInterface} data
     * @param {number} page_number
     * @param {string} filename
     */
    update_preview_sharing_link_for_page(data, page_number, filename) {
        if (window.place_preview_image_sharing_link) {
            data.preview_sharing_links[page_number] = preview_image_sharing_link_template + filename;
        }
    }

    /**
     * @private
     */
    _remove_preview_placeholder() {
        if (this.$_preview_placeholder) {
            this.$_preview_placeholder.remove();
        }

        this.$_preview_placeholder = null;
    }

    /**
     * @api
     */
    add_preview_placeholder() {
        this.$_preview_placeholder = $('<div id="zp-preview-placeholder" />').appendTo(UiHelper.instance().product_image_gallery);
    }
}
