"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
// Component
var Link = function (_a) {
    var text = _a.text, url = _a.url, onClick = _a.onClick;
    return (React.createElement(StyledButton, { href: url, onClick: onClick }, text));
};
exports.default = Link;
// Styles
var StyledButton = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 12px;\n"], ["\n  font-size: 12px;\n"])));
var templateObject_1;
//# sourceMappingURL=Link.js.map