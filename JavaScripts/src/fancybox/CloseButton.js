import Logger from '../Logger';
import UiHelper from '../helper/UiHelper';
import Assert from '../helper/Assert';
import NotificationHelper from '../NotificationCenter';
import PreviewController from '../PreviewController';
import AbstractButton from '../view/AbstractButton';

export default class CloseButton extends AbstractButton {
    /**
     * @param {object} controller
     * @param {function} get_share_name_callback
     */
    constructor(controller, get_share_name_callback) {
        Assert.assertInstanceOf(controller, PreviewController);
        Assert.assertFunction(get_share_name_callback, 'get_share_name_callback');
        super(controller);

        /**
         * @type {Function}
         * @private
         */
        this._get_share_name_callback = get_share_name_callback;

        /**
         * @type {jQuery}
         * @private
         */
        this._original_button = null;

        /**
         * @type {string}
         * @private
         */
        this._original_button_id = null;

        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this._on_click = this._on_click.bind(this);
    }

    /**
     * Adds the button if it does not already exist
     *
     * @param {DataInterface} data
     * @param {boolean} in_preview
     * @param {string} name
     * @param {string} guid
     */
    add(data, in_preview, name = '', guid = '') {
        if (this._button) {
            return false;
        }
        this._in_preview = in_preview;

        const button = this._create_button();
        if (typeof button.jquery === 'undefined') {
            throw new TypeError('The return type of _create_button() must be jQuery element');
        }
        button.on('click', () => {
            this._on_click(data);
        });

        return true;
    }

    /**
     * @inheritDoc
     */
    remove() {
        this._button.remove();
        this._button = null;

        // Give the original button the original ID back
        this._original_button.attr('id', this._original_button_id);
    }

    /**
     * @inheritDoc
     */
    _create_button() {
        const original_close_button = this._original_button = UiHelper.instance().fancybox_close_button;
        original_close_button.addClass('resizer-tweaks');

        const patched_close_button = original_close_button.clone();
        patched_close_button
            .css('display', 'inline')
            .appendTo(this._get_outer());

        this._original_button_id = original_close_button.attr('id');
        original_close_button.attr('id', 'fancybox-close-orig');

        return patched_close_button;
    }

    /**
     * @inheritDoc
     */
    _on_click(data) {
        Logger.debug('[CloseButton] Click');

        data._shape_to_show = this._get_share_name_callback.call({}, data);

        /** @type {Preview} */
        const preview = this._controller.get_preview_for_page_number(data.current_page);
        preview.open_lightbox();

        this.remove();

        NotificationHelper.instance().notify(CloseButton.Events.CLICKED, {instance: this});
    }
}

CloseButton.Events = {
    CLICKED: 'CloseButton.Events.CLICKED'
};
