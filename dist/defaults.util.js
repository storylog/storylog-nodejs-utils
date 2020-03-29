"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
function customizer(currentValue, targetValue) {
    if (lodash_1.isPlainObject(currentValue)) {
        return lodash_1.assignWith({}, currentValue, targetValue, customizer);
    }
    return currentValue !== null && currentValue !== void 0 ? currentValue : targetValue;
}
exports.defaults = (object, source) => {
    return lodash_1.assignWith({}, object, source, customizer);
};
//# sourceMappingURL=defaults.util.js.map