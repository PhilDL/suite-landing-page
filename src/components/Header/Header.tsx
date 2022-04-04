import styled from "styled-components/macro";
import { COLORS, BUTTONS, QUERIES } from "../../constants";

import logo from "../logo.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <a href="/" title="Suite homepage">
        <LogoImg src={logo} alt="Logo of Suite Company" />
      </a>
      <HeaderLink href="#" title="Request beta access">
        Request Beta access
      </HeaderLink>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  padding: 24px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 56px;
  @media ${QUERIES.tabletAndUp} {
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 39px;
    margin-top: 40px;
    margin-bottom: 80px;
  }
`;

const LogoImg = styled.img`
  display: inline-block;
`;

const HeaderLink = styled.a`
  color: ${COLORS.darkblue};
  font-weight: 700;
  text-decoration: none;
  border: ${BUTTONS.borderWidth} solid ${COLORS.darkblue};
  font-size: calc(14 / 16 * 1rem);
  padding: ${BUTTONS.padding};
  border-radius: ${BUTTONS.borderRadius};
  &:hover {
    background-color: ${COLORS.darkblue};
    color: ${COLORS.creamWhite};
  }
`;

export default Header;
