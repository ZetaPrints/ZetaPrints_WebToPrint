/**
 * Created by COD on 23.04.14.
 */
import Environment from "./Environment";
const ef = function () {
};

const Logger = window.console || {};
Logger.log = Logger.log || ef;
Logger.warn = Logger.warn || ef;
Logger.error = Logger.error || ef;

Logger.debug = Environment.environment().debug_mode && Logger.debug ? Logger.debug : ef;

export default Logger;
