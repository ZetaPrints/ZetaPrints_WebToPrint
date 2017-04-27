import Logger from './Logger';

import $ from './jQueryLoader';
import ImageDimensions from "./model/ImageDimensions";
import SaveImageButton from "./fancybox/SaveImageButton";
import Feature from "./Feature";
import MetaData from "./model/MetaData";
import UiHelper from "./helper/UiHelper";
import NotificationHelper from "./NotificationCenter";
import MetaDataHelper from "./MetaDataHelper";
import Assert from "./helper/Assert";
import PersonalizationForm from "./PersonalizationForm";
import ImageEditorController from "./ImageEditorController";

const fancybox_show_activity = () => {
    const fancybox = $.fancybox;
    if (typeof fancybox.showLoading === 'function') {
        fancybox.showLoading();
    } else if (typeof fancybox.showActivity === 'function') {
        fancybox.showActivity();
    }
};

const fancybox_hide_activity = () => {
    const fancybox = $.fancybox;
    if (typeof fancybox.hideLoading === 'function') {
        fancybox.hideLoading();
    } else if (typeof fancybox.hideActivity === 'function') {
        fancybox.hideActivity();
    }
};

const fancybox_change_zindex = (new_value = 1103) => {
    UiHelper.instance().fancybox_overlay.css('z-index', new_value);
};

const get_value_by_regexp = (subject, exp) => {
    const match = subject.match(exp);
    if (match === null) {
        return false;
    }
    if (match.length > 2) {
        return match;
    } else {
        return match[1];
    }
};


export default class ImageEditor {
    /**
     * @param {ImageEditorController} controller
     */
    constructor(controller) {
        Assert.assertInstanceOf(controller, ImageEditorController, 'controller');
        /**
         * @type {ImageEditorController}
         * @private
         */
        this._controller = controller;

        /**
         * @type {ImageEditingContext}
         * @private
         */
        this._context = null;

        /**
         * @type {jQuery|HTMLElement|$}
         * @private
         */
        this._user_image = null;

        this._cropping_callback = this._cropping_callback.bind(this);
    }


    /**
     * Loads the editor
     *
     * @param {ImageEditingContext} context
     */
    load(context) {
        this._context = context;

        const container = this._container = $('.zetaprints-image-edit');

        this._load_image();
        this._initialize_info_bar(context);

        if (context.has_fit_in_field) {
            this._prepare_fit_into_buttons(context);
        } else {
            container
                .addClass('no-dpi')
                .children('.zetaprints-image-edit-menu')
                .children('.fit-to-field-button-wrapper, .note')
                .hide();
        }

        const $user_image_container = $('#zetaprints-image-edit-container');
        this._user_image = $('#zetaprints-image-edit-user-image');

        this._user_image.load(() => {
            if (container.hasClass('crop-mode') || !context.has_fit_in_field) {
                this._crop_button_click_handler();
            } else if (container.hasClass('fit-to-field-mode')) {
                this._fit_to_field_button_click_handler();
            } else if (container.hasClass('editor-mode')) {
                this._show_image_editor();
            }

            fancybox_hide_activity();

            fancybox_change_zindex(1100);
        });

        context.container = {
            width: $user_image_container.width() - 2,
            height: $user_image_container.height() - 2
        };

        $('#crop-button').click(() => {
            this._crop_button_click_handler()
        });
        $('#fit-to-field-button').click(() => {
            this._fit_to_field_button_click_handler()
        });

        $('#undo-button').click(() => {
            this._restore_image()
        });

        $('#zp-image-edit-action-cancel').click(() => {
            if (container.hasClass('changed')) {
                if (container.hasClass('crop-mode')) {
                    this._crop_button_click_handler();
                } else {
                    this._fit_to_field_button_click_handler(true);
                }
            }
        });

        $('#rotate-right-button').click(() => {
            this._server_side_rotation('r');
        });

        $('#rotate-left-button').click(() => {
            this._server_side_rotation('l');
        });

        $('#delete-button').click(() => {
            this._delete_image()
        });

        $('#image-editor-button').click(() => {
            this._image_editor_button_handler();
        });

        context.save = () => {
            Logger.debug('Invoked save on _context');
            this.save();
        };
        context.reload_image = (id) => {
            Logger.debug('Invoked reload_image on _context');
            this.reload_image(id);
        };
    }

