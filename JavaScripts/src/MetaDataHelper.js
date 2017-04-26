export default class MetaDataHelper {
    static zp_set_metadata(field, key, value) {
        if (!key)
            MetaDataHelper.zp_clear_metadata(field);
        else if (typeof key === 'object')
            field.metadata = key;
        else {
            if (!field.metadata)
                field.metadata = {};

            field.metadata[key] = value;
        }
    }

    static zp_get_metadata(field, key, default_value) {
        if (!field.metadata || !field.metadata[key])
            return default_value;

        return field.metadata[key];
    }

    static zp_clear_metadata(field) {
        field.metadata = undefined;
    }

    static zp_convert_metadata_to_string(field) {
        let metadata = field.metadata;
        if (!metadata)
            return null;

        let s = '';

        for (let key in metadata) {
            if (metadata.hasOwnProperty(key) && metadata[key] !== undefined) {
                s += key + '=' + metadata[key] + ';';
            }
        }

        return s.substring(0, s.length - 1);
    }

}

