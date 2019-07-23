"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const stringUtils_1 = require("./utils/stringUtils");
require("./InputField.css");
const InputField = (props) => {
    const { className, children } = props, rest = __rest(props, ["className", "children"]);
    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses = stringUtils_1.getAppendAttributeValues(props.className);
    return (React.createElement("input", Object.assign({ className: "input-field" + givenClasses }, rest)));
};
exports.default = InputField;
//# sourceMappingURL=InputField.js.map