import $ from './jQueryLoader';
import NotificationHelper from './NotificationCenter';
import GlobalEvents from './GlobalEvents';
import Assert from './helper/Assert';

require('./ajaxupload.js');

/* jshint unused:false */
class UploadResult {
    constructor() {
        this.guid = '';
        this.thumbnail = '';
        this.thumbnail_url = '';
        this.error = undefined;
    }
}

export default class ImageUpload {
    /**
     * @param {Element} button
     * @param {PersonalizationForm} personalization_form
     */
    constructor(button, personalization_form) {
        Assert.assertDomElement(button);
        this.personalization_form = personalization_form;

        /**
         * @type {jQuery}
         * @private
         */
        this._button = $(button);

        this._on_image_added = this._on_image_added.bind(this);
        this._upload_complete = this._upload_complete.bind(this);
        this._enable = this._enable.bind(this);

        this._initialize();
    }

    /**
     * @private
     */
    _initialize() {
        const button = this._button;
        /**
         * @type {AjaxUpload|Window.AjaxUpload}
         */
        let uploader = new AjaxUpload(button, {
            name: 'customer-image',
            action: this.personalization_form.data.url.upload,
            responseType: 'json',
            autoSubmit: true,
            onChange: (file) => {
                button
                    .parents('.upload')
                    .find('input.file-name')
                    .val(file);
            },
            onSubmit: (_, _2, uploader) => {
                this._set_upload_active(uploader);
            },
            onComplete: (file, response, uploader) => {
                this._upload_complete(file, response, uploader);
            },
            onError: (_, _2, uploader) => {
                this._enable_and_hide_spinner(uploader);
            }
        });

        const _this = this;
        $(
            'div.button.cancel-upload',
            button.parent()
        ).click(function () {
            if (!$(this).hasClass('disabled')) {
                uploader.cancel();
                _this._enable_and_hide_spinner(uploader);
            }
        });
    }

    /**
     * @param {AjaxUpload} uploader
     * @private
     */
    _set_upload_active(uploader) {
        this._button //Choose button
            .addClass('disabled')
            .next() //Cancel button
            .removeClass('disabled')
            .next() //Spinner
            .show();

        uploader.disable();
    }

    /**
     * @param {AjaxUpload} uploader
     * @private
     */
    _enable_and_hide_spinner(uploader) {
        const spinner = this._enable(uploader);
        spinner.hide();
    }

    /**
     * @param {AjaxUpload} uploader
     * @returns {jQuery} Returns the spinner element
     * @private
     */
    _enable(uploader) {
        uploader.enable();

        const choose_button = this._button.removeClass('disabled');
        const cancel_button = choose_button.next().addClass('disabled');

        // Clear the input field
        choose_button.parents('.upload').find('input.file-name').val('');

        return cancel_button.next();
    }

    /**
     * @param {string} file
     * @param {UploadResult} response
     * @param {AjaxUpload} uploader
     * @private
     */
    _upload_complete(file, response, uploader) {
        const _on_image_added = this._on_image_added;
        const spinner = this._enable(uploader);

        if ('' + response === 'Error' || typeof response['error'] !== 'undefined') {
            spinner.hide();
            alert(uploading_image_error_text);

            return;
        }

        const upload_div = this._button.parents('.upload');
        const notification_data = {instance: this, file: file, response: response, uploadDiv: upload_div};
        NotificationHelper.instance().notify(AjaxUpload.Events.UPLOAD_COMPLETE, notification_data);
        NotificationHelper.instance().notify(ImageUpload.Events.UPLOAD_COMPLETE, notification_data);
        NotificationHelper.instance().notify(GlobalEvents.USER_DATA_CHANGED, notification_data);

        const $selector = upload_div.parents('.selector-content');
        const upload_field_id = $selector.attr('id');
        const trs = $selector.find('.tab.user-images table tr');

        this.number_of_loaded_imgs = 0;

        this.personalization_form.add_image_to_gallery(response.guid, response.thumbnail, function () {
            /** @type {HTMLImageElement} */
            const element = this;

            _on_image_added(element, upload_field_id, trs, upload_div, spinner, $selector);
        });
    }

    /**
     * @param {HTMLImageElement} element
     * @param {string} upload_field_id
     * @param {jQuery} trs
     * @param {jQuery} upload_div
     * @param {jQuery} spinner
     * @param {jQuery} selectors
     * @private
     */
    _on_image_added(element, upload_field_id, trs, upload_div, spinner, selectors) {
        /** @type {jQuery} */
        const $td = $(element).parents('td');

        const field_id = $td
            .parents('.selector-content')
            .attr('id');

        //If a field the image was uploaded into is not current image field
        if ('' + field_id !== '' + upload_field_id) {
            const $scroll = $td.parents('.images-scroller');

            //Scroll stripper to save position of visible images
            $scroll.scrollLeft($scroll.scrollLeft() + $td.outerWidth());
        } else {
            $td
                .children('.zetaprints-images')
                .click();
        }

        if (++this.number_of_loaded_imgs === trs.length) {
            const $images_div = upload_div.next();

            spinner.hide();

            // Show the current image selector's "My images" tab
            //$selector
            //    .find('> .tab-buttons > .hidden')
            //    .removeClass('hidden');

            // Show all "My images" tabs
            $td.closest('form')
                .find('.tab-buttons > .hidden')
                .removeClass('hidden');

            this.personalization_form.scroll_strip($images_div);

            selectors.tabs('option', 'active', 1);
        }
    }
}

ImageUpload.Events = {
    UPLOAD_COMPLETE: 'ImageUpload.Events.UPLOAD_COMPLETE',
};
