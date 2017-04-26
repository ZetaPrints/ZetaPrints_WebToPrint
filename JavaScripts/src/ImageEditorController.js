import Logger from './Logger';

import ImageEditor from './ImageEditor';
import ImageEditingContext from "./model/ImageEditingContext";
import Feature from "./Feature";
import SaveImageButton from "./fancybox/SaveImageButton";
import Resizing from "./fancybox/Resizing";
import UpdatePreview from "./UpdatePreviewButtonController";
import ImageEditorLightbox from "./view/ImageEditorLightbox";
import UiHelper from "./helper/UiHelper";


export default class ImageEditorController {
    /**
     * @param {PersonalizationForm} personalization_form_instance
     */
    constructor(personalization_form_instance) {
        if (!personalization_form_instance) {
            throw new ReferenceError('Missing argument "personalization_form_instance"')
        }
        this.personalization_form_instance = personalization_form_instance;
        this.show = this.show.bind(this);
        this.$ = $;
        this.image_editor = new ImageEditor(personalization_form_instance);
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
        let personalization_form_instance = this.personalization_form_instance;
        const data = personalization_form_instance.data;
        const page = data.template_details.pages[data.current_page];

        this._add_buttons(data, image_name, image_guid);

        //Define image edit context
        data.image_edit = new ImageEditingContext({
            'url': {
                'image': data.url.image,
                'user_image_template': data.url['user-image-template']
            },
            '$selected_thumbnail': $thumb,
            //!!! Temp solution
            '$input': $thumb.parents().children('input.zetaprints-images'),
            'image_id': image_guid,
            'page': {
                'width_in': page['width-in'],
                'height_in': page['height-in']
            },
            'placeholder': page.images[image_name],
            'upload_image_by_url': personalization_form_instance.upload_image_by_url
        });

        //Check if current page has shapes...
        if (page.shapes)
        //...and then add shape info to the image edit context
        {
            data.image_edit.shape = page.shapes[image_name];
        }

        //Default values for options
        data.image_edit.has_fit_in_field = true;

        //Add options' values
        if (data.options['image-edit']) {
            const options = data.options['image-edit'];

            data.image_edit.has_fit_in_field = options['in-context']
                ? ('' + options['in-context']['@enabled']) !== '0'
                : true;
        }

        //Disable fit in field functionality if current page doesn't have shapes
        data.image_edit.has_fit_in_field = data.image_edit.has_fit_in_field && data.image_edit.shape !== undefined;

        // zetaprint_image_editor.apply(zp.image_edit, [ $, { save: save_image_handler } ] );

        this.image_editor.load(data.image_edit);
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
            Feature.instance().call(Feature.feature.fancybox.updatePreview, UpdatePreview.fancybox_remove_update_preview_button, $);
            is_in_preview = true;
        }

        if (UiHelper.instance().fancybox_resize.length) {
            Feature.instance().call(Feature.feature.fancybox.resizing, Resizing.fancybox_resizing_hide);
        }

        Feature.instance().call(
            Feature.feature.fancybox.saveImageButton,
            SaveImageButton.fancybox_add_save_image_button,
            this.personalization_form_instance.preview_controller,
            data,
            is_in_preview,
            image_name,
            image_guid
        );
    }
}
