import DataObject from './DataObject';

export default class ProcessedImageData extends DataObject {
    constructor(data) {
        super();

        /**
         * @type {ImageEditingContext}
         */
        this.context = undefined;
        /**
         * @type {string}
         */
        this.source = undefined;
        /**
         * @type {number}
         */
        this.preview_width = undefined;
        /**
         * @type {number}
         */
        this.preview_height = undefined;
        /**
         * @type {number}
         */
        this.width = undefined;
        /**
         * @type {number}
         */
        this.height = undefined;
        /**
         * @type {number}
         */
        this.undo_width = undefined;
        /**
         * @type {number}
         */
        this.undo_height = undefined;

        this._assign_properties(data);
    }
}
