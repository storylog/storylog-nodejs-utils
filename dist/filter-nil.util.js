"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
exports.filterNil = (object) => {
    return lodash_1.pickBy(object, lodash_1.negate(lodash_1.isNil));
};
//# sourceMappingURL=filter-nil.util.js.map