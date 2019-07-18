import Logger from './Logger';

import ImageEditor from './ImageEditor';
import ImageEditingContext from './model/ImageEditingContext';
import Feature from './Feature';
import SaveImageButton from './fancybox/SaveImageButton';
import Resizing from './fancybox/Resizing';
import ImageEditorLightbox from './view/ImageEditorLightbox';
import UiHelper from './helper/UiHelper';

export default class ImageEditorController {
    /**
     * @param {PersonalizationForm} personalization_form_instance
     */
    constructor(personalization_form_instance) {
        if (!personalization_form_instance) {
            throw new ReferenceError('Missing argument "personalization_form_instance"');
        }
        this.personalization_form_instance = personalization_form_instance;
        this.show = this.show.bind(this);
        this.$ = $;
        this.image_editor = new ImageEditor(this);

        this._save_image_button = new SaveImageButton(personalization_form_instance.preview_controller);
    }

    /**
     * @return {SaveImageButton}
     */
    get save_image_button() {
        return this._save_image_button;
    }

    /**
     * @param {string} image_name
     * @param {string} image_guid
     * @param {jQuery|HTMLElement} $thumb
     */
    show(image_name, image_guid, $thumb) {
        Logger.debug('[ImageEditorController] ImageEditor show', image_name, image_guid, $thumb);

        const lightbox = new ImageEditorLightbox(
            this.personalization_form_instance.url['edit-image-template'] + image_guid,
            this
        );

        lightbox.open(image_name, image_guid, $thumb);
    }

    /**
     * @param {string} image_name
     * @param {string} image_guid
     * @param {jQuery|HTMLElement} $thumb
     */
    on_fancybox_complete(image_name, image_guid, $thumb) {
        Logger.debug('[ImageEditorController] Fancybox complete', image_name, image_guid, $thumb);
        const personalization_form_instance = this.personalization_form_instance;
        const data = personalization_form_instance.data;

        this._add_buttons(data, image_name, image_guid);

        const image_editing_context = ImageEditingContext.create(
            personalization_form_instance,
            image_name,
            image_guid,
            $thumb
        );

        data.image_edit = image_editing_context;
        this.image_editor.load(image_editing_context);
    }

    /**
     * @param {DataInterface} data
     * @param {string} image_name
     * @param {string} image_guid
     * @private
     */
    _add_buttons(data, image_name, image_guid) {
        UiHelper.instance().fancybox_overlay.css('z-index', 1103);

        let is_in_preview = false;

        if (UiHelper.instance().update_preview_button.length) {
            Feature.instance().call(
                Feature.feature.fancybox.updatePreview,
                () => {
                    this.personalization_form_instance.preview_controller._update_preview_button.remove();
                }
            );
            is_in_preview = true;
        }

        if (UiHelper.instance().fancybox_resize.length) {
            Feature.instance().call(Feature.feature.fancybox.resizing, Resizing.fancybox_resizing_hide);
        }

        Feature.instance().call(
            Feature.feature.fancybox.saveImageButton,
            () => {
                this._save_image_button.add(data, is_in_preview, image_name, image_guid);
            }
        );
    }
}
