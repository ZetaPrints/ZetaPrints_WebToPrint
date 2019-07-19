import Lightbox from '../view/Lightbox';
import $ from '../jQueryLoader';
import UiHelper from '../helper/UiHelper';

export default class Dataset {
    static zp_dataset_initialise(zp) {
        const $dataset = $('.zp-dataset');

        $dataset
            .find('.zp-dataset-checkbox')
            .on(
                'hover',
                function () {
                    $(this)
                        .parent()
                        .addClass('zp-dataset-active');
                },
                function () {
                    $(this)
                        .parent()
                        .removeClass('zp-dataset-active');
                }
            );

        const $td = $dataset
            .find('td')
            .filter(':not(.zp-dataset-checkbox)');

        /* $td
         .mouseenter(function (event) {
         $popup = $(this).children('.zp-dataset-popup');

         if (!$popup.length)
         $popup = $('<div class="zp-dataset-popup" />')
         .append($(this)
         .children()
         .clone())
         .appendTo(this);

         $popup
         .detach()
         .appendTo($('body'))
         .attr('id', 'zp-dataset-popup-active')
         .css({
         top: event.pageY + 15,
         left: event.pageX + 15 })
         .show();
         })
         .mouseleave(function (event) {
         $('#zp-dataset-popup-active')
         .hide()
         .removeAttr('id')
         .detach()
         .appendTo($(this));
         })
         .mousemove(function (event) {
         $('#zp-dataset-popup-active')
         .css({
         top: event.pageY + 15,
         left: event.pageX + 15 });
         })*/
        $td
            .on('click', function () {
                const $this = $(this);

                if (zp.template_details['dataset-integrity-enforce']) {
                    $this
                        .parent()
                        .find('> .zp-dataset-checkbox > input')
                        .mousedown()
                        .click();

                    return;
                }

                const page = zp.template_details.pages[zp.current_page];
                const name = $this.attr('class');

                if (!(page.fields && page.fields[name] && page.fields[name].dataset)) {
                    return false;
                }

                const $tr = $this.parent();
                const $tbody = $tr.parent();

                $tbody
                    .children('.zp-dataset-selected')
                    .removeClass('zp-dataset-selected')
                    .find('input')
                    .prop('checked', false)
                    .end()
                    .children()
                    .slice(1)
                    .addClass('zp-dataset-selected');

                const index = $tbody
                    .children()
                    .index($tr);

                $('#input-fields-page-' + zp.current_page)
                    .find('[name="zetaprints-_' + name + '"]')
                    .val(page.fields[name].dataset[index].text);

                $tbody
                    .find('td')
                    .filter('.' + name.replace(/ /g, '.'))
                    .removeClass('zp-dataset-selected');

                UiHelper.instance().product_form.modified = true;

                $this.addClass('zp-dataset-selected');
            });

        const $inputs = $dataset.find('input');

        $inputs
            .on('mousedown', function () {
                $inputs
                    .filter(':checked')
                    .prop('checked', false);
            })
            .on('click', function () {
                const page = zp.template_details.pages[zp.current_page];

                const fields = page.fields;
                if (!fields) {
                    return;
                }

                const $tr = $(this)
                    .parent()
                    .parent();

                $tr
                    .parent()
                    .find('.zp-dataset-selected')
                    .removeClass('zp-dataset-selected');

                const index = $tr
                    .parent()
                    .children()
                    .index($tr);

                const $input_fields = $('#input-fields-page-' + zp.current_page);

                for (let name in fields) {
                    if (fields.hasOwnProperty(name) && fields[name].dataset) {
                        $input_fields
                            .find('[name="zetaprints-_' + name + '"]')
                            .val(fields[name].dataset[index].text);
                    }
                }

                UiHelper.instance().product_form.modified = true;

                $tr.addClass('zp-dataset-selected');
            });

        const $button = $('#zp-dataset-button');

        $button.on('click', function () {
            const lightbox = new Lightbox();
            lightbox.open({
                'type': 'inline',
                'href': '#zp-dataset-page-' + zp.current_page
            });
        });

        if ($('#zp-dataset-page-' + zp.current_page).length) {
            $button.removeClass('hidden');
        }
    }

    /**
     * @param {DataInterface} zp
     * @param {string} name
     * @param state
     */
    static zp_dataset_update_state(zp, name, state) {
        const $table = $('#zp-dataset-table-page-' + zp.current_page);

        $table
            .find('tr.zp-dataset-selected')
            .removeClass('zp-dataset-selected')
            .find('input')
            .prop('checked', false)
            .end()
            .children()
            .slice(1)
            .addClass('zp-dataset-selected');

        name = '.' + name.replace(/ /g, '.') + '.zp-dataset-selected';

        $table
            .find(name)
            .removeClass('zp-dataset-selected');
    }
}
