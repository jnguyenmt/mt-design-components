import * as React from "react"

// Types
export type Props = {
  /** Optional string that can be used to set the button value */
  text?: string

  /** Make button grow to 100% */
  fluid?: boolean

  /** Disable button */
  disabled?: boolean

  /** Button kind */
  kind?: "default" | "primary" | "danger"

  onClick?: () => void;
}

// Component
const Button: React.FC<Props> = ({
  text,
  fluid,
  disabled,
  children,
  kind,
  onClick
}) => (
  <button
    className={`app-button ${fluid ? "fluid" : ""} ${disabled ? "disabled" : ""} ${
      kind ? kind : ""
    }`}
    onClick={onClick}
  >
    {text || children}
  </button>
);

export default Button;
