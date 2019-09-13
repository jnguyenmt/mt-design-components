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
import React from "react";
import "components/shared/design/shared/appButton.css";
import { getAppendAttributeValues } from "utils/stringUtils";
import "./secondaryFormButton.css";
export const SecondaryFormButton = (props) => {
    const { className, children } = props, rest = __rest(props, ["className", "children"]);
    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses = getAppendAttributeValues(props.className);
    return (React.createElement("button", Object.assign({ className: "secondary-form-button app-button" + givenClasses }, rest), children));
};
//# sourceMappingURL=SecondaryFormButton.js.map