    /**
     * @param {string} id
     */
    reload_image(id) {
        const context = this._context;
        $.ajax({
            url: context.url.image,
            type: 'POST',
            datatype: 'XML',
            data: {
                'zetaprints-action': 'img',
                'zetaprints-ImageID': id
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(cant_load_image_text + ': ' + textStatus);
                fancybox_change_zindex(1100);
            },
            success: (data, textStatus) => {
                NotificationHelper.instance().notify(ImageEditor.Events.IMAGE_LOADED, {instance: this, data: data});
                context.image_id = id;

                this._process_image_details(data);
            }
        });
    }

    /**
     * Close the editor
     */
    close() {
        NotificationHelper.instance().notify(ImageEditor.Events.CLOSE, {instance: this});

        if (ImageEditor._image_editor) {
            ImageEditor._image_editor.close();
        }
    }

    /**
     * Save the data
     */
    save() {
        const container = this._container;
        /** @type {*} Silence power_crop warning */
        const user_image = this._user_image;
        const notification_helper = NotificationHelper.instance();

        if (container.hasClass('crop-mode')) {
            fancybox_show_activity();
            this._server_side_cropping(user_image.power_crop('state'));

            notification_helper.notify(ImageEditor.Events.SAVE, {instance: this});

            return;
        }

        if (container.hasClass('fit-to-field-mode')) {
            this._save_metadata(user_image.power_crop('state'));

            notification_helper.notify(ImageEditor.Events.SAVE, {instance: this});

            return;
        }

        if (container.hasClass('editor-mode') && ImageEditor._image_editor) {
            ImageEditor._image_editor.save();
        }
    }

    /**
     * @param {ImageEditingContext} context
     * @private
     */
    _initialize_info_bar(context) {
        this.info_bar = this._container.find('div.info-bar');

        this.info_bar_elements = {
            'current': {
                'width': $('#current-width'),
                'height': $('#current-height'),
                'dpi': $('#current-dpi')
            },

            'recommended': {
                'width': $('#recommended-width'),
                'height': $('#recommended-height'),
                'dpi': $('#recommended-dpi')
            }
        };

        this._set_info_bar_value('recommended', 'width', context.placeholder.width);
        this._set_info_bar_value('recommended', 'height', context.placeholder.height);
    }

    /**
     * @param {ImageEditingContext} context
     * @private
     */
    _prepare_fit_into_buttons(context) {
        // Calculate shape dimensions
        context.shape.width = context.shape.x2 - context.shape.x1;
        context.shape.height = context.shape.y2 - context.shape.y1;

        context.placeholder.width_in = context.page.width_in * context.shape.width;
        context.placeholder.dpi = context.placeholder.width / context.placeholder.width_in;

        //Calculate ratio of the placeholder
        context.placeholder.ratio = context.placeholder.width / context.placeholder.height;

        this._set_info_bar_value('recommended', 'dpi', Math.round(context.placeholder.dpi));

        const register_fit_into_event_listener = (selector, get_crop_data_callback) => {
            if (typeof selector !== 'string' && typeof selector.jquery === 'undefined') {
                throw new TypeError('Argument "selector" must be either a jQuery object or a selector');
            }
            if (typeof get_crop_data_callback !== 'function') {
                throw new TypeError('Argument "get_crop_data_callback" must be of type function');
            }

            $(selector).click(() => {
                this._clear_editor();
                const data = get_crop_data_callback();
                if (typeof data === 'undefined') {
                    throw new TypeError('The get_crop_data_callback must return a value')
                }

                this._set_container_changed(true);
                this._show_crop(data);
            });
        };

        register_fit_into_event_listener('#zp-image-edit-action-fit-image', () => {
            const context = this._context;
            const image = this._fit_image_into_placeholder(context.image, context.placeholder);
            image.ratio = context.image.ratio;

            return this._fit_into_container(image, context.placeholder, context.container);
        });

        register_fit_into_event_listener('#zp-image-edit-action-fill-field', () => {
            const context = this._context;
            const placeholder = this._fill_placeholder_with_image(context.image, context.placeholder);
            placeholder.ratio = context.placeholder.ratio;

            return this._fit_into_container(context.image, placeholder, context.container);
        });

        register_fit_into_event_listener('#zp-image-edit-action-fit-width', () => {
            const context = this._context;
            const image = this._fit_image_into_placeholder_by_width(context.image, context.placeholder);
            image.ratio = context.image.ratio;

            return this._fit_into_container(image, context.placeholder, context.container);
        });

        register_fit_into_event_listener('#zp-image-edit-action-fit-height', () => {
            const context = this._context;
            const image = this._fit_image_into_placeholder_by_height(context.image, context.placeholder);
            image.ratio = context.image.ratio;

            return this._fit_into_container(image, context.placeholder, context.container);
        });
    }

