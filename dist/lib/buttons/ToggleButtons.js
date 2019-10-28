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
import React from "react";
import { ButtonGroup } from "./ButtonGroup";
import { SecondaryFormButton } from "./SecondaryFormButton";
import "./ToggleButtons.css";
export var ToggleButtons = function (props) {
    var id = props.id, selected = props.selected, items = props.items, onClick = props.onClick, disabled = props.disabled, className = props.className, rest = __rest(props, ["id", "selected", "items", "onClick", "disabled", "className"]);
    var isActive = function (itemValue) { return selected === itemValue && !disabled ? "active" : ""; };
    var renderButton = (items.map(function (item) { return (React.createElement(SecondaryFormButton, __assign({ "data-toggle-display-name": item.displayName, "data-toggle-btn-value": item.value, key: item.value, id: id, className: "button " + className + " " + isActive(item.value), onClick: onClick, value: item.value, disabled: disabled }, rest), item.displayName)); }));
    return (React.createElement(ButtonGroup, null, renderButton));
};
//# sourceMappingURL=ToggleButtons.js.map