"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// Component
var Button = function (_a) {
    var text = _a.text, fluid = _a.fluid, disabled = _a.disabled, children = _a.children, kind = _a.kind, onClick = _a.onClick;
    return (React.createElement("button", { className: "app-button " + (fluid ? "fluid" : "") + " " + (disabled ? "disabled" : "") + " " + (kind ? kind : ""), onClick: onClick }, text || children));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map