    /**
     * @param type
     * @param key
     * @param value
     * @private
     */
    _set_info_bar_value(type, key, value) {
        this.info_bar_elements[type][key].html(value);
    }

    /**
     * @param data
     * @private
     */
    _cropping_callback(data) {
        const context = this._context;
        const width_factor = data.selection.width / data.image.width;
        const height_factor = data.selection.height / data.image.height;

        this._set_info_bar_value('current', 'width', Math.round(context.image.width * width_factor));
        this._set_info_bar_value('current', 'height', Math.round(context.image.height * height_factor));

        if (width_factor !== 1 || height_factor !== 1) {
            this._set_info_bar_state('cropped', true);
            this._set_container_changed(true)
            this._update_save_image_button(true)
        } else {
            this._set_info_bar_state();
            this._set_container_changed(false);
            this._update_save_image_button();
        }
    }

    /**
     * @param {boolean|undefined} changed
     * @private
     */
    _update_save_image_button(changed = undefined) {
        Feature.instance().call(
            Feature.feature.fancybox.saveImageButton,
            () => {
                this._controller._save_image_button.update(changed);
            }
        );
    }

    /**
     * @param data
     * @private
     */
    _fit_in_field_callback(data) {
        this._update_save_image_button(true);
        this._set_container_changed(true);
        this._update_info_bar_values(data);
    }

    /**
     * @param data
     * @private
     */
    _update_info_bar_values(data) {
        const context = this._context;
        const factor = data.selection.width / data.image.width;

        const dpi = factor * context.image.dpi / context.placeholder_to_image_factor;

        if (dpi < context.placeholder.dpi) {
            this._set_info_bar_warning('low-cropped-resolution-warning');
        } else {
            this._set_info_bar_warning();
        }

        this._set_info_bar_value('current', 'dpi', Math.round(dpi));

        const limited_image_width = this._limit_a_to_b(
            data.selection.position.left,
            data.selection.width,
            data.image.position.left,
            data.image.width
        );

        const limited_image_height = this._limit_a_to_b(
            data.image.position.top,
            data.image.height,
            data.selection.position.top,
            data.selection.height
        );

        let width = 0;
        let height = 0;
        if ((limited_image_height !== data.image.height || limited_image_width !== data.image.width)
            && limited_image_width !== 0
            && limited_image_height !== 0) {

            const width_factor = limited_image_width / data.image.width;

            width = context.image.width * width_factor;
            height = width / context.placeholder.ratio;

            this._set_info_bar_state('cropped', true);
        } else {
            width = context.image.width;
            height = context.image.height;

            this._set_info_bar_state();
        }

        this._set_info_bar_value('current', 'width', Math.round(width));
        this._set_info_bar_value('current', 'height', Math.round(height));
    }

    /**
     * @param data
     * @private
     */
    _update_editor_state(data) {
        this._update_save_image_button(true);
        this._update_info_bar_values(data);
    }

    /**
     * @param data
     * @private
     */
    _save_metadata(data) {
        const context = this._context;
        const image = data.image.position;
        image.width = data.image.width;
        image.height = data.image.height;
        image.right = image.left + image.width;
        image.bottom = image.top + image.height;

        const selection = data.selection.position;
        selection.width = data.selection.width;
        selection.height = data.selection.height;
        selection.right = selection.left + selection.width;
        selection.bottom = selection.top + selection.height;

        let abs_x1 = 0;
        let abs_y1 = 0;
        let abs_x2 = 0;
        let abs_y2 = 0;

        if (selection.left < image.left) {
            const shift_x1 = (image.left - selection.left) / selection.width;
            abs_x1 = context.shape.x1 + context.shape.width * shift_x1;

            selection.left = image.left;
        } else {
            abs_x1 = context.shape.x1;
        }

        if (selection.top < image.top) {
            const shift_y1 = (image.top - selection.top) / selection.height;
            abs_y1 = context.shape.y1 + context.shape.height * shift_y1;

            selection.top = image.top;
        } else {
            abs_y1 = context.shape.y1;
        }

        if (selection.right > image.right) {
            const shift_x2 = (image.right - selection.right) / selection.width;
            abs_x2 = context.shape.x2 + context.shape.width * shift_x2;
            selection.right = image.right;
        } else {
            abs_x2 = context.shape.x2;
        }

        if (selection.bottom > image.bottom) {
            const shift_y2 = (image.bottom - selection.bottom) / selection.height;
            abs_y2 = context.shape.y2 + context.shape.height * shift_y2;

            selection.bottom = image.bottom;
        } else {
            abs_y2 = context.shape.y2;
        }

        /**
         * @type MetaData
         */
        const metadata = new MetaData({
            'cr-x1': (selection.left - image.left) / image.width,
            'cr-x2': (selection.right - image.left) / image.width,
            'cr-y1': (selection.top - image.top) / image.height,
            'cr-y2': (selection.bottom - image.top) / image.height,
            'abs-x1': abs_x1,
            'abs-y1': abs_y1,
            'abs-x2': abs_x2,
            'abs-y2': abs_y2
        });

        context.$input.data('metadata', metadata);

        this._forward_save_metadata(metadata);

        this._hide_cropped_area_on_thumb();
        this._show_cropped_area_on_thumb(metadata);
    }

