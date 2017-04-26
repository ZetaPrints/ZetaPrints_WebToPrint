/**
 * @implements DataInterface
 */
import Logger from './Logger';
import ImageUpload from "./ImageUpload";
import PreviewController from "./PreviewController";
import FakeAddToCartButton from "./view/FakeAddToCartButton";
import UiHelper from './helper/UiHelper';
import MetaDataHelper from "./MetaDataHelper";

import $ from './jQueryLoader';
import ImageSelector from "./ImageSelector";
import ImageEditorController from "./ImageEditorController";
import ImageTabController from "./ImageTabController";
import Feature from "./Feature";
import Resizing from "./fancybox/Resizing";
import UpdatePreview from "./UpdatePreviewButtonController";
import SaveImageButton from "./fancybox/SaveImageButton";
import SelectImage from "./fancybox/SelectImage";
import Dataset from "./dataset/Dataset";
import InPreviewEditController from "./InPreviewEditController";
import ShapeRepository from "./model/ShapeRepository";
import Lightbox from "./view/Lightbox";
import LightboxConfiguration from "./model/LightboxConfiguration";
import Assert from "./helper/Assert";
import ZoomHelper from "./helper/ZoomHelper";

/**
 * @implements DataInterface
 */
export default class PersonalizationForm {
    /**
     * @param {DataInterface} data
     */
    constructor(data) {
        if (arguments.length !== 1) {
            throw new TypeError('Invalid number of arguments, expected 1 got ' + arguments.length);
        }

        /** @type {DataInterface} */
        const zp = this.data = data;
        const personalization_form_instance = this;

        this._enlarge_editor_click_handler = this._enlarge_editor_click_handler.bind(this);
        this.image_field_select_handler = this.image_field_select_handler.bind(this);
        this.add_image_to_gallery = this.add_image_to_gallery.bind(this);
        this.update_preview = this.update_preview.bind(this);
        zp.scroll_strip = this.scroll_strip = this.scroll_strip.bind(this);

        const $add_to_cart_button = this._get_add_to_cart_button();
        const fake_add_to_cart_button = new FakeAddToCartButton($add_to_cart_button);
        this.shape_repository = new ShapeRepository(this);
        /** @type {PreviewController} */
        const preview_controller = this.preview_controller = new PreviewController(this, fake_add_to_cart_button);
        this.image_editor = new ImageEditorController(this);
        this.in_preview_edit_controller = new InPreviewEditController(this);

        this._preview_overlay = null;

        const template_details = data.template_details;

        //Set current template page to the first (1-based index)
        zp.current_page = 1;
        const ui_helper = UiHelper.instance();
        const $product_image_box = ui_helper.product_image_box;
        $product_image_box.css('position', 'relative');

        const product_image_gallery = ui_helper.product_image_gallery;
        this._set_has_image_zoomer(this._detect_initial_has_image_zoomer(product_image_gallery));


        ui_helper.product_form.modified = this.has_changed_fields_on_page(zp.current_page);

        this._register_click_form_button();
        this._register_click_enlarge_editor();

        //If personalization step (for 2-step theme) and base image is set...
        if (zp.is_personalization_step && this.has_image_zoomer) {
            //... then remove zoomer functionality
            this.disable_image_zoomer();
        }

        //If base image is not set...
        if (!this.has_image_zoomer) {
            //then remove all original images placed by M., zoomer and base image
            $(product_image_gallery).empty();

            //Add preview image placeholder
            preview_controller.add_preview_placeholder();
        }

        this._add_hidden_form_fields(template_details);

        //If update_first_preview_on_load parameter was set
        if (zp.update_first_preview_on_load) {
            //Update preview for the first page
            preview_controller.update_preview(this.data, undefined, zp.preserve_fields);
        }
        // Create array for preview images sharing links
        if (window.place_preview_image_sharing_link) {
            zp.preview_sharing_links = new Array(zp.template_details.pages_number + 1);
        }

        this.preview_controller.add_previews(data);

        let pages = data.template_details.pages;
        this._prepareImageFields(pages);

        if ($.fn.combobox) {
            this._prepareComboBox(pages);
        }

        ui_helper.show('#page-size-page-1');
        // $('#page-size-page-1').removeClass('zp-hidden');

        zp.is_fields_hidden = true;

        if (!this.has_shapes || !window.place_all_shapes_for_page) {
            ui_helper.show('#stock-images-page-1, #input-fields-page-1');
            // $('#stock-images-page-1, #input-fields-page-1').removeClass('zp-hidden');
        }
        if (!this.has_shapes || !Feature.instance().is_activated(Feature.feature.inPreviewEdit)) {
            ui_helper.show('#stock-images-page-1, #input-fields-page-1');
            // $('#stock-images-page-1, #input-fields-page-1').removeClass('zp-hidden');

            zp.is_fields_hidden = false;

            ui_helper.hide(ui_helper.editor_button);
            // $editor_button.addClass('zp-hidden');
            ui_helper.hide(ui_helper.form_button);
            // $form_button.addClass('zp-hidden');
            ui_helper.show(ui_helper.enlarge_button);
            // $enlarge_button.removeClass('zp-hidden');
        }

        $('div.zetaprints-image-tabs, div.zetaprints-preview-button').css('display', 'block');

        $('div.zetaprints-image-tabs li:first').addClass('selected');

        $('div.tab.user-images').each(function () {
            let $this = $(this);

            //It's not empty when it has more than 1 child
            //because first child is template element
            if ($this.find('td').length > 1) {
                $this
                    .parents('.selector-content')
                    .find('> .tab-buttons > .hidden')
                    .removeClass('hidden');
            }
        });

        // this._add_hidden_form_fields(template_details);

        $add_to_cart_button.parent().before(
            '<div id="zp-warning-user-data-changed" class="zetaprints-notice">' +
            window.warning_user_data_changed +
            '</div>'
        );

        if (personalization_form_instance.is_all_pages_updated(template_details)
            || (personalization_form_instance._has_updated_pages(template_details)
            && template_details.missed_pages === '')
            || template_details.missed_pages === 'include') {
            ui_helper.hide('div.zetaprints-notice.to-update-preview');
            // $('div.zetaprints-notice.to-update-preview').addClass('zp-hidden');
        } else {
            fake_add_to_cart_button.add(typeof template_details.pages['2'] !== 'undefined');
        }
        //Add resizer for text inputs and text areas for the first page
        if ($.fn.text_field_resizer) {
            $('#input-fields-page-1 .zetaprints-text-field-wrapper').text_field_resizer();
        }

        //Set preview images sharing link for the first page
        if (window.place_preview_image_sharing_link) {
            this.set_preview_sharing_link_for_page(1, zp.preview_sharing_links);
        }

        const image_tab_controller = new ImageTabController(this);
        $('div.zetaprints-image-tabs li').click(function () {
            image_tab_controller.handle_click(this)
        });

        Feature.instance().call(Feature.feature.dataset, Dataset.zp_dataset_initialise, zp);
        // Delegate.delegate('zp_dataset_initialise', zp);

        this._patchProductAddToCart();


        this._add_dynamic_methods_to_data();
        this._init_image_upload_buttons();

        this._register_window_load();
        this._register_click_next_page();
        this._register_preview_lightbox();
        this._register_in_dialog_lightbox();
        this._register_click_edit_thumbnail();
        this._prepareTextFieldEditor();
        this._prepareQtip();
        this._register_input_field_events();
        this._register_delete_button_click();
        this._register_image_click();
        this._register_palette_change();

        if (zp.has_shapes) {
            Feature.instance().call(Feature.feature.inPreviewEdit, this.in_preview_edit_controller.add_in_preview_edit_handlers);
        }
    }

