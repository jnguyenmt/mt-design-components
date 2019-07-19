"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
// Component
exports.Toggle = function (_a) {
    var disabled = _a.disabled, on = _a.on, onClick = _a.onClick;
    return (React.createElement(StyledToggle, { className: (disabled ? "disabled" : "") + " " + (on ? "on" : ""), onClick: onClick }));
};
// Styling
var StyledToggle = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 18px;\n  box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),\n  cursor: pointer;\n  display: block;\n  font-size: 14px;\n  height: 36px;\n  position: relative;\n  transition: background-color 0.2s ease, box-shadow 0.2s ease;\n  width: 64px;\n\n  &:before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    height: 30px;\n    width: 30px;\n    border-radius: 100%;\n    top: 3px;\n    left: 3px;\n    transition: left 0.2s ease;\n    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1),\n      0px 1px 2px 0px hsla(0, 0%, 0%, 0.08);\n  }\n  &.on:before {\n    left: 31px;\n  }\n  &.disabled {\n    pointer-events: none;\n    opacity: 0.5;\n  }\n"], ["\n  border-radius: 18px;\n  box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),\n  cursor: pointer;\n  display: block;\n  font-size: 14px;\n  height: 36px;\n  position: relative;\n  transition: background-color 0.2s ease, box-shadow 0.2s ease;\n  width: 64px;\n\n  &:before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    height: 30px;\n    width: 30px;\n    border-radius: 100%;\n    top: 3px;\n    left: 3px;\n    transition: left 0.2s ease;\n    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1),\n      0px 1px 2px 0px hsla(0, 0%, 0%, 0.08);\n  }\n  &.on:before {\n    left: 31px;\n  }\n  &.disabled {\n    pointer-events: none;\n    opacity: 0.5;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=Toggle.js.map