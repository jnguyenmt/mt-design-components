"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
// Component
const Link = ({ text, url, onClick }) => (React.createElement(StyledButton, { href: url, onClick: onClick }, text));
exports.default = Link;
// Styles
const StyledButton = styled_components_1.default.a `
  font-size: 12px;
`;
//# sourceMappingURL=Link.js.map