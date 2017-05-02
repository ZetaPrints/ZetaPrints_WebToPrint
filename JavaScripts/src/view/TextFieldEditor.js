import $ from "../jQueryLoader";
import Assert from "../helper/Assert";
import UiHelper from "../helper/UiHelper";

export default class TextFieldEditor {
    constructor(element, options = {}) {
        Assert.assertjQuery(element);
        Assert.assertObject(options);
        const _this = this;

        this._on_handle_click = this._on_handle_click.bind(this);

        this._element = element;
        const settings = this._settings = Object.assign({}, TextFieldEditor.default_settings, options);

        this._editor = $('<div class="zp-text-field-editor" />').prependTo(settings.button_parent);
        this._handle = this._render_handle();

        const $panel = this._panel = this._render_panel();

        const $row = $('<div class="zp-text-field-editor-row">' +
            '<div class="zp-text-field-editor-icon color-picker" />' +
            '</div>').appendTo($panel);

        const $options = $('<div class="zp-text-field-editor-options" />')
            .appendTo($row);

        $('<div class="zp-text-field-editor-clear" />').appendTo($row);

        const name = 'zp-text-field-editor-colorpicker-' + UiHelper.get_name_for_element(element);

        $('<div class="zp-text-field-editor-option">' +
            '<div><input type="radio" name="' + name + '" value="default" checked="checked" /></div>' +
            '<div><span>Default</span></div>' +
            '</div>').appendTo($options);

        const $pallet = $('<div class="zp-text-field-editor-icon pallet">' +
            '<div class="zp-text-field-editor-color-example" />' +
            '</div>');

        const $color_example = $pallet.children();
        const $radio_button = $('<input type="radio" name="' + name + '" value="" />');

        if (settings.colour) {
            $color_example.css('backgroundColor', settings.colour);
            $radio_button.val(settings.colour);
        }

        $('<div class="zp-text-field-editor-option" />')
            .append($radio_button.wrap('<div />').parent())
            .append($pallet).appendTo($options);


        $('input', $row).change(function () {
            let value = $(this).val();

            if (!value) {
                $radio_button.colorpicker('open');
            } else if ('' + value === 'default') {
                _this._change('color', undefined);
            } else {
                _this._change('color', value);
            }
        });
        this._init_color_picker($radio_button, $color_example);
    }

    /**
     *
     * @param $radio_button
     * @param $color_example
     * @private
     */
    _init_color_picker($radio_button, $color_example) {
        this._color_picker_on = false;

        $radio_button.colorpicker({
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
            altField: $color_example,
            showOn: 'alt',
            title: ' ',
            revert: true,
            showCloseButton: false,
            colorFormat: ('#HEX'),

            open: () => {
                this._color_picker_on = true;
            },

            close: () => {
                this._color_picker_on = false;
            },

            ok: (e, data) => {
                this._change('color', data.formatted);
            }
        });
    }

    /**
     * @param {string} name
     * @param {*} value
     * @private
     */
    _change(name, value) {
        this.state_changed = value !== undefined;

        const data = {};
        data['' + name] = value;

        this._settings.change(data);
    }

    /**
     * @param {boolean} value
     */
    set state_changed(value) {
        if (value === this.is_opened) {
            // nop
            return;
        }

        if (value) {
            this._editor.addClass('state-changed');
        } else {
            this._editor.removeClass('state-changed');
        }
    }

    /**
     * @return {jQuery}
     * @private
     */
    _render_panel() {
        return $('<div class="zp-text-field-editor-panel">' +
            '<div class="white-line" />' +
            '</div>')
            .appendTo(this._editor);
    }

    /**
     * @return {jQuery}
     * @private
     */
    _render_handle() {
        const $handle = $('<div class="zp-text-field-editor-handle">' +
            '<div class="zp-text-field-editor-icon pen" />' +
            '</div>').appendTo(this._editor);

        $handle.click(this._on_handle_click);

        return $handle;
    }

    /**
     * @param {MouseEvent|Event} event
     * @private
     */
    _out_editor_click(event) {
        if (this._color_picker_on) {
            return;
        }

        const editor = this._editor.get(0);
        const child_parent = $(event.target)
            .parents('div.zp-text-field-editor')
            .get(0);

        if (!((event.target === editor) || (child_parent === editor))) {
            this._handle.click();
        }
    }

    /**
     * @param {MouseEvent} event
     * @return {boolean}
     * @private
     */
    _on_handle_click(event) {
        event.preventDefault();

        const $handle = this._handle;

        $(document).unbind('click.text-field-editor');

        if (this.is_opened) {
            this.is_opened = false;
        } else {
            $('div.zp-text-field-editor').removeClass('opened');

            const offset = $handle.offset();
            const position = $handle.position();

            const c = offset.top === position.top && offset.left === position.left
                ? offset : position;

            this._panel.css({
                top: c.top + $handle.outerHeight() - 1,
                left: c.left
            });

            this.is_opened = true;

            $(document).bind('click.text-field-editor', this._out_editor_click);
        }

        return false;

    }

    /**
     * @return {boolean}
     */
    get is_opened() {
        return !!this._editor.hasClass('opened');
    }

    /**
     * @param {boolean} value
     */
    set is_opened(value) {
        if (value === this.is_opened) {
            // nop
            return;
        }

        if (value) {
            this._editor.addClass('opened');
        } else {
            this._editor.removeClass('opened');
        }
    }
}


TextFieldEditor.default_settings = {
    button_parent: null,
    colour: '',
    change: function (data) {
    }
};


