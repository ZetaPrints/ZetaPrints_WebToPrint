/**
 * Created by cod on 25.4.17.
 */
/**
 * Created by cod on 10.4.17.
 */

import $ from "../../jQueryLoader";

export default class Fancybox {
    /**
     * @return {jQuery|HTMLElement}
     */
    get close_button() {
        return $('#fancybox-close, .fancybox-close');
    }

    /**
     * @return {jQuery|HTMLElement}
     */
    get outer() {
        return $('#fancybox-outer, .fancybox-outer');
    }

    /**
     * @return {*|jQuery|HTMLElement}
     */
    get content() {
        return $('#fancybox-content');
    }

    /**
     * @return {*|jQuery|HTMLElement}
     */
    get wrap() {
        return $('#fancybox-wrap, .fancybox-wrap');
    }

    /**
     * @return {*|jQuery|HTMLElement}
     */
    get resize() {
        return $('#fancybox-resize');
    }

    /**
     * @return {*|jQuery|HTMLElement}
     */
    get overlay() {
        return $('#fancybox-overlay, .fancybox-overlay');
    }

    /**
     * @return {*|jQuery|HTMLElement}
     */
    get image() {
        return $(this.image_selector);
    }

    /**
     * @return {string}
     */
    get image_selector() {
        return '#fancybox-img, .fancybox-image';
    }
}
