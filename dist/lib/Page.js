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
import "./Root.css";
import { getAppendAttributeValues } from "./utils/stringUtils";
export const page = (props) => {
    const { className, children } = props, rest = __rest(props, ["className", "children"]);
    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses = getAppendAttributeValues(props.className);
    return (React.createElement("div", { className: "mt-page" + givenClasses }, children));
};
export default page;
//# sourceMappingURL=Page.js.map