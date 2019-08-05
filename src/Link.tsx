import * as React from "react"
import styled from "styled-components"

// Types
export type Props = {
  /** Optional string that can be used to set the button value */
  text?: string,
  url?: string,
  onClick?: () => { }
}

// Component
const Link: React.FC<Props> = ({
  text,
  url,
  onClick
}) => (
  <a href={url} onClick={onClick}>
    {text}
  </a>
)

export default Link;

// Styles
const StyledButton = styled.a`
  font-size: 12px;
`
