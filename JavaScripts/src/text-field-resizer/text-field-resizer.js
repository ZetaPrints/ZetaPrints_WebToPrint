import Logger from '../Logger';
import jQueryLoader from '../jQueryLoader';

const $ = jQueryLoader || jQuery;

const restore_field_style = function (event) {
    const $field = $(this);
    const data = $field.data('text-field-resizer');

    $field.unbind(event);

    if (data['style'] === undefined) {
        data['wrapper'].removeAttr('style');
    } else {
        data['wrapper'].attr('style', data['style']);
    }
};

$.fn.text_field_resizer = function () {
    return this.each(function () {
        const $wrapper = $(this);
        const $field = $wrapper.find('.input-text, textarea');

        if (typeof $wrapper.resizable === 'function') {
            $wrapper.resizable({
                handles: $field.prop('tagName').toUpperCase() === 'TEXTAREA'
                    ? 'se, sw' : 'e, w',

                create: function () {
                    $wrapper.on('mousedown', () => {
                        $field.focus();
                    });

                    $field.data(
                        'text-field-resizer',
                        {
                            'style': $wrapper.attr('style'),
                            'wrapper': $wrapper
                        }
                    );
                },

                start: function () {
                    $wrapper.css('z-index', 1000);
                    $field.focus();
                },

                stop: function () {
                    $field.focus();
                }
            });

            $wrapper
                .on('mouseenter', () => {
                    $field.unbind('blur', restore_field_style);
                })
                .on('mouseleave', () => {
                    $field.bind('blur', restore_field_style);
                });
        } else {
            Logger.error('$wrapper.resizable is not a function');
        }
    });
};