    /**
     * @private
     */
    _register_click_enlarge_editor() {
        const ui_helper = UiHelper.instance();
        ui_helper.editor_button.click(this._enlarge_editor_click_handler);
        ui_helper.enlarge_button.click(this._enlarge_editor_click_handler);
    }

    /**
     * @private
     */
    _register_click_form_button() {
        const data = this.data;
        return UiHelper.instance().form_button.click(function () {
            const $fields = $('#input-fields-page-' + data.current_page + ', #stock-images-page-' + data.current_page);

            const ui_helper = UiHelper.instance();

            data.is_fields_hidden = !ui_helper.has_hide_class($fields);
            // zp.is_fields_hidden = !$fields.hasClass('zp-hidden');


            if (data.is_fields_hidden) {
                $fields.animate({opacity: 0}, 500, function () {
                    ui_helper.hide($fields);
                    // $fields.addClass('zp-hidden');
                    $fields.css('opacity', 1);
                });
            } else {
                $fields.css('opacity', 0);
                ui_helper.show($fields);
                // $fields.removeClass('zp-hidden');
                $fields.animate({opacity: 1}, 500);
            }
        });
    }

    /**
     * @return {TemplateDetail}
     */
    get template_details() {
        return this.data.template_details;
    }

    /**
     * @return {number}
     */
    get current_page() {
        return this.data.current_page;
    }

    /**
     * @return {boolean}
     */
    get is_fields_hidden() {
        return this.data.is_fields_hidden;
    }

    /**
     * @return {Array}
     */
    get preview_sharing_links() {
        return this.data.preview_sharing_links;
    }

    /**
     * @return {boolean}
     */
    get is_personalization_step() {
        return this.data.is_personalization_step;
    }

    /**
     * @return {boolean}
     */
    get update_first_preview_on_load() {
        return this.data.update_first_preview_on_load;
    }

    /**
     * @return {boolean}
     */
    get preserve_fields() {
        return this.data.preserve_fields;
    }

    /**
     * @return {boolean}
     */
    get has_shapes() {
        return this.data.has_shapes;
    }

    /**
     * @return {string}
     */
    get w2p_url() {
        return this.data.w2p_url;
    }

    /**
     * @return {Array}
     */
    get options() {
        return this.data.options;
    }

    /**
     * @return {object}
     */
    get url() {
        return this.data.url;
    }

    /**
     * @return {*}
     */
    get image_edit() {
        return this.data.image_edit;
    }

    /**
     * @return {ProductForm}
     * @private
     */
    get _product_form() {
        return UiHelper.instance().product_form;
    }

    /**
     * @return {boolean}
     */
    get has_image_zoomer() {
        return !!this._has_image_zoomer;
    }

    /**
     * @param {number} page_number
     * @return {boolean}
     * @api
     */
    has_changed_fields_on_page(page_number) {
        let $fields = $('#input-fields-page-' + page_number + ', ' +
            '#stock-images-page-' + page_number);

        if (!$fields.length) {
            return false;
        }

        const $filtered_fields = $fields
            .find('*[name^="zetaprints-_"], *[name^="zetaprints-#"]')
            .filter('textarea, select, :text, :checked')
            .filter('*[type!=hidden]');

        const length = $filtered_fields.length;
        if (!length) {
            return false;
        }

        for (let i = 0; i < length; i++) {
            if ($($filtered_fields[i]).val()) {
                return true;
            }
        }

        return false;
    }

