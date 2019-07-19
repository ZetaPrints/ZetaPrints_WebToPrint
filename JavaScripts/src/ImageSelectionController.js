import UiHelper from './helper/UiHelper';
import Logger from './Logger';
import Feature from './Feature';
import PersonalizationForm from './PersonalizationForm';
import Assert from './helper/Assert';
import NotificationCenter from './NotificationCenter';
import GlobalEvents from './GlobalEvents';

export default class ImageSelectionController {
    /**
     * @param {PersonalizationForm} personalization_form
     */
    constructor(personalization_form) {
        Assert.assertInstanceOf(personalization_form, PersonalizationForm, 'personalization_form');

        /**
         * @type {PersonalizationForm}
         * @protected
         */
        this._controller = personalization_form;
    }

    /**
     * Register the change events for the given fields
     *
     * @param {jQuery|HTMLElement} fields
     * @return {ImageSelectionController}
     */
    register_fields(fields) {
        Assert.assertjQueryOrDomElement(fields);

        const fields_jquery = fields;

        const class_name = this.constructor.name ? this.constructor.name + ' extends ImageSelectionController' : 'ImageSelectionController (subclass)';
        Logger.log(`[${class_name}] Register ${fields_jquery.length} fields`);
        fields_jquery.on('change', (event) => {
            Logger.log(`[${class_name}] Change`);
            this._handle_image_selection_change($(event.target));
        });

        return this;
    }

    /**
     * @param {jQuery|HTMLElement} target
     */
    _handle_image_selection_change(target) {
        const name = UiHelper.get_name_for_element(target);
        const value = target.val();
        const has_value = !!value.length;

        const product_form = UiHelper.instance().product_form;
        const data = this._controller.data;
        const page = data.template_details.pages[data.current_page];
        const image = page.images[name];

        if (image) {
            image.value = value;

            if (typeof image.previous_value !== 'undefined') {
                product_form.user_data_changed = image.previous_value !== value;
            }
        } else {
            Logger.warn(`[ImageSelector] No image data for image key ${name}`);
        }

        const $selector = this._get_selector_for_target(target);
        const fancybox_outer = UiHelper.instance().fancybox_outer;
        if (has_value) {
            $selector.removeClass('no-value');
            fancybox_outer.addClass('modified');
            product_form.modified = true;

            //If ZetaPrints advanced theme is enabled then mark shape as edited then image is selected
            Feature.instance().call(Feature.feature.inPreviewEdit, () => {
                this._get_in_preview_edit_controller().mark_shape_as_edited(page.shapes[name]);
            });
        } else {
            $selector.addClass('no-value');
            fancybox_outer.removeClass('modified');

            //If ZetaPrints advanced theme is enabled then or unmark shape then Leave blank is selected
            Feature.instance().call(Feature.feature.inPreviewEdit, () => {
                this._get_in_preview_edit_controller().unmark_shape_as_edited(page.shapes[name]);
            });
        }

        NotificationCenter.instance().notify(GlobalEvents.USER_DATA_CHANGED, {instance: this, image});
    }

    /**
     * @param {jQuery} target
     * @protected
     */
    _get_selector_for_target(target) {
        let $selector = target.parents(UiHelper.instance().select_image_elements_selector);

        if (0 < $selector.length) {
            return $selector;
        }

        const in_preview_edit_context = target.parents('.selector-content').data('in-preview-edit');
        if (!in_preview_edit_context) {
            throw new ReferenceError('Could not detect selector element');
        }

        return in_preview_edit_context.parent;
    }

    /**
     * @return {InPreviewEditController}
     * @protected
     */
    _get_in_preview_edit_controller() {
        return this._controller.in_preview_edit_controller;
    }
}
