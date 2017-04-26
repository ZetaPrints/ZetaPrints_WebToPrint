import Delegate from "./Delegate";
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

    show(image_name, image_guid, $thumb) {
        Logger.debug('[ImageEditorController] ImageEditor show', image_name, image_guid, $thumb);

        const lightbox = new ImageEditorLightbox(
            this.personalization_form_instance.url['edit-image-template'] + image_guid,
            this
        );

        lightbox.open(image_name, image_guid, $thumb);

        //
        // const fancybox = this.$['fancybox'];
        // const fancybox_version = typeof fancybox.version === 'string' ? parseInt(fancybox.version, 10) : 1;
        //
        //
        //
        // if (fancybox_version === 2) {
        //     this._show_fancybox_v2(image_guid, image_name, $thumb);
        // } else if (fancybox_version === 1) {
        //     this._show_fancybox_v1(image_guid, image_name, $thumb);
        // } else {
        //     throw new Error('No matching fancyBox version found');
        // }
    }

    /**
     * @param image_guid
     * @param image_name
     * @param $thumb
     * @private
     * @deprecated
     */
    // _show_fancybox_v1(image_guid, image_name, $thumb) {
    //     const _this = this;
    //
    //     $.fancybox({
    //         'padding': 0,
    //         'titleShow': false,
    //         'type': 'ajax',
    //         'href': this.personalization_form_instance.url['edit-image-template'] + image_guid,
    //         'hideOnOverlayClick': false,
    //         'hideOnContentClick': false,
    //         'centerOnScroll': false,
    //         'showNavArrows': false,
    //         'onStart': () => {
    //             Logger.debug('[ImageEditorController] Custom Fancybox start');
    //
    //             this.on_fancybox_start(image_name, image_guid);
    //         },
    //         'onComplete': () => {
    //             Logger.debug('[ImageEditorController] Fancybox complete');
    //             _this.on_fancybox_complete(image_name, image_guid, $thumb);
    //         },
    //         'onCleanup': function () {
    //             Logger.debug('[ImageEditorController] Fancybox cleanup');
    //
    //             if (ImageEditor._image_editor) {
    //                 ImageEditor._image_editor.close();
    //             }
    //         },
    //         'onClosed': function () {
    //             Logger.debug('[ImageEditorController] Fancybox closed');
    //
    //             Feature.instance().call(Feature.feature.fancybox.saveImageButton, SaveImageButton.fancybox_remove_save_image_button, $);
    //             // Delegate.delegate('fancybox_remove_save_image_button', $);
    //         }
    //     });
    // }

    /**
     * @param image_guid
     * @param image_name
     * @param $thumb
     * @private
     */
    // _show_fancybox_v2(image_guid, image_name, $thumb) {
    //     const _this = this;
    //
    //     $.fancybox({
    //         'padding': 0,
    //         'type': 'ajax',
    //         'href': this.personalization_form_instance.url['edit-image-template'] + image_guid,
    //         'autoCenter': false,
    //         'arrows': false,
    //         'closeClick': false,
    //         height: 340,
    //         overlay: {
    //             closeClick: false,  // if true, fancyBox will be closed when user clicks on the overlay
    //             // speedOut   : 200,   // duration of fadeOut animation
    //             // showEarly  : true,  // indicates if should be opened immediately or wait until the content is ready
    //             // css        : {},    // custom CSS properties
    //             // locked     : true   // if true, the content will be locked into overlay
    //         },
    //         helpers: {
    //             title: null
    //         },
    //
    //         'beforeLoad': function () {
    //             Logger.debug('[ImageEditorController] Custom Fancybox start');
    //             _this.on_fancybox_start(image_name, image_guid);
    //         },
    //         'beforeShow': function () {
    //             Logger.debug('[ImageEditorController] Fancybox complete');
    //             _this.on_fancybox_complete(image_name, image_guid, $thumb);
    //         },
    //         'beforeClose': function () {
    //             Logger.debug('[ImageEditorController] Fancybox cleanup');
    //
    //             if (ImageEditor._image_editor) {
    //                 ImageEditor._image_editor.close();
    //             }
    //         },
    //         'afterClose': function () {
    //             Logger.debug('[ImageEditorController] Fancybox closed');
    //
    //             Feature.instance().call(Feature.feature.fancybox.saveImageButton, SaveImageButton.fancybox_remove_save_image_button, $);
    //             // Delegate.delegate('fancybox_remove_save_image_button', $);
    //         }
    //     });
    // }

    /**
     * @param {string} image_name
     * @param {string} image_guid
     */
    on_fancybox_start(image_name, image_guid) {
        UiHelper.instance().fancybox_overlay.css('z-index', 1103);

        let is_in_preview = false;

        if (UiHelper.instance().update_preview_button.length) {
            Feature.instance().call(Feature.feature.fancybox.updatePreview, UpdatePreview.fancybox_remove_update_preview_button, $);
            // Delegate.delegate('fancybox_remove_update_preview_button', $);
            is_in_preview = true;
        }

        if (UiHelper.instance().fancybox_resize.length) {
            Feature.instance().call(Feature.feature.fancybox.resizing, Resizing.fancybox_resizing_hide);
            // Delegate.delegate('fancybox_resizing_hide');
        }

        Feature.instance().call(
            Feature.feature.fancybox.saveImageButton,
            SaveImageButton.fancybox_add_save_image_button,
            this.personalization_form_instance.preview_controller,
            zp,
            is_in_preview,
            image_name,
            image_guid
        );

        // Delegate.delegate(
        //     'fancybox_add_save_image_button',
        //     $,
        //     zp,
        //     is_in_preview,
        //     image_name,
        //     image_guid
        // );
    }

    /**
     * @param {string} image_name
     * @param {string} image_guid
     * @param {jQuery|HTMLElement} $thumb
     */
    on_fancybox_complete(image_name, image_guid, $thumb) {
        Logger.debug('[ImageEditorController] Fancybox complete', image_name, image_guid, $thumb);
        let personalization_form_instance = this.personalization_form_instance;
        const zp = personalization_form_instance.data;
        const page = zp.template_details.pages[zp.current_page];

        //Define image edit context
        zp.image_edit = new ImageEditingContext({
            'url': {
                'image': zp.url.image,
                'user_image_template': zp.url['user-image-template']
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
            zp.image_edit.shape = page.shapes[image_name];
        }

        //Default values for options
        zp.image_edit.has_fit_in_field = true;

        //Add options' values
        if (zp.options['image-edit']) {
            const options = zp.options['image-edit'];

            zp.image_edit.has_fit_in_field = options['in-context']
                ? ('' + options['in-context']['@enabled']) !== '0'
                : true;
        }

        //Disable fit in field functionality if current page doesn't have shapes
        zp.image_edit.has_fit_in_field = zp.image_edit.has_fit_in_field && zp.image_edit.shape !== undefined;

        // zetaprint_image_editor.apply(zp.image_edit, [ $, { save: save_image_handler } ] );

        this.image_editor.load(zp.image_edit);
    }
}
