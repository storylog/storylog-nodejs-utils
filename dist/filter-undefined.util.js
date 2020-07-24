"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterUndefined = void 0;
const lodash_1 = require("lodash");
exports.filterUndefined = (object) => lodash_1.omitBy(object, lodash_1.isUndefined);
//# sourceMappingURL=filter-undefined.util.js.map