    /**
     * @private
     */
    _clear_metadata() {
        const context = this._context;
        context.$input.removeData('metadata');
        this._forward_save_metadata();

        this._hide_cropped_area_on_thumb();

        this._set_info_bar_value('current', 'width', context.image.width);
        this._set_info_bar_value('current', 'height', context.image.height);
        this._set_info_bar_value('current', 'dpi', context.image.dpi);
    }

    /**
     * @param {MetaData} metadata
     */
    _forward_save_metadata(metadata = undefined) {
        /** @type {ImageEditingContext} */
        const context = this._context;
        const $input = context.$input;

        if (!$input.length) {
            return;
        }

        if (metadata) {
            metadata['img-id'] = $input.val();
            MetaDataHelper.zp_set_metadata(context.placeholder, metadata);
        } else {
            MetaDataHelper.zp_clear_metadata(context.placeholder);
        }
    }

    /**
     * @param data
     * @private
     */
    _server_side_cropping(data) {
        const context = this._context;
        fancybox_change_zindex();

        $.ajax({
            url: this._context.url.image,
            type: 'POST',
            data: {
                'zetaprints-CropX1': data.selection.position.left / context.container.factor,
                'zetaprints-CropY1': data.selection.position.top / context.container.factor,
                'zetaprints-CropX2': (data.selection.position.left + data.selection.width) / context.container.factor,
                'zetaprints-CropY2': (data.selection.position.top + data.selection.height) / context.container.factor,
                'zetaprints-action': 'img-crop',
                'zetaprints-ImageID': context.image_id
            },
            error: (XMLHttpRequest, textStatus, errorThrown) => {
                alert(cant_crop_image_text + ': ' + textStatus);
                fancybox_change_zindex(1100);
            },
            success: (data, textStatus) => {
                this._clear_metadata();
                this._clear_editor();
                this._process_image_details(data);
            }
        });
    }


    /**
     * @private
     */
    _load_image() {
        const context = this._context;
        fancybox_change_zindex();
        fancybox_show_activity();

        this.reload_image(context.image_id);
    }

    /**
     * @param direction
     * @private
     */
    _server_side_rotation(direction) {
        const context = this._context;
        const _this = this;
        fancybox_change_zindex();

        this._clear_editor();
        this._clear_metadata();
        fancybox_show_activity();

        $.ajax({
            url: context.url.image,
            type: 'POST',
            data: {
                'zetaprints-action': 'img-rotate',
                'zetaprints-Rotation': direction,
                'zetaprints-ImageID': context.image_id
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(cant_rotate_image_text + ': ' + textStatus);
                fancybox_change_zindex(1100);
            },
            success: function (data, textStatus) {
                _this._process_image_details(data);
            }
        });
    }

