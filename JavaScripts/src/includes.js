/* globals require */
require('./polyfills');

require('jquery');
require('jquery.browser');
require('jquery-ui');
require('jquery-ui-touch-punch-c');

import Environment from './Environment';
import Feature from './Feature';
import PersonalizationForm from './PersonalizationForm';
import $ from './jQueryLoader';

const environment = Environment.environment();
const activated_features = [
    Feature.feature.dataset,
    Feature.feature.textFieldEditor,
    // Feature.feature.inPreviewEdit,
    // Feature.feature.fancybox.resizing,
    Feature.feature.fancybox.saveImageButton,
    Feature.feature.fancybox.selectImage,
    Feature.feature.fancybox.updatePreview,
];
const feature = new Feature(activated_features);

export {
    PersonalizationForm,
    $,
    feature,
    environment
}