    /**
     * @param {string} guid
     * @param {string} url
     * @param {function} [on_image_load]
     */
    add_image_to_gallery(guid, url, on_image_load) {
        const _this = this;
        const data = this.data;
        const trs = $('.tabs-wrapper > .user-images > table > tbody > tr');

        const image_field_select_handler = (event) => {
            _this.image_field_select_handler($(event.target), data);
        };
        const thumbnail_edit_click_handler = function (event) {
            event.preventDefault();
            const $target = $(this);
            const $input = $target.parent().children('input');

            _this._show_image_edit_dialog(
                $input.attr('name').substring(12),
                $input.val(),
                $target.children('img')
            );

            return false;
        };

        const delete_image_click_handle = function (event) {
            event.stopPropagation();
            event.preventDefault();

            if (confirm(delete_this_image_text)) {
                const image_id = $(this).parents('td').children('input').val();
                _this._delete_image(data, image_id);
            }

            return false;
        };


        trs.each(function () {
            const $tr = $(this);
            const $template = $tr.children('.zp-html-template');

            const $td = $template
                .clone()
                .removeClass('zp-html-template')
                .insertAfter($template);

            $td
                .children('.zetaprints-field')
                .val(guid)
                .change(image_field_select_handler);

            $td
                .children('.image-edit-thumb')
                .click(thumbnail_edit_click_handler);

            const $thumb = $td.children('.image-edit-thumb');

            $thumb
                .find('> .buttons-row > .zp-delete-button')
                .click(delete_image_click_handle);

            const $img = $thumb
                .children('img')
                .attr('alt', guid)
                .attr('src', url);

            if (on_image_load) {
                $img.load(on_image_load);
            }
        });
    }

    /**
     * @param {jQuery|HTMLElement} target
     * @param {DataInterface} data
     */
    image_field_select_handler(target, data) {
        let $selector = target.parents('div.zetaprints-images-selector');
        let $content = $selector.parents('.selector-content');

        if (!$selector.get(0)) {
            $content = target.parents('.selector-content');
            $selector = $content.data('in-preview-edit').parent;
        }


        const name = target.attr('name').substring(12);
        const value = target.val();
        const has_value = !!value.length;

        const page = data.template_details.pages[data.current_page];
        const image = page.images[name];

        if (image) {
            image.value = value;

            if (typeof image.previous_value !== 'undefined') {
                this._product_form.user_data_changed = image.previous_value !== value;
            }
        }

        if (has_value) {
            $selector.removeClass('no-value');

            UiHelper.instance().fancybox_outer.addClass('modified');
            this._product_form.modified = true;

            //If ZetaPrints advanced theme is enabled then mark shape as edited then image is selected
            Feature.instance().call(Feature.feature.inPreviewEdit, () => {
                this.in_preview_edit_controller.mark_shape_as_edited(page.shapes[name]);
            });
            // Delegate.delegate('mark_shape_as_edited', page.shapes[name]);
        } else {
            $selector.addClass('no-value');

            UiHelper.instance().fancybox_outer.removeClass('modified');
            //If ZetaPrints advanced theme is enabled then or unmark shape then Leave blank is selected
            Feature.instance().call(Feature.feature.inPreviewEdit, () => {
                this.in_preview_edit_controller.unmark_shape_as_edited(page.shapes[name]);
            });
            // Delegate.delegate('unmark_shape_as_edited', page.shapes[name]);
        }
    }

    /**
     * @param {TemplateDetail} details
     * @return {boolean}
     * @api
     */
    is_all_pages_updated(details) {
        let page_number;
        const pages = details.pages;
        for (page_number in pages) {
            if (pages.hasOwnProperty(page_number) && !details.pages[page_number]['updated-preview-image']) {
                return false;
            }
        }

        return true;
    }

    /**
     * @param {Page} page
     * @api
     */
    store_user_data(page) {
        let name;
        const fields = page.fields;
        const images = page.images;

        for (name in fields) {
            if (fields.hasOwnProperty(name)) {
                if (!fields[name].value) {
                    fields[name].value = '';
                }

                fields[name].previous_value = fields[name].value;
            }
        }

        for (name in images) {
            if (images.hasOwnProperty(name)) {
                if (!images[name].value) {
                    images[name].value = '#';
                }

                images[name].previous_value = images[name].value;
            }
        }
    }

    /**
     * @param {Page} page
     * @return {boolean}
     */
    is_user_data_changed(page) {
        let name;
        const fields = page.fields;
        const images = page.images;

        for (name in fields) {
            if (fields.hasOwnProperty(name)
                && typeof fields[name].previous_value !== 'undefined'
                && fields[name].previous_value !== fields[name].value
            ) {
                return true;
            }
        }
        for (name in images) {
            if (images.hasOwnProperty(name)
                && typeof images[name].previous_value !== 'undefined'
                && images[name].previous_value !== images[name].value
            ) {
                return true;
            }
        }
        return false;
    }

    /**
     * @param pages
     * @return {boolean}
     * @api
     */
    page_has_updating(pages) {
        for (let n in pages) {
            if (pages.hasOwnProperty(n) && typeof pages[n].is_updating !== 'undefined' && pages[n].is_updating) {
                return true;
            }
        }

        return false;
    }

    /**
     *
     * @param {number|string} page_number
     * @param {*[]} links
     * @param {string} filename
     */
    update_preview_sharing_link_for_page(page_number, links, filename) {
        links[page_number] = preview_image_sharing_link_template + filename;
    }

    /**
     * @param {number} page_number
     * @param {object} links
     */
    set_preview_sharing_link_for_page(page_number, links) {
        if (links[page_number]) {
            $('span.zetaprints-share-link').removeClass('empty');
            $('#zetaprints-share-link-input').val(links[page_number]);
        } else {
            $('span.zetaprints-share-link').addClass('empty');
            $('#zetaprints-share-link-input').val('');
        }
    }

