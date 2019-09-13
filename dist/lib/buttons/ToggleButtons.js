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
import { ButtonGroup } from "./ButtonGroup";
import { SecondaryFormButton } from "./SecondaryFormButton";
import "./ToggleButtons.css";
export const ToggleButtons = (props) => {
    const { id, selected, items, onClick, disabled, className } = props, rest = __rest(props, ["id", "selected", "items", "onClick", "disabled", "className"]);
    const isActive = (itemValue) => selected === itemValue && !disabled ? "active" : "";
    const renderButton = (items.map((item) => (React.createElement(SecondaryFormButton, Object.assign({ "data-toggle-display-name": item.displayName, "data-toggle-btn-value": item.value, key: item.value, id: id, className: `button ${className} ${isActive(item.value)}`, onClick: onClick, value: item.value, disabled: disabled }, rest), item.displayName))));
    return (React.createElement(ButtonGroup, null, renderButton));
};
//# sourceMappingURL=ToggleButtons.js.map