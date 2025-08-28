"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const browser_util_inspect_1 = __importDefault(require("browser-util-inspect"));
const spok_1 = __importDefault(require("./spok"));
// terminal colors won't show properly in the browser
if (spok_1.default && spok_1.default.color) {
    spok_1.default.color = false;
}
function inspect(obj, color) {
    return browser_util_inspect_1.default(obj, false, 5, color);
}
exports.default = inspect;
//# sourceMappingURL=inspect-browser.js.map