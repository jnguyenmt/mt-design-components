"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
// Component
const Toggle = ({ disabled, on, onClick }) => (React.createElement(StyledToggle, { className: `${disabled ? "disabled" : ""} ${on ? "on" : ""}`, onClick: onClick }));
exports.default = Toggle;
// Styling
const StyledToggle = styled_components_1.default.span `
  border-radius: 18px;
  box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
  cursor: pointer;
  display: block;
  font-size: 14px;
  height: 36px;
  position: relative;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  width: 64px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    height: 30px;
    width: 30px;
    border-radius: 100%;
    top: 3px;
    left: 3px;
    transition: left 0.2s ease;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1),
      0px 1px 2px 0px hsla(0, 0%, 0%, 0.08);
  }
  &.on:before {
    left: 31px;
  }
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;
//# sourceMappingURL=Toggle.js.map