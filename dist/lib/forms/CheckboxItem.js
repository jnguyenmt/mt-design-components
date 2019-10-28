var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import { InputLabel } from "./InputLabel";
export var CheckboxItem = function (_a) {
    var input = _a.input, label = _a.label, disabled = _a.disabled, className = _a.className, id = _a.id, rest = __rest(_a, ["input", "label", "disabled", "className", "id"]);
    var checkBoxItem = (React.createElement(Checkbox, __assign({ id: id, className: className, color: "primary", disabled: disabled }, input, rest)));
    return (React.createElement("div", { className: "checkbox-field-wrapper" },
        React.createElement(InputLabel, { control: checkBoxItem, label: label })));
};
//# sourceMappingURL=CheckboxItem.js.map