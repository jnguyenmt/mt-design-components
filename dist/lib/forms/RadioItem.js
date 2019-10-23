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
import Radio from "@material-ui/core/Radio";
import React from "react";
import { InputLabel } from "./InputLabel";
export const RadioItem = (_a) => {
    var { input, label, defaultChecked, disabled, className, id } = _a, rest = __rest(_a, ["input", "label", "defaultChecked", "disabled", "className", "id"]);
    const radioItem = (React.createElement(Radio, Object.assign({ id: id, className: className, color: "primary", defaultChecked: defaultChecked, disabled: disabled }, input, rest)));
    return (React.createElement("div", { className: "radio-field-wrapper" },
        React.createElement(InputLabel, { control: radioItem, label: label })));
};
//# sourceMappingURL=RadioItem.js.map