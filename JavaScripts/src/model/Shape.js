/**
 * Created by cod on 20.4.17.
 */
import DataObject from "./DataObject";
export default class Shape extends DataObject {
    constructor(data) {
        super();

        this.name = '';
        this.top = 0;
        this.left = 0;
        this.visual_width = 0;
        this.visual_height = 0;
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
        this.hidden = false;
        this['has-value'] = false;
        this['anchor-x'] = 0;
        this['anchor-y'] = 0;

        this._assign_properties(data);
    }
}
