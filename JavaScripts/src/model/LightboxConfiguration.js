/**
 * Created by cod on 20.4.17.
 */
import DataObject from "./DataObject";
export default class LightboxConfiguration extends DataObject {
    constructor(data) {
        super();
        const ef = () => {
        };

        this.padding = 0;
        /**
         * @type {string}
         */
        this.type = null;
        /**
         * @type {string}
         */
        this.href = null;
        this.autoCenter = false;
        this.arrows = false;
        this.closeClick = false;
        this.showOverlay = true;
        this.closeOnOverlayClick = false;
        this.showTitle = false;

        this.willShow = ef;
        this.didShow = ef;
        this.willClose = ef;
        this.didClose = ef;

        this._assign_properties(data);
    }
}
