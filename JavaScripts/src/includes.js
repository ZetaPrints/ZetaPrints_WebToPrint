/* globals require */
require('./polyfills');

require('jquery');
require('jquery.browser');
require('jquery-ui');
require('jquery-ui-touch-punch-c');

import Environment from './Environment';
import Feature from './Feature';
import UiHelper from './helper/UiHelper';
import PersonalizationForm from './PersonalizationForm';
import ImageEditingContext from './model/ImageEditingContext';
import ImageManipulationService from './service/ImageManipulationService';
import ImageThumbnailService from './service/ImageThumbnailService';
import GlobalEvents from './GlobalEvents';
import NotificationCenter from './NotificationCenter';
import $ from './jQueryLoader';

const ui_helper = UiHelper.instance();
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
    ImageEditingContext,
    ImageManipulationService,
    ImageThumbnailService,
    $,
    feature,
    environment,
    ui_helper,
    GlobalEvents,
    NotificationCenter
};


