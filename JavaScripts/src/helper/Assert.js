/**
 * Created by cod on 24.4.17.
 */

export default class Assert {
    /**
     * Asserts that given value is of the given type
     *
     * @param {*} value
     * @param {string} type
     * @param {string} argumentName
     */
    static assertType(value, type, argumentName = '') {
        if (typeof value !== '' + type) {
            if (argumentName) {
                throw new TypeError(`Expected argument ${argumentName} to be of type "${type}", "${typeof value}" given`);
            }
            throw new TypeError(`Expected value to be of type "${type}", "${typeof value}" given`)
        }
    }

    /**
     * Asserts that the given value is of type function
     *
     * @param {*} value
     * @param {string} argumentName
     */
    static assertFunction(value, argumentName = '') {
        Assert.assertType(value, 'function', argumentName);
    }

    /**
     * Asserts that the given value is of type object
     *
     * @param {*} value
     * @param {string} argumentName
     */
    static assertObject(value, argumentName = '') {
        Assert.assertType(value, 'object', argumentName);
    }

    /**
     * Asserts that the given value is a jQuery object
     *
     * @param {*} value
     * @param {string} argumentName
     */
    static assertjQuery(value, argumentName = '') {
        const actual_type = typeof value;

        if (actual_type !== 'object' || typeof value.jquery === 'undefined') {
            if (argumentName) {
                throw new TypeError(`Expected argument ${argumentName} to be a jQuery object, "${actual_type}" given`);
            }
            throw new TypeError(`Expected value to be a jQuery object, "${actual_type}" given`);
        }
    }

    /**
     * Asserts that the given value is of type string
     *
     * @param {*} value
     * @param {string} argumentName
     */
    static assertString(value, argumentName = '') {
        Assert.assertType(value, 'string', argumentName);
    }

    /**
     * Asserts that the given value is of type number
     *
     * @param {*} value
     * @param {string} argumentName
     */
    static assertNumber(value, argumentName = '') {
        Assert.assertType(value, 'number', argumentName);
    }

    /**
     * Asserts that the given value is a Date
     *
     * @param {Date} value
     * @param {string} argumentName
     */
    static assertDate(value, argumentName = '') {
        if (!(value instanceof Date)) {
            if (argumentName) {
                throw new TypeError(`Expected argument ${argumentName} to be an instance of "Date", "${typeof value}" given`);
            }
            throw new TypeError(`Expected value to be an instance of "Date", "${typeof value}" given`)
        }
    }

    /**
     * Asserts that the given value is an instance of the given class
     *
     * @param {*} value
     * @param {class} expected
     * @param {string} argumentName
     */
    static assertInstanceOf(value, expected, argumentName = '') {
        if (!(value instanceof expected)) {
            if (argumentName) {
                throw new TypeError(`Expected argument ${argumentName} to be an instance of "${expected}", "${typeof value}" given`);
            }
            throw new TypeError(`Expected value to be an instance of "${expected}", "${typeof value}" given`)
        }
    }

    /**
     * Assert that the given value is a DOM element
     *
     * @param {*} value
     * @param {string} argumentName
     */
    static assertDomElement(value, argumentName = '') {
        if (!value.tagName) {
            if (argumentName) {
                throw new TypeError(`Expected argument ${argumentName} to be a DOM element, "${typeof value}" given`);
            }
            throw new TypeError(`Expected value to be a DOM element, "${typeof value}" given`)
        }
    }
}
