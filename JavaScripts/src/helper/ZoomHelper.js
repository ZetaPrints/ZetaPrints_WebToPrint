/**
 * Created by cod on 25.4.17.
 */
import UiHelper from "./UiHelper";
import Logger from "../Logger";

export default class ZoomHelper {
    /**
     * Disable zoom
     */
    static disable_zoom() {
        Logger.debug('[ZoomHelper] Disable zoom');
        const product_image_gallery = UiHelper.instance().product_image_gallery;
        $(product_image_gallery).removeClass('product-image-zoom');
        UiHelper.instance().original_product_image.remove();
        $('#track_hint, div.zoom').remove();

        // Disable the elevateZoom plugin
        $('.zoomContainer').remove();
        $('.product-image-gallery .gallery-image').removeData('elevateZoom');
    }
}
