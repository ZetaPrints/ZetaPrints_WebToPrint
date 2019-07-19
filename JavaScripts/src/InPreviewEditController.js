import $ from './jQueryLoader';
import ShapeRepository from './model/ShapeRepository';
import UiHelper from './helper/UiHelper';
import Logger from './Logger';
import Feature from './Feature';
import TextFieldEditorHelper from './helper/TextFieldEditorHelper';

export default class InPreviewEditController {
    /**
     * @param {PersonalizationForm} personalization_form_instance
     */
    constructor(personalization_form_instance) {
        if (!personalization_form_instance) {
            throw new ReferenceError('Missing argument "personalization_form_instance"');
        }
        this.personalization_form_instance = personalization_form_instance;
        this.shape_repository = new ShapeRepository(personalization_form_instance);
        this.add_in_preview_edit_handlers = this.add_in_preview_edit_handlers.bind(this);
    }

    /**
     * Prepares the shapes inside the given template details
     *
     * @param {TemplateDetail} template_details
     * @api
     */
    static precalculate_shapes(template_details) {
        const pages = template_details.pages;
        for (let page in pages) {
            if (pages.hasOwnProperty(page)) {
                const shapes = pages[page].shapes;
                for (let name in shapes) {
                    if (shapes.hasOwnProperty(name)) {
                        const shape = shapes[name];

                        shape.left = shape.x1 * 100;
                        shape.top = shape.y1 * 100;
                        shape.visual_width = (shape.x2 - shape.x1) * 100;
                        shape.visual_height = (shape.y2 - shape.y1) * 100;
                    }
                }
            }
        }
    }

    /**
     * @param {Shape} shape
     * @api
     */
    mark_shape_as_edited(shape) {
        $('div.zetaprints-field-shape[title="' + shape.name + '"]')
            .addClass('edited');

        shape['has-value'] = true;
    }

    /**
     * @param {Shape} shape
     * @api
     */
    unmark_shape_as_edited(shape) {
        $('div.zetaprints-field-shape[title="' + shape.name + '"]').removeClass('edited');

        shape['has-value'] = false;
    }

    /**
     * @param {Object.<string, Shape>} shapes Dictionary of Shapes
     * @param {jQuery|HTMLElement} $container
     * @param {function} shape_handler
     * @api
     */
    place_all_shapes_for_page(shapes, $container, shape_handler) {
        if (typeof shape_handler !== 'function') {
            throw new TypeError('Argument shape_handler must be of type "function"');
        }

        if (!shapes) {
            return;
        }

        for (let name in shapes) {
            if (shapes.hasOwnProperty(name) && !shapes[name].hidden) {
                this._place_shape(shapes[name], $container, shape_handler);
            }
        }
    }

    /**
     * @param {jQuery|HTMLElement} container
     */
    remove_all_shapes(container) {
        $('div.zetaprints-field-shape', container).remove();
    }

    /**
     * @param {Shape} shape
     * @param {jQuery|HTMLElement} $container
     * @api
     */
    highlight_shape(shape, $container) {
        $container
            .find('.zetaprints-field-shape[title="' + shape.name + '"]')
            .addClass('highlighted');
    }

    /**
     * @param {Shape} shape
     * @param {jQuery|HTMLElement} $container
     */
    dehighlight_shape(shape, $container) {
        $container
            .find('.zetaprints-field-shape[title="' + shape.name + '"]')
            .removeClass('highlighted');
    }

    /**
     * @param {string} names
     */
    highlight_field_by_name(names) {
        const names_collection = names.split('; ');

        for (let i = 0; i < names_collection.length; i++) {
            const name = names_collection[i];

            let $field = $('*[name="zetaprints-_' + name + '"], ' +
                'div.' + UiHelper.instance().select_image_elements_class_name + '[title="' + name + '"] div.head');

            const $parent = $field.parents('.zetaprints-text-field-wrapper');

            if ($parent.length) {
                $field = $parent;
            }

            $field.addClass('highlighted');
        }
    }

