/**
 * Created by cod on 26.4.17.
 */
import Logger from './Logger';
import Assert from "./helper/Assert";

export default class NotificationCenter {
    /**
     * @return {NotificationCenter}
     */
    static instance() {
        if (!NotificationCenter._instance) {
            NotificationCenter._instance = new NotificationCenter();
        }
        return NotificationCenter._instance;
    }

    /**
     *
     */
    constructor() {
        if (NotificationCenter._instance) {
            Logger.error('An instance of NotificationCenter already exists');
        }

        /**
         * @type {object.<string, function[]>}
         * @private
         */
        this._listeners = {};
    }

    /**
     * Notify all listeners of the given event
     *
     * @param {string} event_name
     * @param {object} data
     * @return {NotificationCenter}
     */
    notify(event_name, data = {}) {
        Assert.assertString(event_name, 'event_name');
        Assert.assertObject(data, 'data');

        jQuery(document).trigger(event_name, data);

        const all_listeners = this._listeners[event_name];
        if (typeof all_listeners === 'undefined') {
            Logger.debug(`[NotificationCenter] Dispatch notification ${event_name}: No listeners`);
            return this;
        }

        Logger.debug(`[NotificationCenter] Dispatch notification ${event_name}: ${all_listeners.length} listeners`);

        all_listeners.forEach((listener) => {
            try {
                listener(event_name, data);
            } catch (e) {
                Logger.warn('[NotificationCenter] Caught error during notifying ' + e);
            }
        });

        return this;
    }

    /**
     * Register a listener function for the given event
     *
     * @param {string} event_name
     * @param {function} listener
     * @return {NotificationCenter}
     */
    register(event_name, listener) {
        Assert.assertString(event_name, 'event_name');
        Assert.assertFunction(listener, 'listener');

        const all_listeners = this._listeners;
        if (typeof all_listeners[event_name] === 'undefined') {
            all_listeners[event_name] = [];
        }
        all_listeners[event_name].push(listener);

        return this;
    }
}

/**
 * @type {NotificationCenter}
 * @private
 */
NotificationCenter._instance = null;
