"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
exports.convertToArray = (value) => {
    if (lodash_1.isNil(value))
        return [];
    return lodash_1.isArray(value) ? value : [value];
};
//# sourceMappingURL=convert-to-array.util.js.map