    /**
     */
    dehighlight_field_by_name() {
        $([
            UiHelper.instance().input_fields_selector + ' .highlighted',
            '.zetaprints-page-stock-images .highlighted'
        ].join(', '))
            .removeClass('highlighted');
    }

    /**
     * Pop a field down and up
     */
    toggle_field_by_name() {
        this.popup_field_by_name(this.popdown_field_by_name());
    }

    /**
     * @param {string} name
     * @param {object|undefined} position
     * @param {string|string[]} selected_shapes
     * @api
     */
    popup_field_by_name(name, position = undefined, selected_shapes = []) {
        const zp = this.personalization_form_instance.data;
        const $tabs = $('<div class="fieldbox-tabs fieldbox-wrapper">' +
            '<a class="fieldbox-button" href="#" />' +
            '<ul class="fieldbox-head"/>' +
            '</div>');

        const $ul = $tabs.children('ul');

        const $shape = UiHelper.instance().fancybox_content
            .find('.zetaprints-field-shape[title="' + name + '"]');

        const page = zp.template_details.pages[zp.current_page];
        let full_name;
        let width = 'auto';
        let min_width = $shape.outerWidth();

        if (min_width <= 150) {
            min_width = 150;
        }

        let selected_buttons = {};

        // selected_shapes can be a string
        // wrap it into array
        selected_shapes = [].concat(selected_shapes);

        const selected_shapes_count = selected_shapes.length;
        if (0 === selected_shapes_count) {
            Logger.debug('[InPreviewEditController] No shapes selected');

            return;
        }
        for (let i = 0; i < selected_shapes_count; i++) {
            const shape_name = selected_shapes[i];
            const tab_title = shape_name.length <= 5
                ? shape_name :
                shape_name.substring(0, 5) + '&hellip;';

            const $li = this._popup_field_by_name_create_li(shape_name, i, tab_title).appendTo($ul);

            let $field = null;
            if (page.fields && page.fields[shape_name]) {
                const __ret = this._popup_field_by_name_for_text_field(zp, shape_name, name, page, $li);
                $field = __ret.$field;
                full_name = __ret.full_name;
            } else if (page.images && page.images[shape_name]) {
                const __ret = this._popup_field_by_name_for_images(zp, shape_name, selected_buttons, name, $li);
                $field = __ret.$field;
                full_name = __ret.full_name;
                selected_buttons = __ret.selected_buttons;

                if (min_width < 400) {
                    width = 400;
                } else {
                    width = min_width;
                }
            } else {
                Logger.error(`[InPreviewEditController] Shape named ${shape_name} is neither in the page's fields nor in it's images `);

                continue;
            }

            $field
                .data('in-preview-edit', {
                    'style': $field.attr('style'),
                    'parent': $field.parent()
                })
                .detach()
                .removeAttr('style')
                .wrap('<div id="fieldbox-tab-' + i + '" class="fieldbox-field" />')
                .parent()
                .appendTo($tabs);
        }

        $ul.append('<div class="last" />');
        $shape.append('<input type="hidden" name="field" value="' + full_name + '" />');

        //Oh God, it's a sad story :-(
        if (width === 'auto' && $.browser && $.browser.msie && $.browser.version === '7.0') {
            width = min_width;
        }

        const $box = this._box = this._popup_field_by_name_build_box(name, $tabs, width, min_width)
            .appendTo('body');

        this._popup_field_by_name_apply_tabs_ie7_workaround(selected_buttons, $ul, $tabs);
        this._popup_field_by_name_register_box_click($box);

        this._popup_field_by_name_prepare_draggable_box($box, $.extend(true, {}, position), $shape);

        this._popup_field_by_name_prepare_tabs($tabs);
    }

