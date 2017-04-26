import Logger from '../Logger';

import $ from '../jQueryLoader';
import Feature from "../Feature";
import SaveImageButton from "../fancybox/SaveImageButton";
import LightboxConfiguration from "../model/LightboxConfiguration";
import Assert from "../helper/Assert";
import AbstractLightbox from "./AbstractLightbox";
import NotificationHelper from "../NotificationCenter";

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
        const notification_center = NotificationHelper.instance();
        const notification_data = {
            instance: this,
            image_name,
            image_guid,
            $thumb
        };

        const configuration = new LightboxConfiguration({
            'padding': 0,
            'showTitle': false,
            'type': 'ajax',
            'href': this.href,
            'showCloseButton': true,
            'willShow': () => {
                notification_center.notify(ImageEditorLightbox.Events.DID_SHOW, notification_data);
            },
            'didShow': () => {
                Logger.debug('[ImageEditorLightbox] Fancybox complete');
                this.image_editor_controller.on_fancybox_complete(image_name, image_guid, $thumb);
                notification_center.notify(ImageEditorLightbox.Events.DID_SHOW, notification_data);
            },
            'willClose': () => {
                Logger.debug('[ImageEditorLightbox] Fancybox cleanup');
                this.image_editor_controller.image_editor.close();
                notification_center.notify(ImageEditorLightbox.Events.WILL_CLOSE, notification_data);
            },
            'didClose': () => {
                Logger.debug('[ImageEditorLightbox] Fancybox closed');
                Feature.instance().call(Feature.feature.fancybox.saveImageButton, SaveImageButton.fancybox_remove_save_image_button);
                notification_center.notify(ImageEditorLightbox.Events.DID_CLOSE, notification_data);
            },
        });

        $.fancybox(this._prepare_options(configuration));
    }
}

ImageEditorLightbox.Events = {
    WILL_SHOW: 'ImageEditorLightbox.Events.WILL_SHOW',
    DID_SHOW: 'ImageEditorLightbox.Events.DID_SHOW',
    WILL_CLOSE: 'ImageEditorLightbox.Events.WILL_CLOSE',
    DID_CLOSE: 'ImageEditorLightbox.Events.DID_CLOSE',
};
