/**
 * Created by cod on 10.4.17.
 */
export default  class FakeAddToCartButton {
    /**
     * @param {jQuery} original_button
     */
    constructor(original_button) {
        this.original_button = original_button;
    }

    /**
     * @param {boolean} is_multipage_template
     */
    add(is_multipage_template) {
        const title = this.original_button.attr('title');
        const notice = is_multipage_template ? window.notice_to_update_preview_text_for_multipage_template : window.notice_to_update_preview_text;

        const $fake_button_with_notice = $(
            '<button id="zetaprints-fake-add-to-cart-button" ' +
            'class="button disabled" type="button" ' +
            'title="' + title + '">' +
            '<span><span>' + title + '</span></span>' +
            '</button>' +
            '<span id="zetaprints-fake-add-to-cart-warning" ' +
            'class="zetaprints-notice to-update-preview">' +
            notice +
            '</span>');

        this.original_button.addClass('no-display').after($fake_button_with_notice);
    }

    remove() {
        $('#zetaprints-fake-add-to-cart-button, ' +
            '#zetaprints-fake-add-to-cart-warning').remove();
        this.original_button.removeClass('no-display');
    }
}