    /**
     * @param {string} full_name
     * @return {string}
     * @api
     */
    popdown_field_by_name(full_name = '') {
        const personalization_form_instance = this.personalization_form_instance;
        const field = full_name
            ? $('*[value="' + full_name + '"]', UiHelper.instance().fancybox_content)
            : $(':input', UiHelper.instance().fancybox_content);

        if (!field.length) {
            Logger.debug('[InPreviewEditController] Early return in popdown_field_by_name()');

            return '';
        }

        if (!full_name) {
            full_name = $(field).val();
        }

        const name = full_name.substring(12);
        let $box = $('.fieldbox[title="' + name + '"]');
        if ($box.length === 0 && this._box) {
            $box = this._box;
        }

        $box.find('.fieldbox-field').children().each(function () {
            const $element = $(this);
            const field = $element.hasClass('zetaprints-text-field-wrapper')
                ? $element.find('.zetaprints-field')
                : $element;

            if ($.fn.colorpicker && $element.hasClass('selector-content')) {
                $element
                    .find('> .tabs-wrapper > .tab')
                    .filter('.colour-picker, .color-picker')
                    .each(function () {
                        personalization_form_instance.hide_colorpicker($(this));
                    });
            }

            const data = $element.data('in-preview-edit');

            //Remember checked radio button for IE7 workaround
            const $input = $element.find(':checked');

            //!!! Following code checks back initially selected radio button
            //!!! Don't know why it happens
            $element
                .detach()
                .appendTo(data.parent);

            if (typeof data.style === 'undefined') {
                $element.removeAttr('style');
            } else {
                $element.attr('style', data.style);
            }

            //!!! Stupid work around for stupid IE7
            $input.change().prop('checked', true);

            Feature.instance().call(Feature.feature.textFieldEditor, () => {
                TextFieldEditorHelper.move(field, data.parent.parents('dl').children('dt'));
            });

            const select_image_elements_class_name = UiHelper.instance().select_image_elements_class_name;
            if (data.parent.hasClass(select_image_elements_class_name)) {
                personalization_form_instance.scroll_strip($($element
                    .find('ul.tab-buttons li.ui-tabs-selected a')
                    .attr('href')));
            }
        });

        $box.remove();

        $(field).remove();

        $('#current-shape').attr('id', '');

        return name;
    }

    /**
     * @param {Event} event
     * @api
     */
    shape_handler(event) {
        event.preventDefault();
        const data = this.personalization_form_instance.data;
        const shape = $(event.target).parent();

        if ($.fn.draggable && $.fn.tabs && event.type === 'click') {
            let shapes;
            if (event.pageX && event.pageY) {
                const c = this._glob_to_rel_coords(event.pageX, event.pageY, event.data.container);
                shapes = this._get_shapes_by_coords(c);

                //Remember selected shapes for further use
                shape.data('selected-shapes', shapes);
            } else {
                shapes = shape.data('selected-shapes');
                shape.data('selected-shapes', undefined);
            }

            for (let i = 0; i < shapes.length; i++) {
                event.data.container
                    .find('.zetaprints-field-shape.bottom[title="' + shapes[i].name + '"]')
                    .addClass('zetaprints-shape-selected');
            }

            $('#current-shape').attr('id', '');
            $(shape).attr('id', 'current-shape');

            this.personalization_form_instance.preview_controller.get_preview_for_page_number(data.current_page).open_lightbox();
            // $('#preview-image-page-' + zp.current_page).click();
        } else if (event.type === 'mouseover') {
            $('#zetaprints-preview-image-container > div.zetaprints-field-shape.bottom').removeClass('highlighted');
            $(shape).addClass('highlighted');

            this.highlight_field_by_name($(shape).attr('title'));
        } else {
            $(shape).removeClass('highlighted');

            this.dehighlight_field_by_name($(shape).attr('title'));
        }
    }

