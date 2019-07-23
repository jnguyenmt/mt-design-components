"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
// Component
const Tooltip = ({ arrow = "left", error, children }) => (React.createElement(StyledTooltip, { className: `${error ? "error" : ""} ${arrow ? arrow : ""}` }, children));
exports.default = Tooltip;
// Styling
const StyledTooltip = styled_components_1.default.span `
  font-size: 11px;
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  font-weight: 600;
  position: relative;
  display: inline-block;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
  }
  &.top:before,
  &.bottom:before {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    left: 50%;
    transform: translateX(-2px);
  }
  &.top:before {
    top: -4px;
  }
  &.bottom:before {
    bottom: -4px;
  }
  &.right:before,
  &.left:before {
    top: 7px;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
  }
  &.right:before {
    right: -4px;
  }
  &.left:before {
    left: -4px;
  }
`;
//# sourceMappingURL=Tooltip.js.map