    /**
     *
     * @param {MouseEvent} event
     * @param {undefined|*[]} update_pages
     * @param {boolean} preserve_fields
     * @return {boolean}
     */
    update_preview(event, update_pages, preserve_fields) {
        this.preview_controller.update_preview(this.data, update_pages, preserve_fields);
        event.preventDefault();

        return false;
    }

    /**
     * @param {number} page_number
     * @param {DataInterface} data
     * @return {boolean}
     */
    can_show_next_page_button_for_page(page_number, data) {
        const page = data.template_details.pages[page_number];

        return !!(page_number < data.template_details.pages_number && page['updated-preview-image']);
    }

    /**
     * @param {HTMLElement} panel
     * @return {boolean}
     */
    scroll_strip(panel) {
        if ($(panel).hasClass('images-scroller')) {
            $(panel).scrollLeft(0);
            let position = $('input:checked', panel).parents('td').position();
            if (position) {
                $(panel).scrollLeft(position.left);
            }
        }
        return true;
    }

    /**
     * @param details
     * @return {string}
     * @api
     */
    export_previews_to_string(details) {
        let previews = '';
        let number;

        const pages = details.pages;
        for (number in pages) {
            if (pages.hasOwnProperty(number)) {
                const page = pages[number];

                if (page['updated-preview-image']) {
                    previews += ',' + page['updated-preview-image'].split('preview/')[1];
                }
            }
        }

        return previews.substring(1);
    }

    /**
     * @param {string} url
     * @api
     */
    upload_image_by_url(url) {
        const zp = this.data;
        const personalization_form_instance = this;
        const options = {
            type: 'POST',
            dataType: 'json',
            data: {'url': url},
            error: function (request, status, error) {
                alert(status + ' ' + error);
            },
            /**
             * @param {UploadResult} data
             */
            success: function (data) {
                personalization_form_instance.add_image_to_gallery(data.guid, data.thumbnail_url);

                zp.image_edit.reload_image(data.guid);
            }
        };

        $.ajax(zp.url.upload_by_url, options);
    }

    /**
     * @param {MetaData} metadata
     */
    save_image_handler(metadata) {
        const zp = this.data;
        let $input = zp.image_edit.$input;

        if (!$input.length) {
            return;
        }

        if (metadata) {
            metadata['img-id'] = $input.val();
            MetaDataHelper.zp_set_metadata(zp.image_edit.placeholder, metadata);
        } else {
            MetaDataHelper.zp_clear_metadata(zp.image_edit.placeholder);
        }
    }

    /**
     * Disable the image zoomer if one exists
     *
     * If there's image zoomer on the page remove it and base image
     *
     * @returns {boolean} Returns if a image zoomer has been disabled
     */
    disable_image_zoomer() {
        if (!this.has_image_zoomer) {
            return false;
        }
        ZoomHelper.disable_zoom();
        this._set_has_image_zoomer(false);

        return true;
    }

    /**
     * @inheritDoc
     */
    show_colorpicker($panel) {
        Assert.assertjQuery($panel);
        if (!($panel.hasClass('color-picker') || $panel.hasClass('colour-picker'))) {
            return;
        }

        const $input = $panel.find('input');

        if (!$input.prop('checked')) {
            $input.colorpicker('open');
        }
    }

    /**
     * @inheritDoc
     */
    hide_colorpicker($panel) {
        Assert.assertjQuery($panel);
        if ($panel.hasClass('color-picker') || $panel.hasClass('colour-picker')) {
            $panel
                .find('input')
                .colorpicker('close', true);
        }
    }

    /**
     * @inheritDoc
     */
    show_user_images($panel) {
        Assert.assertjQuery($panel);
        if ($panel.find('input.zetaprints-images').length > 0) {
            $panel.tabs('option', 'active', 1);
        }
    }


    /**
     * @param {boolean} value
     * @private
     */
    _set_has_image_zoomer(value) {
        this._has_image_zoomer = value;
    }

    /**
     * @private
     */
    _add_dynamic_methods_to_data() {
        const _update_preview = this.update_preview;
        this.data.update_preview = function () {
            Logger.warn('Called update_preview on ZetaPrints data');
            /** @type {function} _update_preview */
            _update_preview.apply(this, arguments);
        };

        this.data.show_user_images = ($panel) => {
            Logger.warn('Called show_user_images on ZetaPrints data');
            return this.show_user_images($panel);
        };

        this.data.show_colorpicker = ($panel) => {
            Logger.warn('Called show_colorpicker on ZetaPrints data');

            return this.show_colorpicker($panel);
        };

        this.data.hide_colorpicker = ($panel) => {
            Logger.warn('Called hide_colorpicker on ZetaPrints data');

            return this.hide_colorpicker($panel);
        };
    }

    /**
     * @private
     */
    _init_image_upload_buttons() {
        const personalization_form_instance = this;
        $('div.button.choose-file').each(function () {
            new ImageUpload(this, personalization_form_instance)
        });
    }

    /**
     * @private
     */
    _register_window_load() {
        const personalization_form_instance = this;
        const zp = this.data;
        $(window).load(function (event) {
            if (zp.has_shapes /*&& window.place_all_shapes_for_page && shape_handler*/) {
                Feature.instance().call(Feature.feature.inPreviewEdit, InPreviewEditController.precalculate_shapes, zp.template_details);


                //Add all shapes only then there's no base image.
                //Shapes will be added after first preview update then base image exists
                //if (!has_image_zoomer)
                //  place_all_shapes_for_page(zp.template_details.pages[zp.current_page].shapes,
                //                            $product_image_box,
                //                            shape_handler);
            }

            UiHelper.instance().select_image_elements.each(function () {
                new ImageSelector(this, personalization_form_instance);
            });
        });
    }

