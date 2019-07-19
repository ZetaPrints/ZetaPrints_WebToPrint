import AbstractRotateButton from './AbstractRotateButton';

export default class RotateRightButton extends AbstractRotateButton {
    /**
     * @inheritDoc
     */
    _get_title() {
        return 'Rotate right';
    }

    /**
     * @inheritDoc
     */
    _get_text() {
        return 'Rotate right';
    }

    /**
     * @inheritDoc
     */
    _get_class_name() {
        return 'zp-rotate-button-right';
    }

    /**
     * @inheritDoc
     */
    _get_direction() {
        return 'right';
    }
}
