export default class ColorPicker {
    /**
     *
     * @param {jQuery} colour_picker_panels
     * @param {jQuery} image_selector
     */
    constructor(colour_picker_panels, image_selector) {
        const $colour_radio_button = colour_picker_panels.find('.zetaprints-field');
        const $colour_sample = colour_picker_panels.children('.color-sample');
        const colour = $colour_radio_button.val();

        if (colour) {
            $colour_sample.css('backgroundColor', colour);
        }

        colour_picker_panels
            .find('span > a')
            .click(function () {
                $colour_radio_button.colorpicker('open');

                return false;
            });

        $colour_radio_button.colorpicker({
            color: '804080',
            inline: false,
            layout: {
                //Left, Top, Width, Height (in table cells)
                map: [0, 0, 1, 5],
                bar: [1, 0, 1, 5],
                preview: [2, 0, 1, 1],
                rgb: [2, 2, 1, 1],
                hex: [2, 3, 1, 1],
                cmyk: [3, 2, 1, 2],
            },
            parts: [
                'switcher', 'header', 'map', 'bar', 'hex', 'rgb', 'cmyk', 'preview',
                'footer'
            ],
            part: {
                map: {size: 128},
                bar: {size: 128}
            },
            altField: $colour_sample,
            showOn: 'alt',
            title: ' ',
            revert: true,
            showCloseButton: false,
            colorFormat: ('#HEX'),
            ok: function (e, data) {
                if ($colour_radio_button.val()) {
                    image_selector.removeClass('no-value');

                    $colour_radio_button
                        .prop('disabled', false)
                        .change()
                        .prop('checked', true);
                }
            }
        });
    }
}
