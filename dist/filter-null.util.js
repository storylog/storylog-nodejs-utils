"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
exports.filterNull = (object) => lodash_1.omitBy(object, lodash_1.isNull);
//# sourceMappingURL=filter-null.util.js.map