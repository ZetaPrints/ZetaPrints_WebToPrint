import Assert from './Assert';
import DataHelper from './DataHelper';
import NotificationCenter from '../NotificationCenter';
import GlobalEvents from '../GlobalEvents';

export default class MetaDataHelper {
    /**
     * Sets the metadata for the given field
     *
     * @param {object} field
     * @param {string} key
     * @param {*} value
     * @param {boolean} send_notification Defines if the USER_DATA_CHANGED notification will be sent
     */
    static set_metadata(field, key, value = undefined, send_notification = true) {
        Assert.assertObject(field, 'field');
        if (!key) {
            MetaDataHelper.clear_metadata(field, send_notification);

            return;
        }

        if (typeof key === 'object') {
            // Replace the whole metadata
            MetaDataHelper.replace_metadata(field, key, send_notification);

            return;
        }

        if (!field.metadata) {
            field.metadata = {};
        }

        field.metadata[key] = value;

        if (send_notification) {
            NotificationCenter.instance().notify(GlobalEvents.USER_DATA_CHANGED, {
                field,
                key,
                value: value || key
            });
        }
    }

    /**
     * Replaces the metadata for the given field
     *
     * @param {object} field
     * @param {object} metadata
     * @param {boolean} send_notification Defines if the USER_DATA_CHANGED notification will be sent
     */
    static replace_metadata(field, metadata, send_notification = true) {
        Assert.assertObject(field, 'field');
        if (!metadata) {
            MetaDataHelper.clear_metadata(field, send_notification);
            return;
        }

        Assert.assertObject(metadata, 'metadata');

        if (typeof metadata === 'object') {
            // Replace the whole metadata
            field.metadata = metadata;
        }

        if (send_notification) {
            NotificationCenter.instance().notify(GlobalEvents.USER_DATA_CHANGED, {
                field,
                metadata
            });
        }
    }

    /**
     * Returns the metadata for the given key
     *
     * @param {object} field
     * @param {string} key
     * @param {*} default_value
     * @return {*}
     */
    static get_metadata(field, key, default_value) {
        Assert.assertObject(field, 'field');
        if (!field.metadata || !field.metadata[key]) {
            return default_value;
        }

        return field.metadata[key];
    }

    /**
     * Clears the metadata of the given field
     *
     * @param {object} field
     * @param {boolean} send_notification Defines if the USER_DATA_CHANGED notification will be sent
     */
    static clear_metadata(field, send_notification = true) {
        Assert.assertObject(field, 'field');
        field.metadata = undefined;

        if (send_notification) {
            NotificationCenter.instance().notify(GlobalEvents.USER_DATA_CHANGED, {
                field
            });
        }
    }

    /**
     * @param {Page} page
     * @param {number|string} page_number
     * @return {Object[]}
     */
    static get_prepared_metadata_from_page(page, page_number) {
        Assert.assertNumeric(page_number, 'page_number');
        return MetaDataHelper._prepare_metadata_from_page(
            page,
            MetaDataHelper._prepare_post_data_for_php(DataHelper.serialize_fields_for_page(page_number))
        );
    }

    /**
     * Converts the metadata of the given field into a string
     *
     * @param {object} field
     * @return {string|null}
     */
    static _convert_metadata_to_string(field) {
        Assert.assertObject(field, 'field');
        let metadata = field.metadata;
        if (!metadata) {
            return null;
        }

        let parts = [];
        for (let key in metadata) {
            if (metadata.hasOwnProperty(key) && metadata[key] !== undefined) {
                parts.push(key + '=' + metadata[key]);
            }
        }

        return parts.join(';');
    }

    /**
     * @param {string} s
     * @return {string}
     * @private
     */
    static _prepare_string_for_php(s) {
        return s.replace(/\./g, '\x0A');
    }

    /**
     * @param {object[]} data
     * @return {object[]}
     * @private
     */
    static _prepare_post_data_for_php(data) {
        for (let i = 0, l = data.length; i < l; i++) {
            data[i].name = MetaDataHelper._prepare_string_for_php(data[i].name);
        }

        return data;
    }

    /**
     * @param {Page} page
     * @param {object[]}  data
     * @return {object[]}
     */
    static _prepare_metadata_from_page(page, data) {
        let metadata;
        let name;
        let l = data.length;

        const images = page.images;
        for (name in images) {
            if (images.hasOwnProperty(name) && (metadata = MetaDataHelper._convert_metadata_to_string(images[name]))) {
                data[l++] = {
                    name: 'zetaprints-*#' + MetaDataHelper._prepare_string_for_php(name),
                    value: metadata
                };
            }
        }
        const fields = page.fields;
        for (name in fields) {
            if (fields.hasOwnProperty(name) && (metadata = MetaDataHelper._convert_metadata_to_string(fields[name]))) {
                data[l++] = {
                    name: 'zetaprints-*_' + MetaDataHelper._prepare_string_for_php(name),
                    value: metadata
                };
            }
        }

        return data;
    }
}