    /**
     * @param {Event} event
     * @return {boolean}
     */
    fancy_shape_handler(event) {
        const data = this.personalization_form_instance.data;
        const shape = $(event.target).parent();

        if ($.fn.draggable && $.fn.tabs && event.type === 'click') {
            if ($(shape).children().length > 1) {
                return false;
            }

            UiHelper.instance().fancybox_content.find('div.zetaprints-field-shape.highlighted').removeClass(
                'highlighted');
            shape.addClass('highlighted');

            this.popdown_field_by_name();

            const name = shape.attr('title');
            const _shape = data.template_details.pages[data.current_page].shapes[name];

            let fields = [];
            if (!_shape._selected_shape_names) {
                const c = this._glob_to_rel_coords(
                    event.pageX,
                    event.pageY,
                    event
                        .data
                        .container
                        .children(UiHelper.instance().fancybox_image_selector)
                );

                const shapes = this._get_shapes_by_coords(c).reverse();

                for (let i = 0; i < shapes.length; i++) {
                    fields = fields.concat(shapes[i].name.split('; '));
                }

                _shape._fields = fields;
            }

            this.popup_field_by_name(name, {top: event.pageY, left: event.pageX}, fields);

            return false;
        }

        if (event.type === 'mouseover') {
            const highlighted = UiHelper.instance().fancybox_content.children('div.zetaprints-field-shape.highlighted');
            if ($(highlighted).children().length <= 1) {
                $(highlighted).removeClass('highlighted');
            }

            $(shape).addClass('highlighted');
        } else if ($(shape).children().length <= 1) {
            $(shape).removeClass('highlighted');
        }
    }

    /**
     * Add the in-preview editing
     */
    add_in_preview_edit_handlers() {
        const _this = this;
        const zp = this.personalization_form_instance.data;
        this._register_text_field_handler();

        this._register_image_selector_handler(zp, _this);

        $(document).on('click', UiHelper.instance().fancybox_image_selector, () => {
            $('div.zetaprints-field-shape.bottom', UiHelper.instance().fancybox_content).removeClass('highlighted');
            this.popdown_field_by_name();
        });

        this._patch_fancybox_method();
    }

    /**
     * @param {string} name
     * @param {Object.<string, Shape>} shapes Dictionary of Shapes
     * @return {*}
     * @api
     */
    get_shape_by_name(name, shapes) {
        for (let _name in shapes) {
            if (shapes.hasOwnProperty(_name)) {
                const names = _name.split('; ');

                for (let i = 0; i < names.length; i++) {
                    if (names[i] === name) {
                        return shapes[_name];
                    }
                }
            }
        }

        return null;
    }

    /**
     * @param {Shape} shape
     * @param {jQuery|HTMLElement} $container
     * @param {function} shape_handler
     * @private
     */
    _place_shape(shape, $container, shape_handler) {
        if (typeof shape_handler !== 'function') {
            throw new TypeError('Argument shape_handler must be of type "function"');
        }
        const edited_class = shape['has-value'] ? ' edited' : '';

        $('<div class="zetaprints-field-shape bottom hide' + edited_class + '" ' +
            'title="' + shape.name + '">' +
            '<div class="zetaprints-field-shape top" />' +
            '</div>')
            .css({
                top: shape.top + '%',
                left: shape.left + '%',
                width: shape.visual_width + '%',
                height: shape.visual_height + '%'
            })
            .appendTo($container)
            .children()
            .bind('click mouseover mouseout', {container: $container}, shape_handler);
    }

    /**
     * @param {string} name
     * @param {jQuery} $tabs
     * @param {number|string} width
     * @param {number} min_width
     * @private
     */
    _popup_field_by_name_build_box(name, $tabs, width, min_width) {
        return $('<div class="fieldbox" title="' + name + '" />')
            .append($tabs)
            .css({
                width: width,
                minWidth: min_width
            });
    }

    /**
     * @param {object} selected_buttons
     * @param {jQuery} $ul
     * @param {jQuery} $tabs
     * @private
     */
    _popup_field_by_name_apply_tabs_ie7_workaround(selected_buttons, $ul, $tabs) {
        //!!! Stupid work around for stupid IE7
        for (let name in selected_buttons) {
            const id = $ul
                .children('[title="' + name + '"]')
                .find(' > .fieldbox-tab-inner > a')
                .attr('href')
                //IE7 returns full URL
                .split('#');

            $tabs
                .find(' > #' + id[1] + ' > .selector-content')
                .find('input[value="' + selected_buttons[name] + '"]')
                .change()
                .prop('checked', true);
        }
    }

