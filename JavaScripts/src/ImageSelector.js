/**
 * Created by cod on 18.4.17.
 */
import ColorPicker from "./view/ColorPicker";
import PersonalizationForm from "./PersonalizationForm";
import Assert from "./helper/Assert";
import ImageSelectionController from "./ImageSelectionController";

export default class ImageSelector extends ImageSelectionController {
    /**
     * @param {PersonalizationForm} personalization_form
     * @param {Element} element
     */
    constructor(personalization_form, element = undefined) {
        super(personalization_form);
        Assert.assertDomElement(element, 'element');
        Assert.assertInstanceOf(personalization_form, PersonalizationForm, 'personalization_form');

        /**
         * @type {PersonalizationForm}
         * @private
         */
        this._controller = personalization_form;

        /**
         * @type {jQuery}
         * @private
         */
        this._element = $(element);

        this._initialize();
    }

    /**
     * @private
     */
    _initialize() {
        const element = $(this._element);
        const $head = element.children('.head');
        const $content = this._get_content();
        this._initialize_tabs();
        this.register_fields($content.find('.zetaprints-field'));

        $head.click((event) => {
            event.preventDefault();
            this._handle_head_click();
            return false;
        });

        const shift = element.position().left - $('div.product-img-box').position().left;
        const full_width = shift + element.outerWidth();
        $head.children('.collapse-expand').click((event) => {
            event.preventDefault();
            this._handle_collapse_and_expand(shift, full_width);
            return false;
        });

        this._initialize_color_pickers();
    }

    /**
     * @private
     */
    _initialize_tabs() {
        const $content = this._get_content();
        const $tabs = $content.children('.tab-buttons');

        let tab_number = 0;
        if (!$tabs.children('.hidden').length) {
            tab_number = 1;
        }

        $content
            .tabs({active: tab_number})
            .bind('tabsshow', (event, ui) => {
                const controller = this._controller;
                controller.show_colorpicker($(ui.panel));
                controller.scroll_strip(ui.panel);
            });
    }

    /**
     * @private
     */
    _initialize_color_pickers() {
        const element = this._element;
        const all_colour_pickers = this._get_panels()
            .filter('.color-picker')
            .add(element.find('.colour-picker'));

        if (all_colour_pickers.length) {
            new ColorPicker(all_colour_pickers, element);
        }
    }

    /**
     * @return {jQuery}
     * @private
     */
    _get_content() {
        return this._element.children('.selector-content');
    }

    /**
     * @private
     */
    _get_panels() {
        return this._element.children('.selector-content').find('> .tabs-wrapper > .tab');
    }

    /**
     * @param {number} shift
     * @param {number} full_width
     * @private
     */
    _handle_collapse_and_expand(shift, full_width) {
        const element = this._element;
        const controller = this._controller;
        const $panel = this._get_panels().not('.ui-tabs-hide');

        if (element.hasClass('expanded')) {
            element
                .removeClass('expanded')
                .removeAttr('style');
        } else {
            element
                .addClass('expanded')
                .css({'left': -shift, 'width': full_width});

            if (element.hasClass('minimized')) {
                element.removeClass('minimized');

                controller.show_colorpicker($panel);
            }
        }

        controller.scroll_strip($panel);
    }

    /**
     * @private
     */
    _handle_head_click() {
        const element = this._element;
        const $panel = element.hasClass('zetaprints-palette')
            ? this._get_content()
            : this._get_panels().not('.ui-tabs-hide');

        if (element.hasClass('minimized')) {
            element.removeClass('minimized');

            this._controller.show_colorpicker($panel);
            this._controller.scroll_strip($panel)
        } else {
            this._controller.hide_colorpicker($panel);

            element
                .addClass('minimized')
                .removeClass('expanded')
                .css('width', '100%');
        }
    }
}
