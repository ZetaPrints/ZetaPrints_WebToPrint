import AbstractButton from './AbstractButton';
import Assert from '../helper/Assert';
import ImageEditingContext from '../model/ImageEditingContext';
import PersonalizationForm from '../PersonalizationForm';
import ImageManipulationService from '../service/ImageManipulationService';
import ImageThumbnailService from '../service/ImageThumbnailService';
import NotificationCenter from '../NotificationCenter';
import GlobalEvents from '../GlobalEvents';

export default class AbstractRotateButton extends AbstractButton {
    /**
     * @param {PersonalizationForm} controller
     * @param input
     */
    constructor(controller, input) {
        Assert.assertInstanceOf(controller, PersonalizationForm);
        super(controller);
        Assert.assertjQueryOrDomElement(input);

        this._controller = controller;
        this._image_editing_context = ImageEditingContext.create_from_input(controller, input);
        this._image_manipulation_service = new ImageManipulationService();
        this._image_thumbnail_service = new ImageThumbnailService();

        this._on_click = this._on_click.bind(this);
    }

    /**
     * Adds the button if it does not already exist
     */
    add() {
        if (this._button) {
            return false;
        }

        const button = this._create_button();
        if (typeof button.jquery === 'undefined') {
            throw new TypeError('The return type of _create_button() must be jQuery element');
        }
        button.on('click', (e) => {
            this._on_click(e);
        });
        button.appendTo(this._get_parent());

        this._button = button;

        return true;
    }

    /**
     * Remove the button
     */
    remove() {
        super.remove();
    }

    /**
     * @return {*|jQuery}
     * @protected
     */
    _create_button() {
        return jQuery(`<div class="zp-button zp-rotate-button ${this._get_class_name()}" title="${this._get_title()}">${this._get_text()}</div>`);
    }

    /**
     * @return {*}
     * @private
     */
    _get_parent() {
        return this._image_editing_context.get_thumbnail_outlet().children('.buttons-row');
    }

    /**
     * @param {MouseEvent} event
     * @private
     */
    _on_click(event) {
        event.preventDefault();
        event.stopPropagation();

        this._image_manipulation_service.rotate(
            this._image_editing_context,
            this._get_direction(),
            (_, context, processed_image_data) => {
                this._image_editing_context = context;
                this._image_thumbnail_service.update_images_for_editing_context(context, processed_image_data.source);

                NotificationCenter.instance().notify(GlobalEvents.USER_DATA_CHANGED, {image_editing_context: context});
                NotificationCenter.instance().notify(GlobalEvents.USER_DATA_SAVED, {image_editing_context: context});
            }
        );
    }

    /**
     * @returns {string}
     * @private
     */
    _get_title() {
        throw new Error('Not implemented');
    }

    /**
     * @returns {string}
     * @private
     */
    _get_text() {
        throw new Error('Not implemented');
    }

    /**
     * @returns {string}
     * @private
     */
    _get_class_name() {
        throw new Error('Not implemented');
    }

    /**
     * @returns {string}
     * @private
     */
    _get_direction() {
        throw new Error('Not implemented');
    }
}
