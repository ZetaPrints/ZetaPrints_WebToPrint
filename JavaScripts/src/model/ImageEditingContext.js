/**
 * Created by cod on 20.4.17.
 */
import DataObject from "./DataObject";
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
}