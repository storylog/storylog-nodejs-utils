"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
exports.defaults = (object, source) => {
    return lodash_1.assignWith({}, object, source, (objValue, srcValue) => (lodash_1.isNil(objValue) ? srcValue : objValue));
};
//# sourceMappingURL=defaults.util.js.map