    /**
     * @private
     */
    _register_click_next_page() {
        UiHelper.instance().next_page_button.click(() => {
            const next_page_number = this.current_page + 1;

            $('div.zetaprints-image-tabs li img[rel="page-' + next_page_number + '"]')
                .parent()
                .click();

            return false;
        });
    }

    /**
     * @private
     */
    _register_click_edit_thumbnail() {
        const personalization_form_instance = this;

        $('.image-edit-thumb').click(function () {
            const $target = $(this);
            const $input = $target.parent().children('input');

            personalization_form_instance._show_image_edit_dialog(
                $input.attr('name').substring(12),
                $input.val(),
                $target.children('img')
            );

            return false;
        });
    }

    /**
     * @private
     */
    _register_input_field_events() {
        const personalization_form_instance = this;
        $('div.zetaprints-page-input-fields input.input-text').keypress(function (event) {
            if (event.keyCode === 13) {
                return false;
            }
        });


        $('div.zetaprints-page-input-fields')
            .find('.zetaprints-field')
            .filter('textarea, :text')
            .keyup({zp: this}, function () {
                personalization_form_instance._text_fields_change_handle(this)
            })
            .filter('[readonly]')
            .click(function (event) {
                personalization_form_instance._readonly_fields_click_handle(event, this)
            })
            .end()
            .end()
            .filter('select, :checkbox')
            .change({zp: this}, function () {
                personalization_form_instance._text_fields_change_handle(this)
            });
    }

    /**
     * @private
     */
    _register_delete_button_click() {
        const personalization_form_instance = this;
        const zp = this.data;
        $('.zp-delete-button').click(function (event) {
            event.stopPropagation();
            event.preventDefault();

            if (confirm(delete_this_image_text)) {
                const image_id = $(this).parents('td').children('input').val();
                personalization_form_instance._delete_image(zp, image_id);
            }

            return false;
        });
    }

    /**
     * @private
     */
    _register_image_click() {
        const personalization_form_instance = this;
        $('input.zetaprints-images').click(function (event) {
            const $input = $(this);
            const page = personalization_form_instance.template_details.pages[personalization_form_instance.current_page];
            const field = page.images[$input.attr('name').substring(12)];

            const metadata = $input.data('metadata');
            if (metadata) {
                metadata['img-id'] = $input.val();
                MetaDataHelper.zp_set_metadata(field, metadata);
            } else {
                MetaDataHelper.zp_clear_metadata(field);
            }
        });
    }

    /**
     * @private
     */
    _register_palette_change() {
        const personalization_form_instance = this;
        const zp = this.data;

        $('.zetaprints-palettes .zetaprints-field').change(function () {
            const $this = $(this);

            const id = $this
                .attr('name')
                .substring(12);

            const colour = $this.val();
            const pages = zp.template_details.pages;

            personalization_form_instance._map_pages(pages, (page) => {
                const fields = pages[page].fields;
                for (const field_name in fields) {
                    if (fields.hasOwnProperty(field_name)) {
                        const field = pages[page].fields[field_name];

                        if ('' + field.palette === '' + id) {
                            MetaDataHelper.zp_set_metadata(field, {'col-f': colour});
                        }
                    }
                }

                const images = pages[page].images;
                for (const image_name in images) {
                    if (images.hasOwnProperty(image_name)) {
                        const image = pages[page].images[image_name];

                        if ('' + image.palette === '' + id) {
                            MetaDataHelper.zp_set_metadata(image, {'col-f': colour});
                        }
                    }
                }
            });
        });
    }

    /**
     * @private
     */
    _register_in_dialog_lightbox() {
        const personalization_form_instance = this;
        const data = personalization_form_instance.data;

        const lightbox_configuration = new LightboxConfiguration({
            'opacity': true,
            'overlayShow': false,
            'transitionIn': 'elastic',
            'changeSpeed': 200,
            'speedIn': 500,
            'speedOut': 500,
            'titleShow': false,
        });
        lightbox_configuration.willShow = function () {
            let is_in_preview = false;

            if (UiHelper.instance().update_preview_button.length) {
                Feature.instance().call(Feature.feature.fancybox.updatePreview, UpdatePreview.fancybox_remove_update_preview_button, $);
                // Delegate.delegate('fancybox_remove_update_preview_button', $);
                is_in_preview = true;
            }

            if (UiHelper.instance().fancybox_resize.length) {
                Feature.instance().call(Feature.feature.fancybox.resizing, Resizing.fancybox_resizing_hide);
            }

            Feature.instance().call(Feature.feature.fancybox.selectImage, SelectImage.fancybox_add_use_image_button, $, data, is_in_preview);
            // Delegate.delegate('fancybox_add_use_image_button', $, zp, is_in_preview);
        };
        lightbox_configuration.didShow = function () {
            Feature.instance().call(Feature.feature.fancybox.selectImage, SelectImage.fancybox_update_preview_button, $);
            // Delegate.delegate('fancybox_update_preview_button', $);
        };
        lightbox_configuration.didClose = function () {
            Feature.instance().call(Feature.feature.fancybox.selectImage, SelectImage.fancybox_remove_use_image_button, $);
            // Delegate.delegate('fancybox_remove_use_image_button', $);
        };

        const lightbox = new Lightbox();
        lightbox.register('a.in-dialog', lightbox_configuration);
    }

