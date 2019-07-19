export default class RegexHelper {
    /**
     * @param {string} subject
     * @param {RegExp} exp
     * @return {boolean}
     */
    static get_value_by_regexp(subject, exp) {
        const match = subject.match(exp);
        if (match === null) {
            return false;
        }
        if (match.length > 2) {
            return match;
        }
        return match[1];
    }
}
