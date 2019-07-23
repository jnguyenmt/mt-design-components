"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./Button.css");
// Component
const Button = ({ text, fluid, disabled, children, kind, onClick }) => (React.createElement("button", { className: `app-button ${fluid ? "fluid" : ""} ${disabled ? "disabled" : ""} ${kind ? kind : ""}`, onClick: onClick }, text || children));
exports.default = Button;
//# sourceMappingURL=Button.js.map