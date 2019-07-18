const $ = require('jquery');
require('jquery-migrate');
require('jquery-ui');
require('jquery-ui/ui/widgets/draggable');
require('jquery-ui/ui/widgets/resizable');
require('jquery-ui/ui/widgets/tabs');
require('fancybox')($);
require('./powercrop/jquery-powercrop')($);

require('./colorpicker/colorpicker.js');
require('./colorpicker/switcher.js');
require('./text-field-resizer/text-field-resizer.js');
// require('./text-field-editor/text-field-editor.js');
require('./combobox-field/combobox-field.js');

// require('./fancybox/jquery-fancybox.js')($);

export default $;
