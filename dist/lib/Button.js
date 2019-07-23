"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
require("./Button.css");
// Component
const Button = ({ text, fluid, disabled, children, kind, onClick }) => (React.createElement("button", { className: `app-button ${fluid ? "fluid" : ""} ${disabled ? "disabled" : ""} ${kind ? kind : ""}`, onClick: onClick }, text || children));
exports.default = Button;
//# sourceMappingURL=Button.js.map