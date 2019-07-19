export default class DataObject {
    /**
     * @param {object} data
     * @protected
     */
    _assign_properties(data) {
        for (let name in data) {
            if (data.hasOwnProperty(name)) {
                this[name] = data[name];
            }
        }
    }
}
