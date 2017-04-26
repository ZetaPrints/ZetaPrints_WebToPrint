import Logger from '../Logger';

import $ from '../jQueryLoader';
import Feature from "../Feature";
import SaveImageButton from "../fancybox/SaveImageButton";
import LightboxConfiguration from "../model/LightboxConfiguration";
import ImageEditor from "../ImageEditor";
import Assert from "../helper/Assert";
import AbstractLightbox from "./AbstractLightbox";

export default class ImageEditorLightbox extends AbstractLightbox {
    /**
     * @param {string} href
     * @param {ImageEditorController} image_editor_controller
     */
    constructor(href, image_editor_controller) {
        super();
        Assert.assertString(href);

        this.href = href;
        this.image_editor_controller = image_editor_controller;
    }

    /**
     * @param {string} image_name
     * @param {string} image_guid
     * @param {jQuery|HTMLElement} $thumb
     */
    open(image_name, image_guid, $thumb) {
        Logger.debug('[ImageEditorLightbox] open');

        const configuration = new LightboxConfiguration({
            'padding': 0,
            'titleShow': false,
            'type': 'ajax',
            'href': this.href,
            closeBtn: true,
            'willShow': () => {
                // Logger.debug('[ImageEditorLightbox] Custom Fancybox start');
                // this.image_editor_controller.on_fancybox_start(image_name, image_guid);
            },
            'didShow': () => {
                Logger.debug('[ImageEditorLightbox] Custom Fancybox start');
                this.image_editor_controller.on_fancybox_start(image_name, image_guid);

                Logger.debug('[ImageEditorLightbox] Fancybox complete');
                this.image_editor_controller.on_fancybox_complete(image_name, image_guid, $thumb);
            },
            'willClose': () => {
                Logger.debug('[ImageEditorLightbox] Fancybox cleanup');
                this.image_editor_controller.image_editor.close();
            },
            'didClose': () => {
                Logger.debug('[ImageEditorLightbox] Fancybox closed');

                Feature.instance().call(Feature.feature.fancybox.saveImageButton, SaveImageButton.fancybox_remove_save_image_button);
                // Delegate.delegate('fancybox_remove_save_image_button', $);
            },
        });

        $.fancybox(this._prepare_options(configuration));
    }
}
