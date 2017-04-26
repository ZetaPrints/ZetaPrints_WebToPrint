/**
 * Created by cod on 20.4.17.
 */
import DataObject from "./DataObject";
export default class Image extends DataObject {
    constructor(data) {
        super();

        this.name = "Photo";
        this.width = 414;
        this.height = 314;
        this.clipped = false;
        this.palette = null;
        this.value = null;
        this['color-picker'] = null;
        this['allow-upload'] = true;
        this['allow-url'] = false;

        this._assign_properties(data);
    }
}