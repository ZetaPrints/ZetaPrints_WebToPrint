/**
 * Created by cod on 24.4.17.
 */
import DataObject from "./DataObject";

export default class MetaData extends DataObject {
    constructor(data) {
        super();

        /**
         * @type {number}
         */
        this['cr-x1'] = undefined;
        /**
         * @type {number}
         */
        this['cr-x2'] = undefined;
        /**
         * @type {number}
         */
        this['cr-y1'] = undefined;
        /**
         * @type {number}
         */
        this['cr-y2'] = undefined;
        /**
         * @type {number}
         */
        this['abs-x1'] = undefined;
        /**
         * @type {number}
         */
        this['abs-y1'] = undefined;
        /**
         * @type {number}
         */
        this['abs-x2'] = undefined;
        /**
         * @type {number}
         */
        this['abs-y2'] = undefined;

        this._assign_properties(data);
    }
}