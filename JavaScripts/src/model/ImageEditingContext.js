import $ from './../jQueryLoader';
import DataObject from './DataObject';
import PersonalizationForm from '../PersonalizationForm';
import Assert from '../helper/Assert';
import Logger from '../Logger';

export default class ImageEditingContext extends DataObject {
    constructor(data) {
        super();

        /**
         * @type {object}
         */
        this.url = {};
        this.image_id = '';
        this.page = {
            'width_in': 0,
            'height_in': 0
        };
        this.image = {};
        this.placeholder = {};
        this.upload_image_by_url = () => {
        };
        this.shape = undefined;
        this.has_fit_in_field = true;

        this.container = {
            width: 0,
            height: 0
        };

        /**
         * @type {jQuery}
         */
        this.$selected_thumbnail = {};

        /**
         * !!! Temp solution
         * @type {jQuery}
         * @internal
         */
        this.$input = {};

        /**
         * Reference to the Image Editor's save()
         */
        this.save = () => {
        };

        /**
         * Reference to the Image Editor's reload_image()
         */
        this.reload_image = () => {
        };

        this._assign_properties(data);
    }

    /**
     * Returns the thumbnail element connected to this context
     *
     * @return {jQuery}
     */
    get_thumbnail_outlet() {
        return this.$selected_thumbnail;
    }

    /**
     * Create a new context instance with the merged data from this instance and the parameter
     *
     * @param {object|ImageEditingContext} context_data
     * @return {ImageEditingContext}
     */
    merge(context_data) {
        return new ImageEditingContext(Object.assign({}, this, context_data));
    }

    /**
     * Create a new context from the given HTML input element
     *
     * @param {PersonalizationForm} form_instance
     * @param {jQuery|HTMLElement} input
     * @return {ImageEditingContext}
     */
    static create_from_input(form_instance, input) {
        Assert.assertInstanceOf(form_instance, PersonalizationForm);
        Assert.assertjQueryOrDomElement(input);
        const jQueryElement = $(input);
        const element = jQueryElement.get(0);

        if (!element.name) {
            throw new ReferenceError('Input element must have the property "name"');
        }
        if (!element.value) {
            throw new ReferenceError('Input element must have the property "value"');
        }
        const image_name = element.name.substr(12);
        const image_guid = element.value;

        return ImageEditingContext.create(
            form_instance,
            image_name,
            image_guid,
            jQueryElement.siblings('.image-edit-thumb')
        );
    }

    /**
     * @param {PersonalizationForm} form_instance
     * @param {string} image_name
     * @param {string} image_guid
     * @param {jQuery} image_thumbnail
     * @return {ImageEditingContext}
     */
    static create(form_instance, image_name, image_guid, image_thumbnail) {
        Assert.assertInstanceOf(form_instance, PersonalizationForm);
        Assert.assertjQuery(image_thumbnail, 'image_thumbnail');
        if (image_thumbnail.length === 0) {
            Logger.warn('[ImageEditingContext] jQuery image thumbnail element is empty');
        }
        const data = form_instance.data;
        const page = data.template_details.pages[data.current_page];

        // Define image edit context
        const image_edit = new ImageEditingContext({
            'url': {
                'image': data.url.image,
                'user_image_template': data.url['user-image-template']
            },
            '$selected_thumbnail': image_thumbnail,
            //!!! Temp solution
            '$input': image_thumbnail.parents().children('input.zetaprints-images'),
            'image_id': image_guid,
            'page': {
                'width_in': page['width-in'],
                'height_in': page['height-in']
            },
            'placeholder': page.images[image_name],
            'upload_image_by_url': form_instance.upload_image_by_url
        });

        //Check if current page has shapes and then add shape info to the image edit context
        if (page.shapes) {
            image_edit.shape = page.shapes[image_name];
        }

        //Default values for options
        image_edit.has_fit_in_field = true;

        //Add options' values
        if (data.options['image-edit']) {
            const options = data.options['image-edit'];

            image_edit.has_fit_in_field = options['in-context']
                ? ('' + options['in-context']['@enabled']) !== '0'
                : true;
        }

        // Disable fit in field functionality if current page doesn't have shapes
        image_edit.has_fit_in_field = image_edit.has_fit_in_field && image_edit.shape !== undefined;

        return image_edit;
    }
}