    /**
     * @private
     */
    _register_preview_lightbox() {
        const personalization_form_instance = this;
        const data = personalization_form_instance.data;
        const in_preview_edit_controller = personalization_form_instance.in_preview_edit_controller;
        const shape_repository = personalization_form_instance.shape_repository;
        const lightbox_configuration = new LightboxConfiguration({
            'opacity': true,
            'overlayShow': false,
            'transitionIn': 'elastic',
            'speedIn': 500,
            'speedOut': 500,
            'titleShow': false,
            'hideOnContentClick': true,
            'showNavArrows': false,
        });
        lightbox_configuration.willShow = function () {
            if (UiHelper.instance().select_image_button.length) {
                Feature.instance().call(Feature.feature.fancybox.selectImage, SelectImage.fancybox_remove_use_image_button, $);
                // Delegate.delegate('fancybox_remove_use_image_button', $);
            }
            if ($('#zp-save-image-button').length) {
                Feature.instance().call(
                    Feature.feature.fancybox.saveImageButton,
                    SaveImageButton.fancybox_remove_save_image_button,
                    $
                );
                // Delegate.delegate('fancybox_remove_save_image_button', $);
            }

            if (!data.template_details.pages[data.current_page].static) {
                Feature.instance().call(Feature.feature.fancybox.updatePreview, UpdatePreview.fancybox_add_update_preview_button, $, data);
                // Delegate.delegate('fancybox_add_update_preview_button', $, zp);
            }
        };
        lightbox_configuration.didShow = function () {
            UiHelper.instance().fancybox_image.attr('title', click_to_close_text);

            //!!! Needs to be implemented via zp object.
            //!!! Page state should be saved in page object.
            if (personalization_form_instance.has_changed_fields_on_page(data.current_page)) {
                UiHelper.instance().fancybox_outer.addClass('modified');
            } else {
                UiHelper.instance().fancybox_outer.removeClass('modified');
            }


            Feature.instance().call(Feature.feature.fancybox.resizing, Resizing.fancybox_resizing_add, this);
            // Delegate.delegate('fancybox_resizing_add', this);

            Feature.instance().call(Feature.feature.fancybox.updatePreview, UpdatePreview.fancybox_update_update_preview_button, $, data);
            // Delegate.delegate('fancybox_update_update_preview_button', $);


            if (false === (data.has_shapes && Feature.instance().is_activated(Feature.feature.inPreviewEdit))) {
                return;

                // window.place_all_shapes_for_page => InPreviewEditController.place_all_shapes_for_page
                // && window.highlight_shape => InPreviewEditController.highlight_shape
                // && window.popup_field_by_name => InPreviewEditController.popup_field_by_name
                // && window.fancy_shape_handler => InPreviewEditController.fancy_shape_handler
            }

            const $fancy_inner = UiHelper.instance().fancybox_content;

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
        lightbox_configuration.didClose = function () {
            Feature.instance().call(Feature.feature.fancybox.updatePreview, UpdatePreview.fancybox_remove_update_preview_button, $);
            // Delegate.delegate('fancybox_remove_update_preview_button', $);
            Feature.instance().call(Feature.feature.fancybox.resizing, Resizing.fancybox_resizing_hide);
        };
        lightbox_configuration.willClose = function () {
            if (data.has_shapes && Feature.instance().is_activated(Feature.feature.inPreviewEdit)) {
                $('div.zetaprints-field-shape', UiHelper.instance().fancybox_content).removeClass('highlighted');
                in_preview_edit_controller.popdown_field_by_name();
            }
        };

        const lightbox = new Lightbox();
        lightbox.register('a.zetaprints-template-preview', lightbox_configuration);
    }

    // /**
    //  * Add TemplateID parameter to the form
    //  *
    //  * @param {DataInterface} zp
    //  * @private
    //  */
    // _add_template_id_parameter_to_form(zp) {
    //     const guid = zp.template_details.guid;
    //     /**
    //      * @type {ProductForm}
    //      */
    //     const product_form = UiHelper.instance().product_form;
    //     $('<input type="hidden" name="zetaprints-TemplateID" value="' + guid + '" />').appendTo(product_form);
    // }

    /**
     * @param {DataInterface} zp
     * @param image_id
     * @private
     */
    _delete_image(zp, image_id) {
        $.ajax({
            url: zp.url.image,
            type: 'POST',
            data: 'zetaprints-action=img-delete&zetaprints-ImageID=' + image_id,
            error: function (request, status) {
                alert(cant_delete_text + ': ' + status);
            },
            success: function () {
                $('input[value="' + image_id + '"]').parent().remove();
            }
        });
    }

    /**
     * @private
     */
    _patchProductAddToCart() {
        const zp = this.data;
        const preview_controller = this.preview_controller;

        if (typeof window.productAddToCartForm === 'object') {
            if (typeof window.productAddToCartForm.submit === 'function') {
                const func = window.productAddToCartForm.submit;

                window.productAddToCartForm.submit = (button, url) => {
                    const text = window.notice_update_preview_after_data_changed,
                        pages = zp.template_details.pages,
                        changed_pages = this._page_get_changed(pages);

                    if (changed_pages.length > 0 && confirm(text)) {
                        preview_controller.update_preview(zp, changed_pages, false);
                        return false;
                    }

                    func(button, url);
                };
            }
        }
    }

    /**
     * @param {Page[],object} pages
     * @param {function} callback
     * @private
     */
    _map_pages(pages, callback) {
        if (typeof callback !== 'function') {
            throw new TypeError('Argument "callback" must be a function');
        }
        for (let pageIdentifier in pages) {
            if (pages.hasOwnProperty(pageIdentifier)) {
                callback(pageIdentifier);
            }
        }
    }

    /**
     * @param {HTMLElement} product_image_element
     * @return {boolean}
     * @private
     */
    _detect_initial_has_image_zoomer(product_image_element) {
        return !!($(product_image_element).hasClass('product-image-zoom') || $(product_image_element).parent().hasClass('product-image-zoom'));
    }

    /**
     * @private
     */
    _prepareTextFieldEditor() {
        if (!$.fn.text_field_editor) {
            return;
        }

        const zp = this.data;
        $('.zetaprints-page-input-fields .zetaprints-field')
            .filter(':input:not([type="hidden"])')
            .each(function () {
                    const $text_field = $(this);
                    const page = $text_field.parents('.zetaprints-page-input-fields')
                        .attr('id')
                        .substring(18);

                    const field = zp.template_details.pages[page]
                        .fields[$text_field.attr('name').substring(12)];

                    const cached_value = MetaDataHelper.zp_get_metadata(field, 'col-f', '');

                    //Remove metadata values, so they won't be used in update preview requests
                    //by default
                    MetaDataHelper.zp_set_metadata(field, 'col-f', undefined);

                    if (field['colour-picker'] !== 'RGB') {
                        return;
                    }

                    const $button_container = $text_field.parents('dl').children('dt');

                    $text_field.text_field_editor({
                        button_parent: $button_container,
                        colour: cached_value,

                        change: function (data) {
                            const metadata = {
                                'col-f': data.color
                            };

                            MetaDataHelper.zp_set_metadata(field, metadata);
                        }
                    });
                }
            );
    }

    /**
     * @private
     */
    _prepareQtip() {
        if ($.fn.qtip) {
            $('div.zetaprints-page-input-fields input[title], div.zetaprints-page-input-fields textarea[title]').qtip({
                position: {corner: {target: 'bottomLeft'}},
                show: {delay: 1, solo: true, when: {event: 'focus'}},
                hide: {when: {event: 'unfocus'}}
            });

            $('div.zetaprints-page-stock-images select[title]').qtip({
                position: {corner: {target: 'topLeft'}, adjust: {y: -30}},
                show: {delay: 1, solo: true, when: {event: 'focus'}},
                hide: {when: {event: 'unfocus'}}
            });
        }
    }

    /**
     * Adds the hidden form fields
     *
     * @param {TemplateDetail} template_details
     * @private
     */
    _add_hidden_form_fields(template_details) {
        /**
         * @type {ProductForm}
         */
        const product_form = UiHelper.instance().product_form;

        const value = this.export_previews_to_string(template_details);
        product_form.append($('<input type="hidden" name="zetaprints-previews" value="' + value + '" />'));

        const guid = template_details.guid;
        product_form.append($('<input type="hidden" name="zetaprints-TemplateID" value="' + guid + '" />'));
    }

    /**
     * Iterate over all image fields in template details and if image field has a value then mark it as EDITED
     *
     * @param {Object.<string, Page>} pages
     * @private
     */
    _prepareImageFields(pages) {
        //Iterate over all image fields in template details...
        for (let page in pages) {
            if (!pages.hasOwnProperty(page)) {
                continue;
            }
            let images = pages[page].images;
            for (let name in images) {
                //... and if image field has a value then...
                if (images.hasOwnProperty(name) && images[name].value) {
                    //... mark it as EDITED
                    $('#stock-images-page-' + page)
                        .children('[title="' + name + '"]')
                        .removeClass('no-value');
                }
            }
        }
    }

    /**
     * @param pages
     * @private
     */
    _prepareComboBox(pages) {
        //Get all dropdown text fields
        let $selects = $('.zetaprints-page-input-fields').find('select.zetaprints-field');

        //Iterate over all text fields in template details...
        for (let page in pages) {
            if (pages.hasOwnProperty(page)) {
                let fields = pages[page].fields;
                for (let name in fields) {
                    //... and if text field has combobox flag then...
                    if (fields.hasOwnProperty(name) && fields[name].combobox) {
                        //convert relevant DOM element into a combobox
                        $selects
                            .filter('[name="zetaprints-_' + name + '"]')
                            .wrap('<div class="zetaprints-text-field-wrapper" />')
                            .combobox();
                    }
                }
            }
        }
    }

    /**
     * @private
     */
    _enlarge_editor_click_handler() {
        const current_page = this.data.current_page;

        if (UiHelper.instance().fancybox_wrap.is(':visible')) {
            $.fancybox.close();
        } else {
            Logger.debug(this.preview_controller.get_preview_for_page_number(current_page));
            this.preview_controller.get_preview_for_page_number(current_page).preview_click();

            const preview_image_page = document.getElementById('preview-image-page-' + current_page);
            if (preview_image_page) {
                Logger.debug(`[Form] Trigger click on Preview Image Page for current page ${current_page}`);
                $(preview_image_page).click();
            } else {
                Logger.warn(`[Form] Preview Image Page for current page ${current_page} not found`);
            }
        }
    }

    /**
     * @param {TemplateDetail} details
     * @return {boolean}
     * @private
     */
    _has_updated_pages(details) {
        let page_number;
        const pages = details.pages;
        for (page_number in pages) {
            if (pages.hasOwnProperty(page_number) && details.pages[page_number]['updated-preview-image']) {
                return true;
            }
        }

        return false;
    }

    /**
     * @param pages
     * @return {Array}
     * @private
     */
    _page_get_changed(pages) {
        let n;
        const changed_pages = [];

        for (n in pages) {
            if (pages.hasOwnProperty(n) && this.is_user_data_changed(pages[n])) {
                changed_pages[changed_pages.length] = n;
            }
        }

        return changed_pages;
    }

    /**
     * @param {string} s
     * @return {string}
     * @private
     */
    _prepare_string_for_php(s) {
        return s.replace(/\./g, '\x0A');
    }

    /**
     * @param {object[]} data
     * @return {object[]}
     * @private
     */
    _prepare_post_data_for_php(data) {
        for (let i = 0, l = data.length; i < l; i++) {
            data[i].name = this._prepare_string_for_php(data[i].name);
        }

        return data;
    }

    /**
     * @param {Page} page
     * @param {object[]}  data
     * @return {object[]}
     */
    _prepare_metadata_from_page(page, data) {
        let metadata;
        let name;
        let l = data.length;

        const images = page.images;
        for (name in images) {
            if (images.hasOwnProperty(name) && (metadata = MetaDataHelper.zp_convert_metadata_to_string(images[name]))) {
                data[l++] = {
                    name: 'zetaprints-*#' + this._prepare_string_for_php(name),
                    value: metadata
                };
            }
        }
        const fields = page.fields;
        for (name in fields) {
            if (fields.hasOwnProperty(name) && (metadata = MetaDataHelper.zp_convert_metadata_to_string(fields[name]))) {
                data[l++] = {
                    name: 'zetaprints-*_' + this._prepare_string_for_php(name),
                    value: metadata
                };
            }
        }

        return data;
    }

    /**
     * @param {number} page_number
     * @return {object[]}
     * @private
     */
    _serialize_fields_for_page(page_number) {
        return $('#input-fields-page-' + page_number + ', #stock-images-page-'
            + page_number)
            .find('.zetaprints-field')
            .filter(':text, textarea, :checked, select, [type="hidden"]')
            .serializeArray();
    }

    /**
     * @param {number} page_number
     * @return {object[]}
     */
    _prepare_metadata_from_page_number(page_number) {
        /**
         * @type {Page}
         */
        const page = this.data.template_details.pages[page_number];

        return this._prepare_metadata_from_page(
            page,
            this._prepare_post_data_for_php(this._serialize_fields_for_page(page_number))
        );
    }

    /**
     * Magento 1.9 and greater adds its own ID (but not in RWD theme) Zetaprint's ID is left for compatibility with old
     * installations and RWD-based themes
     *
     * @return {*|jQuery|HTMLElement}
     * @private
     */
    _get_add_to_cart_button() {
        return $('#product-addtocart-button, #zetaprints-add-to-cart-button');
    }

    /**
     * @param {string} image_name
     * @param {string} image_guid
     * @param {jQuery|HTMLElement} $thumb
     * @private
     */
    _show_image_edit_dialog(image_name, image_guid, $thumb) {
        this.image_editor.show(decodeURI(image_name), image_guid, $thumb);
    }

    /**
     * @param {Shape} shape
     * @param state
     * @return {*}
     * @private
     */
    _shape_update_state(shape, state) {
        if (state) {
            return this.in_preview_edit_controller.mark_shape_as_edited(shape);
        }
        const names = shape.name.split('; ');

        if (names.length === 1) {
            return this.in_preview_edit_controller.unmark_shape_as_edited(shape);
        }

        const $fields = $('#input-fields-page-' + zp.current_page)
            .find('input, textarea, select')
            .filter('textarea, select, :text, :checked');

        const $images = $('#stock-images-page-' + zp.current_page)
            .find('input')
            .filter(':checked');

        for (let i = 0; i < names.length; i++) {
            const name = names[i];

            if ($fields.filter('[name="zetaprints-_' + name + '"]').val()
                || $images.filter('[name="zetaprints-#' + name + '"]').length) {
                return;
            }
        }

        this.in_preview_edit_controller.unmark_shape_as_edited(shape);
    }

    /**
     * @param {jQuery|HTMLElement} element
     */
    _text_fields_change_handle(element) {
        const $element = $(element);
        const name = $element.attr('name').substring(12);
        const value = $element.is(':checkbox') ? $element.is(':checked') : $element.val();
        const state = !!value;
        const zp = this.data;
        const page = zp.template_details.pages[zp.current_page];
        const field = page.fields[name];
        const product_form = this._product_form;

        if (field) {
            field.value = value;

            if (typeof field.previous_value !== 'undefined') {
                product_form.user_data_changed = field.previous_value !== value;
            }
        }

        if (state) {
            UiHelper.instance().fancybox_outer.addClass('modified');
            product_form.modified = true;
        } else {
            UiHelper.instance().fancybox_outer.removeClass('modified');
        }

        if (zp.has_shapes && Feature.instance().is_activated(Feature.feature.inPreviewEdit)) {
            const shape = this.in_preview_edit_controller.get_shape_by_name(name, page.shapes);

            if (shape) {
                this._shape_update_state(shape, state);
            }
        }

        Feature.instance().call(Feature.feature.dataset, Dataset.zp_dataset_update_state, zp, name, false);
        // Delegate.delegate('zp_dataset_update_state', zp, name, false);
    }

    /**
     *
     * @param {Event} event
     * @param {HTMLInputElement} element
     */
    _readonly_fields_click_handle(event, element) {
        if (element.nodeName !== 'INPUT') {
            throw new TypeError('Argument "element" must be a HTMLInputElement');
        }
        const name = $(this).attr('name').substring(12);

        if (this.data.template_details.pages[zp.current_page].fields[name].dataset) {
            $('#zp-dataset-button').click();
        } else {
            $(element)
                .unbind(event)
                .val('')
                .prop('readonly', false);

            //Workaround for IE browser.
            //It moves cursor to the end of input field after focus.
            if (element.createTextRange) {
                const range = element.createTextRange();

                range.collapse(true);
                range.move('character', 0);
                range.select();
            }
        }
    }
}

PersonalizationForm.Events = {
    UPLOAD_COMPLETE: 'personalization_form:upload_complete'
};
