export default class ProductForm {
    /**
     * @param {jQuery|HTMLElement} element
     */
    constructor(element) {
        this._element = element;

        /**
         * @type {boolean}
         * @private
         */
        this._modified = false;

        /**
         * @type {boolean}
         * @private
         */
        this._user_data_changed = false;
    }

    /**
     * Append a child element to the form element
     *
     * @param {jQuery|HTMLElement} child
     * @return {ProductForm}
     */
    append(child) {
        this._element.append(child);

        return this;
    }

    /**
     * @return {boolean}
     */
    get modified() {
        return this._modified;
    }

    /**
     * Sets if the form has modifications
     *
     * If value is TRUE the class zp-not-modified will be added to the form, otherwise it will be removed
     *
     * @param {boolean} _modified
     */
    set modified(_modified) {
        if (this._modified === !!_modified) {
            return;
        }
        this._modified = _modified;
        if (_modified) {
            this._element.removeClass('zp-not-modified');
        } else {
            this._element.addClass('zp-not-modified');
        }
    }

    /**
     * @return {boolean}
     */
    get user_data_changed() {
        return this._user_data_changed;
    }

    /**
     * Sets if the form has changed user data
     *
     * If value is TRUE the class zp-user-data-changed will be added to the form, otherwise it will be removed
     *
     * @param {boolean} value
     */
    set user_data_changed(value) {
        if (this._user_data_changed === !!value) {
            return;
        }
        this._user_data_changed = value;
        if (value) {
            this._element.addClass('zp-user-data-changed');
        } else {
            this._element.removeClass('zp-user-data-changed');
        }
    }
}
