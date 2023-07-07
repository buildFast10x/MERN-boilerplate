class stringUtils {
    constructor() {};

    static isUndefined(data) {
        if(data === undefined) {
            return true;
        }

        if(data === '' || data === null) {
            return true;
        }

        return false;
    }

    static isUndefinedEmptyorNull(data) {
        if(data === undefined || data === '' || data === null) {
            return true;
        }
        return false;
    }

    static isEmptyorNull() {
        if(data === '' || data === null) {
            return true;
        }
        return false;
    }
}

module.exports = stringUtils