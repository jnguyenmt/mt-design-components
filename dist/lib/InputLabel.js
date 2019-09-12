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
import * as React from "react";
import { getAppendAttributeValues } from "./utils/stringUtils";
import "./InputLabel.css";
export const InputLabel = (props) => {
    const { className, children, required } = props, rest = __rest(props, ["className", "children", "required"]);
    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses = getAppendAttributeValues(props.className);
    return (React.createElement("label", { className: "mt-form__label" + givenClasses }, children));
};
export default InputLabel;
//# sourceMappingURL=InputLabel.js.map