/**
 * Created by cod on 20.4.17.
 */
import Shape from "./Shape";
import DataObject from "./DataObject";

export default class Page extends DataObject {
    constructor(data) {
        super();

        /**
         * @type {string}
         */
        this.name = "";

        /**
         * @type {{}}
         */
        this.fields = {};

        /**
         * @type {boolean}
         */
        this.static = false;

        /**
         * @type {boolean}
         */
        this.is_updating = false;

        /**
         * @type {string}
         */
        this["preview-image"] = "";

        /**
         * @type {string}
         */
        this["thumb-image"] = "";

        /**
         * @type {number}
         */
        this["width-in"] = 0;

        /**
         * @type {number}
         */
        this["height-in"] = 0;

        /**
         * @type {number}
         */
        this["width-cm"] = 0;

        /**
         * @type {number}
         */
        this["height-cm"] = 0;

        /**
         * @type {string}
         */
        this["preview-url"] = ""; // https://domain.tld/web-to-print/preview/get/guid/1234.jpg/

        /**
         * @type {string}
         */
        this["thumb-url"] = ""; // https://domain.tld/web-to-print/thumbnail/get/guid/1234.jpg/width/100/height/100/

        /**
         * @type {object.<string, Shape>}
         */
        this.shapes = {};

        /**
         * @type {object.<string, {}>}
         */
        this.images = {};

        if (typeof data['shapes'] !== 'undefined') {
            data['shapes'] = this._transform_shapes(data['shapes']);
        }

        this._assign_properties(data);
    }

    /**
     * @param shapes
     * @return {Object.<string, Shape>}
     * @private
     */
    _transform_shapes(shapes) {
        let new_shapes = {};
        for (let shape_name in shapes) {
            if (shapes.hasOwnProperty(shape_name)) {
                new_shapes [shape_name] = new Shape(shapes[shape_name]);
            }
        }
        return new_shapes;
    }
}
