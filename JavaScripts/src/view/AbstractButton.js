/**
 * Created by cod on 27.4.17.
 */
import Assert from "../helper/Assert";
export default class AbstractButton {
    /**
     * @param {object} controller
     */
    constructor(controller) {
        Assert.assertObject(controller, 'controller');

        /**
         * @type {Object}
         * @protected
         */
        this._controller = controller;

        /**
         * @type {jQuery|HTMLLinkElement|HTMLElement}
         * @protected
         */
        this._button = null;

        this._assert_method_exists('add');
        this.add = this.add.bind(this);
        this._assert_method_exists('update');
        this.update = this.update.bind(this);
        this._assert_method_exists('remove');
        this.remove = this.remove.bind(this);
    }

    /**
     * @return {jQuery|HTMLLinkElement|HTMLElement}
     */
    get button() {
        return this._button;
    }

    /**
     * Adds the button if it does not already exist
     *
     * @param {object} controller
     * @param {DataInterface} data
     * @param {*[]} additional_arguments
     */

    /**
     * Adds the button if it does not already exist
     *
     * Returns TRUE if the button has been created, FALSE otherwise
     */
    add() {
        throw new Error('Not implemented');
    }

    /**
     * Change the button
     */
    update() {
        throw new Error('Not implemented');
    }

    /**
     * Remove the button
     *
     * May throw an error if the button does not exist
     */
    remove() {
        this._button.remove();
        this._button = null;
    }

    /**
     * @param {string} method_name
     * @private
     */
    _assert_method_exists(method_name) {
        if (typeof this['' + method_name] !== 'function') {
            throw new Error('Missing implementation for method ' + method_name);
        }
    }
}
