import React from "react";
import styled from "styled-components/macro";

const Emphasis: React.FC = ({ children }) => {
  return <StrongText>{children}</StrongText>;
};

const StrongText = styled.strong`
  font-weight: 700;
`;

export default Emphasis;
