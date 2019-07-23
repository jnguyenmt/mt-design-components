"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
// Component
const Link = ({ text, url, onClick }) => (React.createElement(StyledButton, { href: url, onClick: onClick }, text));
exports.default = Link;
// Styles
const StyledButton = styled_components_1.default.a `
  font-size: 12px;
`;
//# sourceMappingURL=Link.js.map