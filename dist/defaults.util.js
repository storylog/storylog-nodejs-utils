"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaults = void 0;
const lodash_1 = require("lodash");
function customizer(currentValue, targetValue) {
    return lodash_1.isPlainObject(currentValue)
        ? lodash_1.assignWith({}, currentValue, targetValue, customizer)
        : currentValue !== null && currentValue !== void 0 ? currentValue : targetValue;
}
exports.defaults = (object, source) => lodash_1.assignWith({}, object, source, customizer);
//# sourceMappingURL=defaults.util.js.map