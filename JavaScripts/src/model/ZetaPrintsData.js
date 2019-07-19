import ImageEditingContext from './ImageEditingContext';
import Page from './Page';

/**
 * @interface
 */
DataInterface = function () {
};
DataInterface.prototype = {
    constructor() {
        /** @type {TemplateDetail} */
        this.template_details = {};
        /**
         * @type {number}
         */
        this.current_page = 1;
        this.is_fields_hidden = false;
        this.preview_sharing_links = [];
        this.is_personalization_step = false;
        this.update_first_preview_on_load = false;
        this.preserve_fields = true;
        this.has_shapes = true;
        this.w2p_url = 'http://w2p.domain.tld/';
        this.options = [];
        this.url = {
            'preview': 'https://domain.tld/web-to-print/preview/',
            'preview_download': 'https://domain.tld/web-to-print/preview/download/',
            'upload': 'https://domain.tld/web-to-print/upload/',
            'upload_by_url': 'https://domain.tld/web-to-print/upload/byurl/',
            'image': 'https://domain.tld/web-to-print/image/update/',
            'user-image-template': 'https://domain.tld/web-to-print/photothumbnail/get/guid/image-guid.image-ext/width/0/height/0/',
            'edit-image-template': 'https://domain.tld/web-to-print/image/index/'
        };

        /**
         * @type {ImageEditingContext}
         */
        this.image_edit = {};

        /**
         * @deprecated
         */
        this.scroll_strip = () => {
        };

        /**
         * @param {jQuery} $panel
         * @deprecated
         */
        this.show_user_images = ($panel) => {
        };

        /**
         * @param {jQuery} $panel
         * @deprecated
         */
        this.show_colorpicker = ($panel) => {
        };

        /**
         * @param {jQuery} $panel
         * @deprecated
         */
        this.hide_colorpicker = ($panel) => {
        };
    }
};

/**
 * @implements DataInterface
 */
export default class ZetaPrintsData {
    constructor() {
        /**
         * @type {TemplateDetail}
         */
        this.template_details = {};

        this.current_page = 1;
        this.is_fields_hidden = false;
        this.preview_sharing_links = [];
        this.is_personalization_step = false;
        this.update_first_preview_on_load = false;
        this.preserve_fields = true;
        this.has_shapes = true;
        this.w2p_url = 'http://w2p.domain.tld/';
        this.options = [];

        /**
         * @type {string|undefined}
         */
        this._shape_to_show = undefined;
        this.url = {
            'preview': 'https://domain.tld/web-to-print/preview/',
            'preview_download': 'https://domain.tld/web-to-print/preview/download/',
            'upload': 'https://domain.tld/web-to-print/upload/',
            'upload_by_url': 'https://domain.tld/web-to-print/upload/byurl/',
            'image': 'https://domain.tld/web-to-print/image/update/',
            'user-image-template': 'https://domain.tld/web-to-print/photothumbnail/get/guid/image-guid.image-ext/width/0/height/0/',
            'edit-image-template': 'https://domain.tld/web-to-print/image/index/'
        };

        const $thumb = jQuery();
        const page = new Page();
        this.image_edit = new ImageEditingContext({
            'url': {
                'image': this.url.image,
                'user_image_template': this.url['user-image-template']
            },
            '$selected_thumbnail': $thumb,

            //!!! Temp solution
            '$input': $thumb.parents().children('input.zetaprints-images'),

            'image_id': 'image_guid',
            'page': {
                'width_in': page['width-in'],
                'height_in': page['height-in']
            },
            'placeholder': page.images['image_name'],
            'upload_image_by_url': () => {
            }
        });

        /**
         * @deprecated
         */
        this.update_preview = () => {
        };

        /**
         * @deprecated
         */
        this.scroll_strip = () => {
        };

        /**
         * @param {jQuery} $panel
         * @deprecated
         */
        this.show_user_images = ($panel) => {
        };

        /**
         * @param {jQuery} $panel
         * @deprecated
         */
        this.show_colorpicker = ($panel) => {
        };

        /**
         * @param {jQuery} $panel
         * @deprecated
         */
        this.hide_colorpicker = ($panel) => {
        };
    }
}
