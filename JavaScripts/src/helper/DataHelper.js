/**
 * Created by cod on 26.4.17.
 */
import NotificationCenter from "../NotificationCenter";
import GlobalEvents from "../GlobalEvents";
import Assert from "./Assert";
export default class DataHelper {
    /**
     * @param {number} page_number
     * @return {boolean}
     * @api
     */
    static has_changed_fields_on_page(page_number) {
        let $fields = $('#input-fields-page-' + page_number + ', ' +
            '#stock-images-page-' + page_number);

        if (!$fields.length) {
            return false;
        }

        const $filtered_fields = $fields
            .find('*[name^="zetaprints-_"], *[name^="zetaprints-#"]')
            .filter('textarea, select, :text, :checked')
            .filter('*[type!=hidden]');

        const length = $filtered_fields.length;
        if (!length) {
            return false;
        }

        for (let i = 0; i < length; i++) {
            if ($($filtered_fields[i]).val()) {
                return true;
            }
        }

        return false;
    }

    /**
     * @param {TemplateDetail} details
     * @return {boolean}
     * @api
     */
    static is_all_pages_updated(details) {
        let page_number;
        const pages = details.pages;
        for (page_number in pages) {
            if (pages.hasOwnProperty(page_number) && !details.pages[page_number]['updated-preview-image']) {
                return false;
            }
        }

        return true;
    }

    /**
     * @param {Page} page
     * @param {boolean} send_notification
     * @api
     */
    static store_user_data(page, send_notification = true) {
        let name;
        const fields = page.fields;
        const images = page.images;

        for (name in fields) {
            if (fields.hasOwnProperty(name)) {
                if (!fields[name].value) {
                    fields[name].value = '';
                }

                fields[name].previous_value = fields[name].value;
            }
        }

        for (name in images) {
            if (images.hasOwnProperty(name)) {
                if (!images[name].value) {
                    images[name].value = '#';
                }

                images[name].previous_value = images[name].value;
            }
        }

        if (send_notification) {
            NotificationCenter.instance().notify(GlobalEvents.USER_DATA_SAVED, {instance: this, fields, images, page});
        }
    }

    /**
     * @param {Page} page
     * @return {boolean}
     */
    static is_user_data_changed(page) {
        let name;
        const fields = page.fields;
        const images = page.images;

        for (name in fields) {
            if (fields.hasOwnProperty(name)
                && typeof fields[name].previous_value !== 'undefined'
                && fields[name].previous_value !== fields[name].value
            ) {
                return true;
            }
        }
        for (name in images) {
            if (images.hasOwnProperty(name)
                && typeof images[name].previous_value !== 'undefined'
                && images[name].previous_value !== images[name].value
            ) {
                return true;
            }
        }
        return false;
    }

    /**
     * @param {Object.<string, Page>} pages
     * @return {boolean}
     * @api
     */
    static page_has_updating(pages) {
        for (let n in pages) {
            if (pages.hasOwnProperty(n) && typeof pages[n].is_updating !== 'undefined' && pages[n].is_updating) {
                return true;
            }
        }

        return false;
    }

    /**
     * @param {TemplateDetail} details
     * @return {string}
     * @api
     */
    static export_previews_to_string(details) {
        let previews = '';
        let number;

        const pages = details.pages;
        for (number in pages) {
            if (pages.hasOwnProperty(number)) {
                const page = pages[number];

                if (page['updated-preview-image']) {
                    previews += ',' + page['updated-preview-image'].split('preview/')[1];
                }
            }
        }

        return previews.substring(1);
    }

    /**
     * @param {number} page_number
     * @return {object[]}
     */
    static serialize_fields_for_page(page_number) {
        Assert.assertNumeric(page_number, 'page_number');
        return $(
            [
                '#input-fields-page-' + page_number,
                '#stock-images-page-' + page_number
            ].join(', ')
        )
            .find('.zetaprints-field')
            .filter(':text, textarea, :checked, select, [type="hidden"]')
            .serializeArray();
    }
}
