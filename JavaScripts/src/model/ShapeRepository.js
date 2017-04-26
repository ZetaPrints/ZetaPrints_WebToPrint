/**
 * Created by cod on 21.4.17.
 */
export default class ShapeRepository {
    /**
     * @param {PersonalizationForm} personalisation_form
     */
    constructor(personalisation_form) {
        this.personalisation_form = personalisation_form;
    }

    /**
     * @param {number} page_number
     * @return {Object.<string, Shape>}
     */
    get_shapes(page_number) {
        if (isNaN(parseInt(page_number, 10))) {
            throw new TypeError('Argument "page_number" must be of type "number"');
        }
        const pages = this.personalisation_form.data.template_details.pages;

        if (typeof pages[page_number] === 'object') {
            return pages[page_number].shapes;
        }

        return undefined;
    }

    /**
     * @return {Object.<string, Shape>}
     */
    get_shapes_of_current_page() {
        const current_page = this.personalisation_form.data.current_page;
        if (!current_page) {
            return undefined;
        }

        return this.get_shapes(current_page);
    }

    /**
     * @param {number} page_number
     * @param {string} name
     * @return {Shape}
     */
    get_shape(page_number, name) {
        if (typeof name !== 'string') {
            throw new TypeError('Argument "name" must be of type "string"');
        }

        const shapes = this.get_shapes(page_number);
        if (shapes) {
            return shapes[name];
        }

        return undefined;
    }
}