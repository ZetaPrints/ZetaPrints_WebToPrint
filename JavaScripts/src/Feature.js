import Logger from './Logger';

export default class Feature {
    /**
     * @return {Feature}
     */
    static instance() {
        if (!Feature._instance) {
            Feature._instance = new Feature();
        }
        return Feature._instance;
    }

    /**
     * @param {string[]} activated_features
     */
    constructor(activated_features = []) {
        if (Feature._instance) {
            Logger.error('An instance of Feature already exists');
        }

        Feature._instance = this;
        this._activated_features = activated_features;
    }

    /**
     * Invokes the given feature method if the feature is enabled
     *
     * @param {string} feature_name
     * @param {function} feature_method
     * @param {*} args
     * @return {*}
     */
    call(feature_name, feature_method, ...args) {
        if (typeof feature_name !== 'string') {
            throw new TypeError('Argument feature_name must be of type "string"');
        }
        if (typeof feature_method !== 'function') {
            throw new TypeError('Argument feature_method must be of type "function"');
        }

        if (this.is_activated(feature_name)) {
            const function_name = this._get_function_name('' + feature_method);
            Logger.debug(`[Feature] Call '${function_name}' for ${feature_name}`);

            return feature_method(...args);
        }

        Logger.warn(`[Feature] ${feature_name} not activated`);

        return undefined;
    }

    /**
     * @param {string} feature_name
     * @return {boolean}
     */
    is_activated(feature_name) {
        if (typeof feature_name !== 'string') {
            throw new TypeError('Argument feature_name must be of type "string"');
        }

        return -1 !== this._activated_features.indexOf(feature_name);
    }

    /**
     * @return {{dataset: string, inPreviewEdit: string, fancybox: {saveImageButton: string, selectImage: string, resizing: string, updatePreview: string}}}
     */
    static get feature() {
        return {
            dataset: 'Dataset',
            inPreviewEdit: 'InPreviewEdit',
            textFieldEditor: 'textFieldEditor',
            fancybox: {
                resizing: 'Fancybox/Resizing',
                saveImageButton: 'Fancybox/SaveImageButton',
                selectImage: 'Fancybox/SelectImage',
                updatePreview: 'Fancybox/UpdatePreviewButton',
            }
        };
    }

    /**
     * @param {string} feature_method
     * @return {string}
     * @private
     */
    _get_function_name(feature_method) {
        const method_dump = ('' + feature_method);

        if (method_dump.substr(0, 11) === 'function ()') {
            return 'anonymous function';
        }

        return method_dump.substring(9, method_dump.indexOf(' {'));
    }
}

/**
 * @type {Feature}
 * @private
 */
Feature._instance = null;
