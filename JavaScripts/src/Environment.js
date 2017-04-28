export default class Environment {
    /**
     * @return {Environment}
     */
    static environment() {
        if (!Environment._instance) {
            new Environment(window['WebToPrintEnv'] || {});
        }

        return Environment._instance;
    }

    /**
     * @param {object} env
     * @private
     */
    constructor(env = {}) {
        if (Environment._instance) {
            throw new ReferenceError('An instance of Environment was already created');
        }

        Environment._instance = this;

        this._env = env;
    }

    get debug_mode() {
        return true;
    }
}

/**
 * @type {Environment}
 * @private
 */
Environment._instance = null;