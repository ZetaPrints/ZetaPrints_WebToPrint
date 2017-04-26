import jQuery from './jQueryLoader'
import ShapeRepository from "./model/ShapeRepository";
import UiHelper from "./helper/UiHelper";

export default class InPreviewEditController {
    /**
     * @param {PersonalizationForm} personalization_form_instance
     */
    constructor(personalization_form_instance) {
        if (!personalization_form_instance) {
            throw new ReferenceError('Missing argument "personalization_form_instance"')
        }
        this.personalization_form_instance = personalization_form_instance;
        this.shape_repository = new ShapeRepository(personalization_form_instance);
        this.add_in_preview_edit_handlers = this.add_in_preview_edit_handlers.bind(this);
    }

    /**
     * @param {Shape} shape
     * @api
     */
    mark_shape_as_edited(shape) {
        jQuery('div.zetaprints-field-shape[title="' + shape.name + '"]')
            .addClass('edited');

        shape['has-value'] = true;
    }

    /**
     * @param {Shape} shape
     * @api
     */
    unmark_shape_as_edited(shape) {
        jQuery('div.zetaprints-field-shape[title="' + shape.name + '"]').removeClass('edited');

        shape['has-value'] = false;
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
     * @param {jQuery|HTMLElement} $container
     * @param {function} shape_handler
     * @private
     */
    _place_shape(shape, $container, shape_handler) {
        if (typeof shape_handler !== 'function') {
            throw new TypeError('Argument shape_handler must be of type "function"');
        }
        const edited_class = shape['has-value'] ? ' edited' : '';

        jQuery('<div class="zetaprints-field-shape bottom hide' + edited_class + '" ' +
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
        jQuery('div.zetaprints-field-shape', container).remove();
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

            let $field = jQuery('*[name="zetaprints-_' + name + '"], ' +
                'div.zetaprints-images-selector[title="' + name + '"] div.head');

            const $parent = $field.parents('.zetaprints-text-field-wrapper');

            if ($parent.length) {
                $field = $parent;
            }

            $field.addClass('highlighted');
        }
    }

    /**
     * @param {string} name
     */
    dehighlight_field_by_name(name) {
        jQuery('.zetaprints-page-input-fields .highlighted,' +
            '.zetaprints-page-stock-images .highlighted')
            .removeClass('highlighted');
    }

    /**
     * @param {string} name
     * @param {object|undefined} position
     * @param selected_shapes
     * @api
     */
    popup_field_by_name(name, position = undefined, selected_shapes) {
        const zp = this.personalization_form_instance.data;
        const $tabs = jQuery('<div class="fieldbox-tabs fieldbox-wrapper">' +
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

        for (let i = 0; i < selected_shapes.length; i++) {
            const shape_name = selected_shapes[i];
            const tab_title = shape_name.length <= 5
                ? shape_name :
                shape_name.substring(0, 5) + '&hellip;';

            const $li = this._popup_field_by_name_create_li(shape_name, i, tab_title).appendTo($ul);

            let $field;
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
        if (width === 'auto' && jQuery.browser && jQuery.browser.msie && jQuery.browser.version === '7.0') {
            width = min_width;
        }

        const $box = this._popup_field_by_name_build_box(name, $tabs, width, min_width)
            .appendTo('body');

        this._popup_field_by_name_apply_tabs_ie7_workaround(selected_buttons, $ul, $tabs);
        this._popup_field_by_name_register_box_click($box);

        this._popup_field_by_name_prepare_draggable_box($box, jQuery.extend(true, {}, position), $shape);

        this._popup_field_by_name_prepare_tabs($tabs);
    }

    /**
     * @param {string} name
     * @param {jQuery} $tabs
     * @param {number} width
     * @param {number} min_width
     * @private
     */
    _popup_field_by_name_build_box(name, $tabs, width, min_width) {
        return jQuery('<div class="fieldbox" title="' + name + '" />')
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
        return jQuery('<li title="' + shape_name + '">' +
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
        $box.find('.fieldbox-button').click(() => {
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

        const window_height = jQuery(window).height() + jQuery(window).scrollTop();
        if ((position.top + height) > window_height) {
            position.top -= position.top + height - window_height;
        }

        const window_width = jQuery(window).width();
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
                const $panel = jQuery(ui.newPanel);

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
        const $parent = jQuery('#stock-images-page-' + zp.current_page)
            .find('*[title="' + shape_name + '"]')
            .removeClass('minimized');

        const $field = $parent.children('.selector-content');

        // if (min_width < 400) {
        //     width = 400;
        // } else {
        //     width = min_width;
        // }

        //Remember checked radio button for IE7 workaround
        selected_buttons[shape_name] = $field
            .find(':checked')
            .val();

        const full_name = 'zetaprints-#' + name;

        $li.addClass('image-field');
        return {$parent, $field, full_name, selected_buttons};
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
        let $field = jQuery('#input-fields-page-' + zp.current_page)
            .find('*[name="zetaprints-_' + shape_name + '"]')
            .not('[type="hidden"]');

        const $_field = $field;
        const $parent = $field.parents('.zetaprints-text-field-wrapper');

        if ($parent.length) {
            $field = $parent;
        }

        const full_name = 'zetaprints-_' + name;

        if (jQuery.fn.text_field_editor
            && page.fields[shape_name]['colour-picker'] === 'RGB') {
            $_field.text_field_editor('move', $li.find('.fieldbox-tab-inner'));
        }

        $li.addClass('text-field');

        //var field = $field[0];

        //if ($_field) {
        //Workaround for IE browser.
        //It moves cursor to the end of input field after focus.
        //  if (field.createTextRange) {
        //    var range = field.createTextRange();
        //    var position = jQuery(field).val().length;

        //    range.collapse(true);
        //    range.move('character', position);
        //    range.select();
        //  }
        //}
        return {$field, $_field, $parent, full_name};
    }

    /**
     * @param {string} full_name
     * @return {string}
     * @api
     */
    popdown_field_by_name(full_name = '') {
        const personalization_form_instance = this.personalization_form_instance;
        const field = full_name
            ? jQuery('*[value="' + full_name + '"]', UiHelper.instance().fancybox_content)
            : jQuery(':input', UiHelper.instance().fancybox_content);

        if (!field.length) {
            return '';
        }

        if (!full_name) {
            full_name = jQuery(field).val();
        }

        const name = full_name.substring(12);
        const $box = jQuery('.fieldbox[title="' + name + '"]');

        $box.find('.fieldbox-field').children().each(function () {
            const $element = jQuery(this);
            let $_element = $element;

            if ($element.hasClass('zetaprints-text-field-wrapper')) {
                $_element = $element.find('.zetaprints-field');
            }

            if (jQuery.fn.colorpicker && $element.hasClass('selector-content')) {
                $element
                    .find('> .tabs-wrapper > .tab')
                    .filter('.colour-picker, .color-picker')
                    .each(function () {
                        personalization_form_instance.hide_colorpicker(jQuery(this));
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

            if (jQuery.fn.text_field_editor) {
                $_element.text_field_editor('move',
                    data.parent.parents('dl').children('dt'));
            }

            if (data.parent.hasClass('zetaprints-images-selector')) {
                personalization_form_instance.scroll_strip(jQuery($element
                    .find('ul.tab-buttons li.ui-tabs-selected a')
                    .attr('href')));
            }
        });

        $box.remove();

        jQuery(field).remove();

        jQuery('#current-shape').attr('id', '');

        return name;
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

        return jQuery('div.product-img-box');
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
     * @param {Event} event
     * @api
     */
    shape_handler(event) {
        event.preventDefault();
        const zp = this.personalization_form_instance.data;
        const shape = jQuery(event.target).parent();

        if (jQuery.fn.draggable && jQuery.fn.tabs && event.type === 'click') {
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

            jQuery('#current-shape').attr('id', '');
            jQuery(shape).attr('id', 'current-shape');

            this.personalization_form_instance.preview_controller.get_preview_for_page_number(zp.current_page).preview_click();
            // jQuery('#preview-image-page-' + zp.current_page).click();
        } else if (event.type === 'mouseover') {
            jQuery('#zetaprints-preview-image-container > div.zetaprints-field-shape.bottom')
                .removeClass('highlighted');
            jQuery(shape).addClass('highlighted');

            this.highlight_field_by_name(jQuery(shape).attr('title'));
        } else {
            jQuery(shape).removeClass('highlighted');

            this.dehighlight_field_by_name(jQuery(shape).attr('title'));
        }
    }

    /**
     * @param {Event} event
     * @return {boolean}
     */
    fancy_shape_handler(event) {
        const data = this.personalization_form_instance.data;
        const shape = jQuery(event.target).parent();

        if (jQuery.fn.draggable && jQuery.fn.tabs && event.type === 'click') {
            if (jQuery(shape).children().length > 1) {
                return false;
            }

            UiHelper.instance().fancybox_content.find('div.zetaprints-field-shape.highlighted').removeClass('highlighted');
            shape.addClass("highlighted");

            this.popdown_field_by_name();

            const name = shape.attr('title');
            const _shape = data.template_details.pages[data.current_page].shapes[name];

            let fields = [];
            if (!_shape._selected_shape_names) {
                const c = this._glob_to_rel_coords(event.pageX,
                    event.pageY,
                    event
                        .data
                        .container
                        .children(UiHelper.instance().fancybox_image_selector));

                const shapes = this._get_shapes_by_coords(c).reverse();


                for (let i = 0; i < shapes.length; i++) {
                    fields = fields.concat(shapes[i].name.split('; '))
                }

                _shape._fields = fields;
            }

            this.popup_field_by_name(name, {top: event.pageY, left: event.pageX}, fields);

            return false;
        }

        if (event.type === 'mouseover') {
            const highlighted = UiHelper.instance().fancybox_content.children('div.zetaprints-field-shape.highlighted');
            if (jQuery(highlighted).children().length <= 1) {
                jQuery(highlighted).removeClass('highlighted');
            }

            jQuery(shape).addClass('highlighted');
        } else if (jQuery(shape).children().length <= 1) {
            jQuery(shape).removeClass('highlighted');
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
            jQuery('div.zetaprints-field-shape.bottom', UiHelper.instance().fancybox_content).removeClass('highlighted');
            this.popdown_field_by_name();
        });


        const fancybox_center_function = jQuery.fancybox.center;
        jQuery.fancybox.center = function () {
            const wrap = UiHelper.instance().fancybox_wrap;
            const orig_position = wrap.position();
            fancybox_center_function();
            const new_position = wrap.position();

            if (orig_position.top !== new_position.top || orig_position.left !== new_position.left) {
                _this.popup_field_by_name(_this.popdown_field_by_name());
            }
        }
    }

    /**
     * @private
     */
    _register_image_selector_handler() {
        const _this = this;
        const zp = this.personalization_form_instance.data;

        jQuery('div.zetaprints-images-selector')
            .mouseover(function () {
                const shapes = _this.shape_repository.get_shapes_of_current_page();
                const name = jQuery(this).attr('title');
                const shape = _this.get_shape_by_name(name, shapes);

                _this.highlight_shape(shape, _this._get_current_shapes_container());
            })
            .mouseout(function () {
                if (!jQuery(this).children('div.fieldbox').length) {
                    const shapes = _this.shape_repository.get_shapes_of_current_page();
                    const name = jQuery(this).attr('title');
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
        const zp = this.personalization_form_instance.data;

        jQuery('div.zetaprints-page-input-fields')
            .find('dd')
            .find('input, textarea, select')
            .mouseover(function () {
                const shapes = _this.shape_repository.get_shapes_of_current_page();
                const name = jQuery(this).attr('name').substring(12);
                const shape = _this.get_shape_by_name(name, shapes);

                _this.highlight_shape(shape, _this._get_current_shapes_container());
            })
            .mouseout(function () {
                const shapes = _this.shape_repository.get_shapes_of_current_page();
                const name = jQuery(this).attr('name').substring(12);
                const shape = _this.get_shape_by_name(name, shapes);

                _this.dehighlight_shape(shape, _this._get_current_shapes_container());
            });
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
}
