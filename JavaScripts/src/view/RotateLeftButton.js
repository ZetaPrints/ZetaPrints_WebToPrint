import AbstractRotateButton from './AbstractRotateButton';

export default class RotateLeftButton extends AbstractRotateButton {
    /**
     * @inheritDoc
     */
    _get_title() {
        return 'Rotate left';
    }

    /**
     * @inheritDoc
     */
    _get_text() {
        return 'Rotate left';
    }

    /**
     * @inheritDoc
     */
    _get_class_name() {
        return 'zp-rotate-button-left';
    }

    /**
     * @inheritDoc
     */
    _get_direction() {
        return 'left';
    }
}