    /**
     * @param xml
     * @private
     */
    _process_image_details(xml) {
        const context = this._context;
        const source = context
            .url
            .user_image_template
            .replace('image-guid.image-ext',
                get_value_by_regexp(xml, /Thumb="([^"]*?)"/));

        const preview_width = get_value_by_regexp(xml, /ThumbWidth="([^"]*?)"/);
        const preview_height = get_value_by_regexp(xml, /ThumbHeight="([^"]*?)"/);
        const width = get_value_by_regexp(xml, /ImageWidth="([^"]*?)"/);
        const height = get_value_by_regexp(xml, /ImageHeight="([^"]*?)"/);
        const undo_width = get_value_by_regexp(xml, /ImageWidthUndo="([^"]*?)"/);
        const undo_height = get_value_by_regexp(xml, /ImageHeightUndo="([^"]*?)"/);

        if (!(undo_width && undo_height)) {
            $('#undo-button')
                .parent()
                .addClass('hidden');
        } else {
            $('#undo-button')
                .parent()
                .removeClass('hidden')
                .end()
                .attr('title', undo_all_changes_text + '. ' + original_size_text + ': '
                    + undo_width + ' x ' + undo_height + ' ' + px_text);
        }

        if (!(preview_width && preview_height && width && height)) {
            alert(unknown_error_occured_text);

            return;
        }

        context.image = {
            width: width * 1,
            height: height * 1,
            ratio: (width * 1) / (height * 1),
            width_in: (width * 1) / context.placeholder.width * context.placeholder.width_in,
            thumb_width: preview_width,
            thumb_height: preview_height
        };

        context.image.dpi = Math.round(context.image.width / context.image.width_in);

        context.placeholder_to_image_factor = context.placeholder.width / context.image.width;

        this._set_info_bar_value('current', 'width', context.image.width);
        this._set_info_bar_value('current', 'height', context.image.height);
        this._set_info_bar_value('current', 'dpi', context.image.dpi);

        this._user_image
            .addClass('zetaprints-hidden')
            .attr('src', source);

        let tmp1 = $('input[value="' + context.image_id + '"]').parent().find('img');
        if (tmp1.length === 0) {
            tmp1 = $('#img' + context.image_id);
        }
        if (tmp1.length === 0) {
            // tmp1 = $('input[value="' + _context.image_id + '"]').parent().find('img');
            return;
        }
        if (source.match(/\.jpg/m)) {
            tmp1.attr('src', source.replace(/\.(jpg|gif|png|jpeg|bmp)/i, "_0x100.jpg"));
        } else {
            tmp1.attr('src', source);
        }
    }

    /**
     * @private
     */
    _delete_image() {
        const _this = this;
        const context = this._context;
        if (confirm(delete_this_image_text)) {
            $.ajax({
                url: context.url.image,
                type: 'POST',
                data: {
                    'zetaprints-action': 'img-delete',
                    'zetaprints-ImageID': context.image_id
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(cant_delete_text + ': ' + textStatus);
                },
                success: function (data, textStatus) {
                    _this._clear_editor();
                    _this._clear_metadata();

                    $('input[value="' + context.image_id + '"]').parent().remove();
                    $('#' + context.image_id).remove();

                    $.fancybox.close();
                }
            });
        }
    }

    /**
     * @param warning
     * @private
     */
    _set_info_bar_warning(warning) {
        if (warning) {
            this.info_bar.addClass('warning ' + warning);
        } else {
            this.info_bar.removeClass('warning low-resolution-warning ' +
                'low-cropped-resolution-warning ' +
                'low-full-resolution-warning small-image-warning');
        }
    }

    /**
     * @param state
     * @param on
     * @private
     */
    _set_info_bar_state(state, on) {
        if (!state) {
            this.info_bar.removeClass('cropped-state');
        }

        if (on) {
            this.info_bar.addClass(state + '-state');
        } else {
            this.info_bar.removeClass(state + '-state');
        }
    }

    /**
     * @param width_a
     * @param height_a
     * @param width_b
     * @param height_b
     * @return {number}
     * @private
     */
    _get_factor_a_to_b(width_a, height_a, width_b, height_b) {
        const width_factor = width_a / width_b;
        const height_factor = height_a / height_b;

        return width_factor < height_factor ? width_factor : height_factor;
    }

    /**
     * @param image
     * @param placeholder
     * @return {{width: number, height: number}}
     * @private
     */
    _fit_image_into_placeholder(image, placeholder) {
        const factor = this._get_factor_a_to_b(
            placeholder.width,
            placeholder.height,
            image.width,
            image.height
        );

        return {
            width: image.width * factor,
            height: image.height * factor
        };
    }

    /**
     * @param image
     * @param placeholder
     * @return {{width: number, height: number}}
     * @private
     */
    _fill_placeholder_with_image(image, placeholder) {
        const factor = this._get_factor_a_to_b(
            image.width,
            image.height,
            placeholder.width,
            placeholder.height
        );

        return {
            width: placeholder.width * factor,
            height: placeholder.height * factor
        };
    }

    /**
     * @param image
     * @param placeholder
     * @return {{width, height: number}}
     * @private
     */
    _fit_image_into_placeholder_by_width(image, placeholder) {
        const factor = placeholder.width / image.width;

        return {
            width: placeholder.width,
            height: image.height * factor
        };
    }

    /**
     * @param image
     * @param placeholder
     * @return {{width: number, height}}
     * @private
     */
    _fit_image_into_placeholder_by_height(image, placeholder) {
        const factor = placeholder.height / image.height;

        return {
            width: image.width * factor, height: placeholder.height
        };
    }

    /**
     * @param image
     * @param container
     * @return {ImageDimensions}
     * @private
     */
    _fit_into_container_for_crop(image, container) {
        container.factor = this._get_factor_a_to_b(
            container.width,
            container.height,
            image.thumb_width,
            image.thumb_height
        );

        const factor = this._get_factor_a_to_b(
            container.width,
            container.height,
            image.width,
            image.height
        );

        const width = image.width * factor;
        const height = width / image.ratio;

        //Centring selection frame and image to centre of the container
        const left = (container.width / 2 - width / 2);
        const top = (container.height / 2 - height / 2);

        return new ImageDimensions({
            selection: {
                position: {
                    top: 0,
                    left: 0
                },
                width: width,
                height: height
            },

            image: {
                position: {
                    top: 0,
                    left: 0
                },
                width: width,
                height: height
            },

            container: {
                top: top,
                left: left,
                width: width,
                height: height
            }
        });
    }

    /**
     * @private
     */
    _clear_editor() {
        if (this._container.hasClass('crop-mode')
            || this._container.hasClass('fit-to-field-mode')) {
            this._user_image.power_crop('destroy');
        }

        if (this._container.hasClass('editor-mode') && ImageEditor._image_editor) {
            ImageEditor._image_editor.close();
        }

        this._set_container_changed(false);

        this._set_info_bar_warning();
        this._set_info_bar_state();

        this._update_save_image_button();
    }

    /**
     * @private
     */
    _crop_button_click_handler() {
        const context = this._context;
        this._clear_editor();

        this._container
            .removeClass('fit-to-field-mode editor-mode')
            .addClass('crop-mode');

        //if (window.fancybox_update_save_image_button)
        //    fancybox_update_save_image_button($);

        const data = this._fit_into_container_for_crop(context.image, context.container);

        this._show_crop(data, true);
    }

    /**
     * @param ignore_metadata
     * @private
     */
    _fit_to_field_button_click_handler(ignore_metadata) {
        const context = this._context;
        this._clear_editor();

        this._container
            .removeClass('crop-mode editor-mode')
            .addClass('fit-to-field-mode');

        let metadata = context.$input.data('metadata');

        let data = null;
        if (!metadata || ignore_metadata) {
            data = this._fit_into_container(
                context.image,
                context.placeholder,
                context.container
            );
        } else {
            data = this._fit_into_container_using_metadata(
                context.image,
                context.placeholder,
                context.shape,
                context.container,
                metadata
            );

            this._set_container_changed(true)
        }

        this._show_crop(data);

        this._update_save_image_button(!metadata || ignore_metadata);
    }

    /**
     * @private
     */
    _image_editor_button_handler() {
        if (this._container.hasClass('editor-mode')) {
            return;
        }

        this._clear_editor();
        this._clear_metadata();

        this._container
            .removeClass('crop-mode fit-to-field-mode')
            .addClass('editor-mode');

        this._show_image_editor();
    }

    /**
     * @private
     */
    _show_image_editor() {
        Logger.warn('_show_image_editor', arguments);
        const context = this._context;
        const image_editor = this;
        const $edit_container = $('#zetaprints-image-edit-container');
        const fancybox_center_function = $.fancybox.center;

        $.fancybox.center = function () {
            fancybox_center_function();
            const offset = $edit_container.offset();

            ImageEditor._image_editor_wrapper.css({
                top: offset.top,
                left: offset.left
            });
        };

        if (!ImageEditor._image_editor) {
            fancybox_change_zindex();
            fancybox_show_activity();

            ImageEditor._image_editor_wrapper = $('<div id="zp-image-edit-editor-wrapper" />')
                .appendTo('body');

            ImageEditor._image_editor_wrapper
                .css({
                    top: $edit_container.offset().top,
                    left: $edit_container.offset().left,
                    width: $edit_container.outerWidth(),
                    height: $edit_container.outerHeight()
                });


            ImageEditor._image_editor = new Aviary.Feather({
                image: 'zetaprints-image-edit-user-image',
                apiVersion: 2,
                appendTo: 'zp-image-edit-editor-wrapper',
                language: $('html').attr('lang'),
                url: this._user_image.attr('src'),
                minimumStyling: true,
                noCloseButton: true,
                jpgQuality: 100,
                maxSize: 600,
                onSave: (image_id, url) => {
                    context.upload_image_by_url(url);

                    return false;
                },
                onLoad: () => {
                    ImageEditor._image_editor.launch();

                    fancybox_hide_activity();
                    fancybox_change_zindex(1100);
                },
                onReady: () => {
                    this._set_container_changed(true)

                    this._update_save_image_button(true)
                },
                onClose: () => {
                    ImageEditor._image_editor_wrapper.css('display', 'none');
                }
            });
        } else {
            const offset = $edit_container.offset();

            ImageEditor._image_editor_wrapper
                .css({
                    display: 'block',
                    top: offset.top,
                    left: offset.left
                });

            ImageEditor._image_editor.launch({
                image: 'zetaprints-image-edit-user-image',
                url: this._user_image.attr('src')
            });
        }
    }

    /**
     * @param {boolean} changed
     * @private
     */
    _set_container_changed(changed) {
        if (changed) {
            this._container.addClass('changed');
        } else {
            this._container.removeClass('changed');
        }
    }

    /**
     * @param data
     * @private
     */
    _show_cropped_area_on_thumb(data) {
        const context = this._context;
        const left = data['cr-x1'] * 100;
        const top = data['cr-y1'] * 100;
        const width = (data['cr-x2'] - data['cr-x1']) * 100;
        const height = (data['cr-y2'] - data['cr-y1']) * 100;

        const $img = context
            .$selected_thumbnail
            .clone();

        const position = $img
            .wrap('<div class="top-image-wrapper" />')
            .parent()
            .css({
                left: left + '%',
                top: top + '%',
                width: width + '%',
                height: height + '%'
            })
            .wrap('<div class="thumb-shadow" />')
            .parent()
            .insertAfter(context.$selected_thumbnail)
            .end()
            .end()
            .position();

        $img.css({
            left: -position.left,
            top: -position.top
        });
    }

    /**
     * @private
     */
    _hide_cropped_area_on_thumb() {
        const context = this._context;
        context
            .$selected_thumbnail
            .parent()
            .children('.thumb-shadow')
            .remove();
    }


    /**
     * Perform image restore
     */
    _restore_image() {
        const context = this._context;
        fancybox_change_zindex();
        fancybox_show_activity();

        this._clear_editor();
        this._clear_metadata();

        $.ajax({
            url: context.url.image,
            type: 'POST',
            data: {
                'zetaprints-action': 'img-restore',
                'zetaprints-ImageID': context.image_id
            },
            error: (XMLHttpRequest, textStatus, errorThrown) => {
                alert(cant_restore_image_text + ': ' + textStatus);
                fancybox_change_zindex(1100);
            },
            success: (data, textStatus) => {
                this._process_image_details(data);
            }
        });
    }


    /**
     * @param {number} start_a
     * @param {number} length_a
     * @param {number} start_b
     * @param {number} length_b
     * @return {number}
     */
    _limit_a_to_b(start_a, length_a, start_b, length_b) {
        if (parseInt(length_a, 10) === 0) {
            return 0;
        }

        let end_a = start_a + length_a;
        const end_b = start_b + length_b;

        if (start_a >= end_b || end_a <= start_b) {
            return 0;
        }

        if (start_a < start_b) {
            start_a = start_b;
        }

        if (end_a > end_b) {
            end_a = end_b;
        }

        return end_a - start_a;
    }


    /**
     * @param image
     * @param placeholder
     * @param container
     * @return {ImageDimensions}
     */
    _fit_into_container(image, placeholder, container) {
        /**
         * @type {ImageDimensions}
         */
        const data = new ImageDimensions({
            selection: {
                position: {
                    top: 0,
                    left: 0
                }
            },

            image: {
                position: {
                    top: 0,
                    left: 0
                }
            }
        });

        //Use container's factor to convert original dimension to
        //container's one (multiply by the factor) or vice versa (divide by the factor)
        if (placeholder.width >= image.width
            && placeholder.height >= image.height) {
            container.factor = this._get_factor_a_to_b(
                container.width,
                container.height,
                placeholder.width,
                placeholder.height
            );
        } else {
            container.factor = this._get_factor_a_to_b(
                container.width,
                container.height,
                image.width,
                image.height
            );
        }

        data.selection.width = Math.round(placeholder.width * container.factor);
        data.selection.height = data.selection.width / placeholder.ratio;

        data.image.width = Math.round(image.width * container.factor);
        data.image.height = data.image.width / image.ratio;

        //Centring selection frame and image to centre of the container
        const width_centre = container.width / 2;
        const height_centre = container.height / 2;

        data.selection.position.left = (width_centre - data.selection.width / 2);
        data.selection.position.top = (height_centre - data.selection.height / 2);

        data.image.position.left = (width_centre - data.image.width / 2);
        data.image.position.top = (height_centre - data.image.height / 2);

        return data;
    }

    /**
     * @param image
     * @param placeholder
     * @param shape
     * @param container
     * @param metadata
     * @return {ImageDimensions}
     */
    _fit_into_container_using_metadata(image, placeholder, shape,
                                       container, metadata) {
        const data = new ImageDimensions({
            selection: {
                position: {
                    top: 0,
                    left: 0
                },
                width: placeholder.width,
                height: placeholder.height
            },

            image: {
                position: {
                    top: 0,
                    left: 0
                },
                width: image.width,
                height: image.height
            }
        });

        if (metadata['abs-x1'] <= shape.x1 && metadata['abs-x2'] >= shape.x2
            && metadata['abs-y1'] <= shape.y1 && metadata['abs-y2'] >= shape.y2) {
            data.selection.position.left = metadata['cr-x1'] * image.width;
            data.selection.position.top = metadata['cr-y1'] * image.height;

            data.selection.width = (metadata['cr-x2'] - metadata['cr-x1']) * image.width;
            data.selection.height = data.selection.width / placeholder.ratio;
        } else {
            data.image.position.left = placeholder.width
                * (metadata['abs-x1'] - shape.x1) / shape.width;
            data.image.position.top = placeholder.height
                * (metadata['abs-y1'] - shape.y1) / shape.height;

            data.image.width = placeholder.width
                * (metadata['abs-x2'] - metadata['abs-x1']) / shape.width
                * (1 + metadata['cr-x1'] / (1 - metadata['cr-x1'])
                + (1 - metadata['cr-x2']) / metadata['cr-x2']);
            data.image.height = data.image.width / image.ratio;

            data.selection.position.left = data.image.width * metadata['cr-x1'];
            data.selection.position.top = data.image.height * metadata['cr-y1'];
        }

        const left = data.selection.position.left < data.image.position.left
            ? data.selection.position.left : data.image.position.left;

        const top = data.selection.position.top < data.image.position.top
            ? data.selection.position.top : data.image.position.top;

        data.selection.position.right = data.selection.position.left
            + data.selection.width;

        data.image.position.right = data.image.position.left + data.image.width;

        const right = data.selection.position.right > data.image.position.right
            ? data.selection.position.right : data.image.position.right;

        data.selection.position.bottom = data.selection.position.top
            + data.selection.height;

        data.image.position.bottom = data.image.position.top + data.image.height;

        const bottom = data.selection.position.bottom > data.image.position.bottom
            ? data.selection.position.bottom
            : data.image.position.bottom;

        const total_width = right - left;
        const total_height = bottom - top;

        //Use container's factor to convert original dimension to
        //container's one (multiply by the factor)
        //or vice versa (divide by the factor)
        container.factor = this._get_factor_a_to_b(container.width,
            container.height,
            total_width,
            total_height);

        data.selection.width *= container.factor;
        data.selection.height *= container.factor;
        data.selection.position.left *= container.factor;
        data.selection.position.top *= container.factor;

        data.image.width *= container.factor;
        data.image.height = data.image.width / image.ratio;
        data.image.position.left *= container.factor;
        data.image.position.top *= container.factor;

        const shift_x = (container.width - total_width * container.factor) / 2;
        const shift_y = (container.height - total_height * container.factor) / 2;

        data.selection.position.left += shift_x;
        data.selection.position.top += shift_y;

        data.image.position.left += shift_x;
        data.image.position.top += shift_y;

        return data;
    }

    /**
     * @param data
     * @param simple_crop
     * @private
     */
    _show_crop(data, simple_crop) {
        if (!$.fn.power_crop) {
            return;
        }

        const crop_callback = simple_crop
            ? (data) => {
                return this._cropping_callback(data)
            }
            : (data) => {
                return this._fit_in_field_callback(data)
            };

        /**
         * @type {object}
         */
        const user_image = this._user_image;

        user_image.power_crop({
            simple: !!simple_crop,
            data: data,
            crop: crop_callback
        });

        if (!simple_crop) {
            data = user_image.power_crop('state');
            this._update_editor_state(data);
        }
    }
}

/**
 * @type {*}
 * @private
 */
ImageEditor._image_editor = null;

/**
 * @type {jQuery|HTMLElement}
 * @private
 */
ImageEditor._image_editor_wrapper = null;

ImageEditor.Events = {
    SAVE: 'ImageEditor.Events.SAVE',
    CLOSE: 'ImageEditor.Events.CLOSE',
    IMAGE_LOADED: 'ImageEditor.Events.IMAGE_LOADED',
};
