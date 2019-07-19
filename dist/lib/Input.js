"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
// Component
exports.Input = function (_a) {
    var value = _a.value, placeholder = _a.placeholder, error = _a.error, disabled = _a.disabled, onChange = _a.onChange;
    return (React.createElement(StyledInput, { type: "text", value: value, placeholder: placeholder, className: (error ? "error" : "") + " " + (disabled ? "disabled" : ""), onChange: onChange }));
};
// Styles
var StyledInput = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 4px;\n  border: none;\n  box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0;\n  outline: 0;\n  overflow: visible;\n  transition: box-shadow 0.2s;\n  width: 100%;\n\n  &:focus {\n    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),\n  }\n  &:focus::placeholder {\n    opacity: 0.5;\n    transition: opacity 0.2s;\n  }\n\n  &.disabled {\n    pointer-events: none;\n  }\n\n  &.error {\n    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),\n  }\n  &.error:focus {\n    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),\n  }\n  &.error::placeholder {\n    opacity: 0.5;\n  }\n"], ["\n  border-radius: 4px;\n  border: none;\n  box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0;\n  outline: 0;\n  overflow: visible;\n  transition: box-shadow 0.2s;\n  width: 100%;\n\n  &:focus {\n    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),\n  }\n  &:focus::placeholder {\n    opacity: 0.5;\n    transition: opacity 0.2s;\n  }\n\n  &.disabled {\n    pointer-events: none;\n  }\n\n  &.error {\n    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),\n  }\n  &.error:focus {\n    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),\n  }\n  &.error::placeholder {\n    opacity: 0.5;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=Input.js.map