import Shape from './Shape';
import DataObject from './DataObject';

export default class Page extends DataObject {
    constructor(data) {
        super();

        /**
         * @type {string}
         */
        this.name = undefined;

        /**
         * @type {{}}
         */
        this.fields = undefined;

        /**
         * @type {boolean}
         */
        this.static = undefined;

        /**
         * @type {boolean}
         */
        this.is_updating = undefined;

        /**
         * @type {boolean}
         */
        this.preview_is_scaled = undefined;

        /**
         * @type {string}
         */
        this['preview-image'] = undefined;

        /**
         * @type {string}
         */
        this['thumb-image'] = undefined;

        /**
         * @type {number}
         */
        this['width-in'] = undefined;

        /**
         * @type {number}
         */
        this['height-in'] = undefined;

        /**
         * @type {number}
         */
        this['width-cm'] = undefined;

        /**
         * @type {number}
         */
        this['height-cm'] = undefined;

        /**
         * @type {string}
         */
        this['preview-url'] = undefined; // https://domain.tld/web-to-print/preview/get/guid/1234.jpg/

        /**
         * @type {string}
         */
        this['thumb-url'] = undefined; // https://domain.tld/web-to-print/thumbnail/get/guid/1234.jpg/width/100/height/100/

        /**
         * @type {object.<string, Shape>}
         */
        this.shapes = undefined;

        /**
         * @type {object.<string, {}>}
         */
        this.images = undefined;

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
