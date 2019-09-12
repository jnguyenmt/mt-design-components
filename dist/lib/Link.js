import * as React from "react";
import styled from "styled-components";
// Component
const Link = ({ text, url, onClick }) => (React.createElement("a", { href: url, onClick: onClick }, text));
export default Link;
// Styles
const StyledButton = styled.a `
  font-size: 12px;
`;
//# sourceMappingURL=Link.js.map