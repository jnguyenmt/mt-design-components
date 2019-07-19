import * as React from "react"
import styled from "styled-components"

// Types
export type Props = {
  /** Input text */
  value?: string

  /** Placeholder text */
  placeholder?: string

  /** Disable Input */
  disabled?: boolean

  /** Show error state */
  error?: boolean

  /** Change handler */
  onChange?: any
}

// Component
const Input: React.FC<Props> = ({
  value,
  placeholder,
  error,
  disabled,
  onChange
}) => (
  <StyledInput
    type="text"
    value={value}
    placeholder={placeholder}
    className={`${error ? "error" : ""} ${disabled ? "disabled" : ""}`}
    onChange={onChange}
  />
)

export default Input;

// Styles
const StyledInput = styled.input`
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
`
