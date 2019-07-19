import DataObject from './DataObject';

export default class TemplateDetail extends DataObject {
    constructor(data) {
        super();
        this.guid = '';
        this.created = ''; // Y-m-d H:i:s
        this.comments = '';
        this.url = '';
        this.download = false;
        this.missed_pages = '';
        this.pdf = true;
        this.jpeg = false;
        this.png = false;
        this.pages_number = 0;
        this['corporate-guid'] = '';
        this['product-reference'] = '';
        this['dataset-integrity-enforce'] = false;

        /** @type {Page[],object} */
        this.pages = {};

        this._assign_properties(data);
    }
}
