(function ($) {
  var methods = {
    hide : function () {
      $editor = this.data('text-field-editor');

      if ($editor) {
        $editor.removeClass('opened');
        $(document).unbind('click.text-field-editor');
      }
    },

    move : function (target) {
      $editor = this.data('text-field-editor');

      if (!$editor)
        return;

      $editor
        .removeClass('opened')
        .detach()
        .prependTo(target);
    }
  };

  $.fn.text_field_editor = function (method) {
    var settings = {
      button_parent: null,
      colour: '',
      change: function (data) {}
    };

    if (methods[method])
      return methods[method]
               .apply(this, Array.prototype.slice.call(arguments, 1));
    else if (typeof method === 'object' || ! method)
      $.extend(settings, method);
    else
      $.error('Method ' +  method +
              ' does not exist on jQuery.text_field_editor');

    var $field = this;

    var $editor = $('<div class="zp-text-field-editor" />')
                    .prependTo(settings.button_parent);

    $field.data('text-field-editor', $editor);

    var $handle = $('<div class="zp-text-field-editor-handle">' +
                      '<div class="zp-text-field-editor-icon pen" />' +
                    '</div>').appendTo($editor);

    var $panel = $('<div class="zp-text-field-editor-panel">' +
                     '<div class="white-line" />' +
                   '</div>')
                   .appendTo($editor);

    var $row = $('<div class="zp-text-field-editor-row">' +
                   '<div class="zp-text-field-editor-icon color-picker" />' +
                 '</div>').appendTo($panel);

    var $options = $('<div class="zp-text-field-editor-options" />')
                     .appendTo($row);

    $('<div class="zp-text-field-editor-clear" />').appendTo($row);

    var name = 'zp-text-field-editor-colorpicker-'
                                              + this.attr('name').substring(12);

    $('<div class="zp-text-field-editor-option">' +
        '<div><input type="radio" name="' + name + '" value="default" checked="checked" /></div>' +
        '<div><span>Default</span></div>' +
      '</div>').appendTo($options);

    var $pallet = $('<div class="zp-text-field-editor-icon pallet">' +
                      '<div class="zp-text-field-editor-color-example" />' +
                    '</div>');

    var $color_example = $pallet.children();

    var $radio_button = $('<input type="radio" name="' + name + '" value="" />');

    if (settings.colour) {
      $color_example.css('backgroundColor', settings.colour);
      $radio_button.val(settings.colour);
    }

    $('<div class="zp-text-field-editor-option" />')
      .append($radio_button.wrap('<div />').parent())
      .append($pallet).appendTo($options);

    $handle.click(function () {
      $(document).unbind('click.text-field-editor');

      if ($editor.hasClass('opened'))
        $editor.removeClass('opened');
      else {
        $('div.zp-text-field-editor').removeClass('opened');

        var offset = $handle.offset();
        var position = $handle.position();

        var c = offset.top == position.top && offset.left == position.left
                  ? offset : position;

        $panel.css({
          top: c.top + $handle.outerHeight() - 1,
          left: c.left });

        $editor.addClass('opened');

        $(document).bind('click.text-field-editor', out_editor_click);
      }

      return false;
    });

    $('input', $row).change(function () {
      var value = $(this).val();

      if (!value)
        $radio_button.colorpicker('open');
      else if (value == 'default')
        _change('color', undefined);
      else
        _change('color', value);
    });

    var color_picker_on = false;

    $radio_button.colorpicker({
      color: '804080',
      inline: false,
      layout: {
        //Left, Top, Width, Height (in table cells)
        map:     [0, 0, 1, 5],
        bar:     [1, 0, 1, 5],
        preview: [2, 0, 1, 1],
        rgb:     [2, 2, 1, 1],
        hex:     [2, 3, 1, 1],
        cmyk:    [3, 2, 1, 2],
      },
      parts: [
        'switcher', 'header', 'map', 'bar', 'hex', 'rgb', 'cmyk', 'preview',
        'footer'
      ],
      part: {
        map:  { size: 128 },
        bar:  { size: 128 }
      },
      altField: $color_example,
      showOn: 'alt',
      title: ' ',
      revert: true,
      showCloseButton: false,
      colorFormat: ('#HEX'),

      open: function () {
        color_picker_on = true;
      },

      close: function (colpkr) {
        color_picker_on = false;
      },

      ok: function (e, data) {
        _change('color', data.formatted);
      }
    });

    function out_editor_click (event) {
      if (color_picker_on)
        return;

      var editor = $editor.get(0);
      var child_parent = $(event.target)
                          .parents('div.zp-text-field-editor')
                          .get(0);

      if (!((event.target == editor) || (child_parent == editor))) {
        $handle.click();
      }
    }

    function _change (name, value) {
      if (value === undefined)
        $editor.removeClass('state-changed');
      else
        $editor.addClass('state-changed');

      var data = {};
      data[name] = value

      settings.change(data);
    }

    return this;
  };
})(jQuery);
