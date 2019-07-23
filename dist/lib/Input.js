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
const Input = ({ value, placeholder, error, disabled, onChange }) => (React.createElement(StyledInput, { type: "text", value: value, placeholder: placeholder, className: `${error ? "error" : ""} ${disabled ? "disabled" : ""}`, onChange: onChange }));
exports.default = Input;
// Styles
const StyledInput = styled_components_1.default.input `
  border-radius: 4px;
  border: none;
  box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  outline: 0;
  overflow: visible;
  transition: box-shadow 0.2s;
  width: 100%;

  &:focus {
    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
  }
  &:focus::placeholder {
    opacity: 0.5;
    transition: opacity 0.2s;
  }

  &.disabled {
    pointer-events: none;
  }

  &.error {
    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
  }
  &.error:focus {
    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
  }
  &.error::placeholder {
    opacity: 0.5;
  }
`;
//# sourceMappingURL=Input.js.map