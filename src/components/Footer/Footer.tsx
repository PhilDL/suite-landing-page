import styled from "styled-components/macro";
import { COLORS, QUERIES } from "../../constants";

import logo from "../logo.svg";

const Footer: React.FC = ({ children }) => {
  return (
    <FooterWrapper>
      <PaddedContent>
        {children}
        <FooterContent>
          <img src={logo} alt="Logo of Suite Company" />
          <Copyrights>Copyright - Suite</Copyrights>
          <SocialIcons>
            <SocialIcon href="#" title="Visit our Facebook Page">
              <SocialIconImg
                src="/assets/icon-facebook.svg"
                alt="Facebook Icon"
              />
            </SocialIcon>
            <SocialIcon href="#" title="Visit our Twitter Page">
              <SocialIconImg
                src="/assets/icon-twitter.svg"
                alt="Twitter Icon"
              />
            </SocialIcon>
            <SocialIcon href="#" title="Visit our Instagram Page">
              <SocialIconImg
                src="/assets/icon-instagram.svg"
                alt="Instagram Icon"
              />
            </SocialIcon>
          </SocialIcons>
        </FooterContent>
      </PaddedContent>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: ${COLORS.cream};
  margin-top: 600px;
  padding-top: 1rem;
  width: 100%;
  @media ${QUERIES.tabletAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media ${QUERIES.laptopAndUp} {
    margin-top: 484px;
  }
`;

const PaddedContent = styled.div`
  width: 100%;
  @media ${QUERIES.tabletAndUp} {
    padding-left: 39px;
    padding-right: 39px;
  }
  @media ${QUERIES.laptopAndUp} {
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  align-items: center;
  padding-top: 56px;
  padding-bottom: 56px;
  gap: 33px;
  width: 100%;
  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    max-width: 1110px;
    margin: auto;
  }
`;

const Copyrights = styled.span`
  color: ${COLORS.grey};
  font-size: calc(15 / 16 * 1rem);
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 28px;
  align-items: center;
`;
const SocialIcon = styled.a``;
const SocialIconImg = styled.img``;

export default Footer;
