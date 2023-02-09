"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as util from './util'
const util = require('./util/util');
function inspect(obj, color) {
    return util.inspect(obj, false, 5, color);
}
exports.default = inspect;
//# sourceMappingURL=inspect.js.map