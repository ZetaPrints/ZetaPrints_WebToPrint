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

    get image_editing_min_viewport_width() {
        return 900;
    }

    is_image_editing_enabled() {
        const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        // const viewport_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        return viewport_width >= this.image_editing_min_viewport_width;
    }
}

/**
 * @type {Environment}
 * @private
 */
Environment._instance = null;