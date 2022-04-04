import React from "react";
import styled from "styled-components/macro";

const CurvedLineOnTop: React.FC = ({ children }) => {
  return <SpanWithCurvedLine>{children}</SpanWithCurvedLine>;
};

const SpanWithCurvedLine = styled.span`
  font-weight: 700;
  position: relative;
  display: inline-block;
  ::before {
    display: block;
    content: " ";
    background-image: url("/assets/pattern-curved-line-1.svg");
    background-size: contain;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: -2rem;
  }
`;
export default CurvedLineOnTop;
