"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
exports.filterUndefined = (object) => {
    return lodash_1.pickBy(object, lodash_1.negate(lodash_1.isUndefined));
};
//# sourceMappingURL=filter-undefined.util.js.map