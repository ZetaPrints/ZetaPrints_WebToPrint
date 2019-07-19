import PersonalizationForm from './PersonalizationForm';
import Assert from './helper/Assert';
import Feature from './Feature';
import UiHelper from './helper/UiHelper';
import NotificationHelper from './NotificationCenter';
import GlobalEvents from './GlobalEvents';

export default class TextFieldController {
    constructor(personalization_form_instance, input_fields) {
        Assert.assertInstanceOf(personalization_form_instance, PersonalizationForm);
        this._personalization_form_instance = personalization_form_instance;

        this._ignore_enter = this._ignore_enter.bind(this);
        const _on_change = this._on_change = this._on_change.bind(this);
        const _on_click = this._on_click = this._on_click.bind(this);

        input_fields.find('input.input-text').on('keypress', this._ignore_enter);

        const text_fields = input_fields.find('.zetaprints-field').filter('textarea, :text');
        text_fields
            .on('keyup', function () {
                _on_change(this, false);
            })
            .on('change', function () {
                _on_change(this, true);
            });

        text_fields.filter('[readonly]').on('click', function (event) {
            _on_click(event, this);
        });

        const non_text_fields = input_fields.find('.zetaprints-field').filter('select, :checkbox');
        non_text_fields.on('change', function () {
            _on_change(this, true);
        });
    }

    /**
     * @param {HTMLElement} input_field
     * @param {boolean} finished
     * @private
     */
    _on_change(input_field, finished) {
        const $element = $(input_field);
        const name = UiHelper.get_name_for_element($element);
        const value = $element.is(':checkbox') ? $element.is(':checked') : $element.val();

        const state = !!value;
        const data = this._personalization_form_instance.data;
        const page = data.template_details.pages[data.current_page];
        const field = page.fields[name];
        const product_form = UiHelper.instance().product_form;

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

        if (finished) {
            NotificationHelper.instance().notify(GlobalEvents.USER_DATA_SAVED, {instance: this, value, field});
        }

        if (data.has_shapes && Feature.instance().is_activated(Feature.feature.inPreviewEdit)) {
            this._personalization_form_instance.input_field_did_change(name, value);
        }
    }

    /**
     * @param {MouseEvent|Event} event
     * @param {HTMLInputElement} input_field
     * @private
     */
    _on_click(event, input_field) {
        if (input_field.nodeName !== 'INPUT') {
            throw new TypeError('Argument "element" must be a HTMLInputElement');
        }

        const name = UiHelper.get_name_for_element(input_field);
        const data = this._personalization_form_instance.data;
        if (data.template_details.pages[data.current_page].fields[name].dataset) {
            $('#zp-dataset-button').click();
        } else {
            $(input_field).unbind(event).val('').prop('readonly', false);

            //Workaround for IE browser.
            //It moves cursor to the end of input field after focus.
            if (input_field.createTextRange) {
                const range = input_field.createTextRange();

                range.collapse(true);
                range.move('character', 0);
                range.select();
            }
        }
    }

    /**
     * @param {KeyboardEvent|Event} event
     * @return {boolean}
     * @private
     */
    _ignore_enter(event) {
        if (event.keyCode === 13) {
            event.preventDefault();

            return false;
        }
    }
}
