/**
 * Created by COD on 23.04.14.
 */
const ef = function () {
};

const Logger = window.console || {};
Logger.log = Logger.log || ef;
Logger.debug = Logger.debug || ef;
Logger.warn = Logger.warn || ef;
Logger.error = Logger.error || ef;

export default Logger;