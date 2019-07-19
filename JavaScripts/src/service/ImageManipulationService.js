import $ from './../jQueryLoader';
import Assert from '../helper/Assert';
import ImageEditingContext from '../model/ImageEditingContext';
import RegexHelper from '../helper/RegexHelper';
import ProcessedImageData from '../model/ProcessedImageData';

const ef = () => {
};

const get_value_by_regexp = (subject, exp) => {
    return RegexHelper.get_value_by_regexp(subject, exp);
};

/**
 * @internal
 */
class CroppingData {
    constructor() {
        this.image = {
            width: 0,
            height: 0,
            position: {
                top: 0,
                left: 0
            }
        };
        this.selection = {
            width: 0,
            height: 0,
            position: {
                top: 0,
                left: 0
            }
        };

        throw new ReferenceError('This class is only for type hinting');
    }
}

export default class ImageManipulationService {
    /**
     * Rotate an image on the server
     *
     * @param {ImageEditingContext} context
     * @param {string} direction
     * @param {function} success
     * @param {function} error
     * @return {jqXHR}
     */
    rotate(context, direction, success = ef, error = ef) {
        Assert.assertInstanceOf(context, ImageEditingContext, 'context');
        Assert.assertFunction(success, 'success');
        Assert.assertFunction(error, 'error');
        Assert.assertString(direction, 'direction');

        if (direction === 'left') {
            return this.rotate(context, 'l', success, error);
        }
        if (direction === 'right') {
            return this.rotate(context, 'r', success, error);
        }

        if (direction !== 'l' && direction !== 'r') {
            throw new RangeError('Direction must be either "l" or "r"');
        }

        return this._send_request(context, success, error, {
            'zetaprints-action': 'img-rotate',
            'zetaprints-Rotation': direction,
            'zetaprints-ImageID': context.image_id
        });
    }

    /**
     * Crop an image on the server
     *
     * @param {ImageEditingContext} context
     * @param {CroppingData} data
     * @param {function} success
     * @param {function} error
     * @return {jqXHR}
     */
    crop(context, data, success = ef, error = ef) {
        Assert.assertInstanceOf(context, ImageEditingContext, 'context');
        Assert.assertFunction(success, 'success');
        Assert.assertFunction(error, 'error');

        return this._send_request(context, success, error, {
            'zetaprints-CropX1': data.selection.position.left / context.container.factor,
            'zetaprints-CropY1': data.selection.position.top / context.container.factor,
            'zetaprints-CropX2': (data.selection.position.left + data.selection.width) / context.container.factor,
            'zetaprints-CropY2': (data.selection.position.top + data.selection.height) / context.container.factor,
            'zetaprints-action': 'img-crop',
            'zetaprints-ImageID': context.image_id
        });
    }

    /**
     * Process the image details within the XML string
     *
     * @param {ImageEditingContext} context
     * @param {string} xml
     * @return {ProcessedImageData}
     */
    process_image_details(context, xml) {
        Assert.assertString(xml);
        Assert.assertInstanceOf(context, ImageEditingContext);
        const updated_context = new ImageEditingContext(Object.assign({}, context));

        const source = updated_context
            .url
            .user_image_template
            .replace('image-guid.image-ext', get_value_by_regexp(xml, /Thumb="([^"]*?)"/));

        const preview_width = this._get_value_by_regexp_as_float_or_false(xml, /ThumbWidth="([^"]*?)"/);
        const preview_height = this._get_value_by_regexp_as_float_or_false(xml, /ThumbHeight="([^"]*?)"/);
        const width = this._get_value_by_regexp_as_float_or_false(xml, /ImageWidth="([^"]*?)"/);
        const height = this._get_value_by_regexp_as_float_or_false(xml, /ImageHeight="([^"]*?)"/);
        const undo_width = this._get_value_by_regexp_as_float_or_false(xml, /ImageWidthUndo="([^"]*?)"/);
        const undo_height = this._get_value_by_regexp_as_float_or_false(xml, /ImageHeightUndo="([^"]*?)"/);

        if (preview_width && preview_height && width && height) {
            const width_in = width / context.placeholder.width * context.placeholder.width_in;
            updated_context.image = {
                width: width,
                height: height,
                ratio: width / height,
                width_in: width_in,
                thumb_width: preview_width,
                thumb_height: preview_height,
                dpi: Math.round(width / width_in),
                placeholder_to_image_factor: context.placeholder.width / width,
            };
        }

        return new ProcessedImageData({
            context: updated_context,
            source,
            preview_width,
            preview_height,
            width,
            height,
            undo_width,
            undo_height,
        });
    }

    /**
     * @param {string} xml
     * @param {RegExp} exp
     * @return {number|boolean}
     * @private
     */
    _get_value_by_regexp_as_float_or_false(xml, exp) {
        const result = get_value_by_regexp(xml, exp);
        if (false === result) {
            return false;
        }

        return parseFloat(result);
    }

    /**
     * @param {ImageEditingContext} context
     * @param {function} success
     * @param {function} error
     * @param {object} post_data
     * @return {jqXHR}
     * @private
     */
    _send_request(context, success, error, post_data) {
        const url = context.url.image;
        return $.ajax({
            url: url,
            type: 'POST',
            data: post_data,
            error: error,
            success: (data) => {
                const processed_image_data = this.process_image_details(context, data);
                success(data, processed_image_data.context, processed_image_data);
            }
        });
    }
}
