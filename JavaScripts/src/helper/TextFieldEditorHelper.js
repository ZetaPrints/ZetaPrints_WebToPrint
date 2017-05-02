import Assert from "./Assert";
import TextFieldEditor from "../view/TextFieldEditor";

export default class TextFieldEditorHelper {
    /**
     * Move the TextField Editor to another element
     * @param {jQuery|HTMLElement} element
     * @param {jQuery|HTMLElement} target
     */
    static move(element, target) {
        Assert.assertjQueryOrDomElement(element);
        const editor = $(element).data('text-field-editor');
        if (editor) {
            editor.move(target);
        }
    }

    /**
     * Hide the TextField Editor if the element has one attached
     *
     * @param {jQuery|HTMLElement} element
     */
    static hide(element) {
        Assert.assertjQueryOrDomElement(element);
        const editor = $(element).data('text-field-editor');
        if (editor) {
            editor.hide();
        }
    }

    /**
     * Attach a new TextField Editor instance to the element
     *
     * @param {jQuery|HTMLElement} element
     * @param {object} options
     */
    static init(element, options) {
        Assert.assertjQueryOrDomElement(element);
        Assert.assertObject(options);

        $(element).data('text-field-editor', new TextFieldEditor(element, options))
    }
}