    /**
     * @param {string} shape_name
     * @param {number} tab_number
     * @param {string} tab_title
     * @return {*|jQuery|HTMLElement}
     * @private
     */
    _popup_field_by_name_create_li(shape_name, tab_number, tab_title) {
        return $('<li title="' + shape_name + '">' +
            '<div class="fieldbox-tab-inner">' +
            '<a href="#fieldbox-tab-' + tab_number + '">' +
            '<div class="fieldbox-tab-icon" />' +
            tab_title +
            '</a>' +
            '<div class="zp-clear" />' +
            '</div>' +
            '</li>');
    }

    /**
     * @param {jQuery} $box
     * @private
     */
    _popup_field_by_name_register_box_click($box) {
        $box.find('.fieldbox-button').on('click', () => {
            this.popdown_field_by_name();

            return false;
        });
    }

    /**
     * @param {jQuery} $box
     * @param {object|undefined} position
     * @param {jQuery} $shape
     * @private
     */
    _popup_field_by_name_prepare_draggable_box($box, position, $shape) {
        const height = $box.outerHeight();
        const width = $box.outerWidth();

        if (!position) {
            position = $shape.offset();
            position.top += $shape.outerHeight() - 10;
            position.left += 10;
        }

        const window_height = $(window).height() + $(window).scrollTop();
        if ((position.top + height) > window_height) {
            position.top -= position.top + height - window_height;
        }

        const window_width = $(window).width();
        if ((position.left + width) > window_width) {
            position.left -= position.left + width - window_width;
        }

        $box.css({
            visibility: 'visible',
            left: position.left,
            top: position.top
        }).draggable({handle: '.fieldbox-head'});
    }

    /**
     * @param {jQuery} $tabs
     * @private
     */
    _popup_field_by_name_prepare_tabs($tabs) {
        const personalization_form_instance = this.personalization_form_instance;
        $tabs.tabs({
            activate: function (event, ui) {
                const $panel = $(ui.newPanel);

                //Generate click event on panel to hide opened colorpicker
                //!!!TODO: rework it after upgrading to jQuery UI 1.9+
                $panel.click();

                const $panel_real = $panel.find(
                    $panel.find('ul.tab-buttons li.ui-tabs-selected a').attr('href')
                );

                if (!$panel_real.length) {
                    return;
                }

                personalization_form_instance.show_user_images($panel_real);
                personalization_form_instance.scroll_strip($panel_real);
                personalization_form_instance.show_colorpicker($panel_real);
            },
        });
    }

    /**
     *
     * @param {DataInterface} zp
     * @param {string} shape_name
     * @param {object} selected_buttons
     * @param {string} name
     * @param {jQuery|HTMLLIElement} $li
     * @return {{$parent, $field, full_name: string}}
     * @private
     */
    _popup_field_by_name_for_images(zp, shape_name, selected_buttons, name, $li) {
        const $parent = $('#stock-images-page-' + zp.current_page)
            .find('*[title="' + shape_name + '"]')
            .removeClass('minimized');

        const $field = $parent.children('.selector-content');

        // Remember checked radio button for IE7 workaround
        selected_buttons[shape_name] = $field
            .find(':checked')
            .val();

        const full_name = 'zetaprints-#' + name;

        $li.addClass('image-field');

        return {$field, full_name, selected_buttons};
    }

    /**
     * @param {DataInterface} zp
     * @param {string} shape_name
     * @param {string} name
     * @param {Page} page
     * @param {jQuery|HTMLLIElement} $li
     * @return {{$field, $_field, $parent, full_name: string}}
     * @private
     */
    _popup_field_by_name_for_text_field(zp, shape_name, name, page, $li) {
        let $field = $('#input-fields-page-' + zp.current_page)
            .find('*[name="zetaprints-_' + shape_name + '"]')
            .not('[type="hidden"]');

        const $_field = $field;
        const $parent = $field.parents('.zetaprints-text-field-wrapper');

        if ($parent.length) {
            $field = $parent;
        }

        const full_name = 'zetaprints-_' + name;

        Feature.instance().call(Feature.feature.textFieldEditor, () => {
            if (page.fields[shape_name]['colour-picker'] === 'RGB') {
                TextFieldEditorHelper.move($_field, $li.find('.fieldbox-tab-inner'));
            }
        });

        $li.addClass('text-field');

        return {$field, full_name};
    }

