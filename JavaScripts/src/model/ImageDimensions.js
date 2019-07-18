import Position from './Position';
import DataObject from './DataObject';

export default class ImageDimensions extends DataObject {
    constructor(dimensions) {
        super();
        this.selection = {
            width: 0,
            height: 0,
            position: new Position()
        };

        this.image = {
            width: 0,
            height: 0,
            position: new Position()
        };

        this._assign_properties(dimensions);
    }
}
