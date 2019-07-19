import DataObject from './DataObject';

export default class LightboxCallbackConfiguration extends DataObject {
    constructor(data = {}) {
        super();
        const ef = () => {
        };

        this.willShow = ef;
        this.didShow = ef;
        this.willClose = ef;
        this.didClose = ef;

        this._assign_properties(data);
    }
}