    /**
     * @return {jQuery|HTMLElement}
     * @private
     */
    _get_current_shapes_container() {
        const container = UiHelper.instance().fancybox_content;
        if (container.length > 0 && container.is(':visible')) {
            return container;
        }

        return $('div.product-img-box');
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {jQuery|HTMLElement} $container
     * @return {{x: number, y: number}}
     * @private
     */
    _glob_to_rel_coords(x, y, $container) {
        const container_offset = $container.offset();

        x = x - container_offset.left;
        y = y - container_offset.top;

        const width = $container.width();
        const height = $container.height();

        return {x: x / width, y: y / height};
    }

    /**
     * @param c
     * @return {Array}
     * @private
     */
    _get_shapes_by_coords(c) {
        const zp = this.personalization_form_instance.data;
        const page = zp.template_details.pages[zp.current_page];

        const shapes = [];

        const page_shapes = page.shapes;
        for (let name in page_shapes) {
            if (page_shapes.hasOwnProperty(name)) {
                const shape = page_shapes[name];

                if (shape.x1 <= c.x && c.x <= shape.x2
                    && shape.y1 <= c.y && c.y <= shape.y2) {
                    shapes.push(shape);
                }
            }
        }

        return shapes;
    }

    /**
     * Patch the fancyBox center/reposition method
     *
     * @private
     */
    _patch_fancybox_method() {
        const _this = this;

        // TODO: $.fancybox.center is not available in fancyBox 2
        let fancybox_function_name = '';
        if (typeof $.fancybox['center'] !== 'undefined') {
            fancybox_function_name = 'center';
        } else if (typeof $.fancybox['reposition'] !== 'undefined') {
            fancybox_function_name = 'reposition';
        }
        if (fancybox_function_name) {
            const fancybox_function = $.fancybox[fancybox_function_name];
            $.fancybox[fancybox_function_name] = function () {
                const wrap = UiHelper.instance().fancybox_wrap;
                const orig_position = wrap.position();
                fancybox_function();
                const new_position = wrap.position();

                if (orig_position.top !== new_position.top || orig_position.left !== new_position.left) {
                    _this.toggle_field_by_name();
                }
            };
        }
    }

    /**
     * @private
     */
    _register_image_selector_handler() {
        const _this = this;

        $(UiHelper.instance().select_image_elements_selector)
            .on('mouseover', function () {
                const shapes = _this.shape_repository.get_shapes_of_current_page();
                const name = $(this).attr('title');
                const shape = _this.get_shape_by_name(name, shapes);

                _this.highlight_shape(shape, _this._get_current_shapes_container());
            })
            .on('mouseout', function () {
                if (!$(this).children('div.fieldbox').length) {
                    const shapes = _this.shape_repository.get_shapes_of_current_page();
                    const name = $(this).attr('title');
                    const shape = _this.get_shape_by_name(name, shapes);

                    _this.dehighlight_shape(shape, _this._get_current_shapes_container());
                }
            });
    }

    /**
     * @private
     */
    _register_text_field_handler() {
        const _this = this;

        UiHelper.instance().input_fields
            .find('dd')
            .find('input, textarea, select')
            .on('mouseover', function () {
                const shapes = _this.shape_repository.get_shapes_of_current_page();
                const name = UiHelper.get_name_for_element(this);
                const shape = _this.get_shape_by_name(name, shapes);

                _this.highlight_shape(shape, _this._get_current_shapes_container());
            })
            .on('mouseout', function () {
                const shapes = _this.shape_repository.get_shapes_of_current_page();
                const name = UiHelper.get_name_for_element(this);
                const shape = _this.get_shape_by_name(name, shapes);

                _this.dehighlight_shape(shape, _this._get_current_shapes_container());
            });
    }
}
