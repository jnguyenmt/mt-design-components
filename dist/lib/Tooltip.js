"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
// Component
exports.Tooltip = function (_a) {
    var _b = _a.arrow, arrow = _b === void 0 ? "left" : _b, error = _a.error, children = _a.children;
    return (React.createElement(StyledTooltip, { className: (error ? "error" : "") + " " + (arrow ? arrow : "") }, children));
};
// Styling
var StyledTooltip = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 11px;\n  color: #fff;\n  padding: 5px;\n  border-radius: 3px;\n  font-weight: 600;\n  position: relative;\n  display: inline-block;\n\n  &:before {\n    content: \"\";\n    position: absolute;\n    width: 0;\n    height: 0;\n  }\n  &.top:before,\n  &.bottom:before {\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n    left: 50%;\n    transform: translateX(-2px);\n  }\n  &.top:before {\n    top: -4px;\n  }\n  &.bottom:before {\n    bottom: -4px;\n  }\n  &.right:before,\n  &.left:before {\n    top: 7px;\n    border-top: 4px solid transparent;\n    border-bottom: 4px solid transparent;\n  }\n  &.right:before {\n    right: -4px;\n  }\n  &.left:before {\n    left: -4px;\n  }\n"], ["\n  font-size: 11px;\n  color: #fff;\n  padding: 5px;\n  border-radius: 3px;\n  font-weight: 600;\n  position: relative;\n  display: inline-block;\n\n  &:before {\n    content: \"\";\n    position: absolute;\n    width: 0;\n    height: 0;\n  }\n  &.top:before,\n  &.bottom:before {\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n    left: 50%;\n    transform: translateX(-2px);\n  }\n  &.top:before {\n    top: -4px;\n  }\n  &.bottom:before {\n    bottom: -4px;\n  }\n  &.right:before,\n  &.left:before {\n    top: 7px;\n    border-top: 4px solid transparent;\n    border-bottom: 4px solid transparent;\n  }\n  &.right:before {\n    right: -4px;\n  }\n  &.left:before {\n    left: -4px;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=Tooltip.js.map