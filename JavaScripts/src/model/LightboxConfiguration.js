import LightboxCallbackConfiguration from './LightboxCallbackConfiguration';

export default class LightboxConfiguration extends LightboxCallbackConfiguration {
    constructor(data = {}) {
        super();

        /**
         * @type {number}
         */
        this.padding = 0;

        /**
         * @type {string}
         */
        this.type = null;

        /**
         * @type {string}
         */
        this.href = null;

        /**
         * @type {boolean}
         */
        this.autoCenter = false;

        /**
         * @type {boolean}
         */
        this.arrows = false;

        /**
         * @type {boolean}
         */
        this.closeClick = false;

        /**
         * @type {boolean}
         */
        this.showOverlay = true;

        /**
         * @type {boolean}
         */
        this.closeOnOverlayClick = true;

        /**
         * @type {boolean}
         */
        this.showCloseButton = true;

        /**
         * @type {boolean}
         */
        this.showTitle = false;

        this._assign_properties(data);
    }
}
