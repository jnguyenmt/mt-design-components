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
export const Link: React.FC<Props> = ({
  text,
  url,
  onClick
}) => (
  <StyledButton href={url} onClick={onClick}>
    {text}
  </StyledButton>
)

// Styles
const StyledButton = styled.a`
  font-size: 12px;
`
