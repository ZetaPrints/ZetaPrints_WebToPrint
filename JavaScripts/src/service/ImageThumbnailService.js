/**
 * Created by cod on 4.7.17.
 */
import ImageEditingContext from "../model/ImageEditingContext";
import Assert from "../helper/Assert";
export default class ImageThumbnailService {
    /**
     * Update the thumbnail images for the given context
     *
     * @param {ImageEditingContext} context
     * @param {string} source
     * @return {jQuery}
     */
    update_images_for_editing_context(context, source) {
        Assert.assertInstanceOf(context, ImageEditingContext, 'context');

        return this.update_images_with_id(context.image_id, source);
    }

    /**
     * Update the thumbnail images with the given ID
     *
     * @param {string} image_id
     * @param {string} source
     * @return {jQuery}
     */
    update_images_with_id(image_id, source) {
        let thumbnails = $('input[value="' + image_id + '"]').parent().find('img');
        console.log('tmp1', thumbnails);

        if (thumbnails.length === 0) {
            thumbnails = $('#img' + image_id);
        }
        if (thumbnails.length > 0) {
            if (source.match(/\.jpg/m)) {
                thumbnails.attr('src', source.replace(/\.(jpg|gif|png|jpeg|bmp)/i, "_0x100.jpg"));
            } else {
                thumbnails.attr('src', source);
            }
        }

        return thumbnails;
    }
}
