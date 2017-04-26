/**
 * Created by cod on 18.4.17.
 */
import ColorPicker from "./view/ColorPicker";
export default class ImageSelector {
    /**
     * @param {Element} element
     * @param {PersonalizationForm} personalization_form
     */
    constructor(element, personalization_form) {
        const $field = $(element);

        const $head = $field.children('.head');
        const $content = $field.children('.selector-content');

        const $tabs = $content.children('.tab-buttons');

        let tab_number = 0;

        if (!$tabs.children('.hidden').length) {
            tab_number = 1;
        }

        $content
            .tabs({active: tab_number})
            .bind('tabsshow', function (event, ui) {
                personalization_form.show_colorpicker($(ui.panel));
                personalization_form.scroll_strip(ui.panel);
            });

        $content
            .find('.zetaprints-field')
            .change((event) => {
                personalization_form.image_field_select_handler($(event.target), personalization_form.data);
            });

        const $panels = $content.find('> .tabs-wrapper > .tab');

        $head.click(function () {
            const $panel = $field.hasClass('zetaprints-palette')
                ? $content
                : $panels.not('.ui-tabs-hide');

            if ($field.hasClass('minimized')) {
                $field.removeClass('minimized');

                personalization_form.show_colorpicker($panel);
                personalization_form.scroll_strip($panel)
            } else {
                personalization_form.hide_colorpicker($panel);

                $field
                    .addClass('minimized')
                    .removeClass('expanded')
                    .css('width', '100%');
            }

            return false;
        });

        const shift = $field.position().left - $('div.product-img-box').position().left;
        const full_width = shift + $field.outerWidth();

        $head
            .children('.collapse-expand')
            .click(function () {
                const $panel = $panels.not('.ui-tabs-hide');

                if ($field.hasClass('expanded')) {
                    $field
                        .removeClass('expanded')
                        .removeAttr('style');
                } else {
                    $field
                        .addClass('expanded')
                        .css({'left': -shift, 'width': full_width});

                    if ($field.hasClass('minimized')) {
                        $field.removeClass('minimized');

                        personalization_form.show_colorpicker($panel);
                    }
                }

                personalization_form.scroll_strip($panel);

                return false;
            });

        const $colour_picker_panel = $panels
            .filter('.color-picker')
            .add($field.find('.colour-picker'));

        if ($colour_picker_panel.length) {
            new ColorPicker($colour_picker_panel, $field);
        }
    }
}