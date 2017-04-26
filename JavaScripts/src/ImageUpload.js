/**
 * Created by cod on 7.4.17.
 */
import $ from './jQueryLoader';

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
        this.personalization_form = personalization_form;
        this._on_image_added = this._on_image_added.bind(this);
        const _upload_complete = this._upload_complete = this._upload_complete.bind(this);
        const _enable = this._enable = this._enable.bind(this);

        let uploader = new AjaxUpload(button, {
            name: 'customer-image',
            action: personalization_form.data.url.upload,
            responseType: 'json',
            autoSubmit: true,
            onChange: function (file, extension) {
                $(this._button)
                    .parents('.upload')
                    .find('input.file-name')
                    .val(file);
            },
            onSubmit: function (file, extension) {
                $(this._button) //Choose button
                    .addClass('disabled')
                    .next() //Cancel button
                    .removeClass('disabled')
                    .next() //Spinner
                    .show();

                this.disable();
            },
            onComplete: function (file, response) {
                _upload_complete(file, response, this);
            }
        });

        $(
            'div.button.cancel-upload',
            $(button).parent()
        ).click(function () {
            if (!$(this).hasClass('disabled')) {
                uploader.cancel();

                const spinner = _enable(uploader);
                spinner.hide();
            }
        });
    }

    /**
     * @param {AjaxUpload} uploader
     * @returns {jQuery} Returns the spinner element
     * @private
     */
    _enable(uploader) {
        uploader.enable();

        const choose_button = $(uploader._button).removeClass('disabled');
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

        const upload_div = $(uploader._button).parents('.upload');
        jQuery(document).trigger(AjaxUpload.Events.UPLOAD_COMPLETE, {
            instance: self,
            file: file,
            response: response,
            uploadDiv: upload_div
        });

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
