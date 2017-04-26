/**
 * Created by cod on 19.4.17.
 */
import Logger from './Logger';

export default class Delegate {
    /**
     * @param {string|function} method Invokes the method if exists
     * @param {*} forward_arguments Arguments to forward to the method
     * @return {*}
     */
    static delegate(method, ...forward_arguments) {
        if (typeof method === 'function') {
            return method(...forward_arguments);
        }

        if (typeof window[method] === 'function') {
            return window[method](...forward_arguments);
        }

        Logger.warn(`Delegate "${method}" not found`);

        return undefined;
    }
}