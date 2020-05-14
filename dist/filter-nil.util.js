"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
exports.filterNil = (object) => lodash_1.omitBy(object, lodash_1.isNil);
//# sourceMappingURL=filter-nil.util.js.map