import React from "react";
import styled from "styled-components/macro";
import { BUTTONS, COLORS, QUERIES } from "../../constants";

export type HeroProps = {
  heroTitle: React.ReactElement;
  leadText: React.ReactElement;
  ctaButtonText: string;
  imgSrc: string;
  imgSrcSet?: string;
  imgSrcLaptop: string;
  imgSrcSetLaptop?: string;
  imgAlt: string;
};

const Hero: React.FC<HeroProps> = ({
  heroTitle,
  leadText,
  ctaButtonText,
  imgSrc,
  imgSrcSet,
  imgSrcLaptop,
  imgSrcSetLaptop,
  imgAlt,
}) => {
  return (
    <HeroWrapper>
      <HeroContent>
        <HeroTitle>{heroTitle}</HeroTitle>
        <LeadText>{leadText}</LeadText>
        <CTALink href="#" title="Request Beta Access">
          {ctaButtonText}
        </CTALink>
      </HeroContent>
      <HeroImgWrapper>
        <HeroImg src={imgSrc} srcSet={imgSrcSet} alt={imgAlt} />
      </HeroImgWrapper>
      <HeroImgTabletWrapper>
        <HeroImg src={imgSrcLaptop} srcSet={imgSrcSetLaptop} alt={imgAlt} />
      </HeroImgTabletWrapper>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 56px;
  position: relative;
  align-items: flex-start;
  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    padding: 2.7rem 0;
    gap: 40px;
  }
  @media ${QUERIES.laptopAndUp} {
    min-height: 600px;
    justify-content: center;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  align-items: flex-start;
  @media ${QUERIES.tabletAndUp} {
    gap: 40px;
    margin-right: -50%;
  }
  position: relative;
`;
const HeroTitle = styled.h1`
  color: ${COLORS.darkblue};
  font-weight: 400;
  font-size: calc(38 / 16 * 1rem);
  line-height: calc(44 / 16 * 1rem);
  @media ${QUERIES.tabletAndUp} {
    font-size: calc(56 / 16 * 1rem);
    line-height: calc(64 / 16 * 1rem);
    max-width: 80%;
  }
  @media ${QUERIES.laptopAndUp} {
    font-size: calc(72 / 16 * 1rem);
    line-height: calc(78 / 16 * 1rem);
  }
`;

const LeadText = styled.p`
  color: ${COLORS.grey};
  @media ${QUERIES.tabletAndUp} {
    max-width: 50%;
  }
  @media ${QUERIES.laptopAndUp} {
    max-width: 38%;
  }
`;

const CTALink = styled.a`
  background-color: ${COLORS.darkblue};
  color: ${COLORS.creamWhite};
  font-weight: 700;
  text-decoration: none;
  font-size: calc(18 / 16 * 1rem);
  padding: 15px 32px 14px 32px;
  border-radius: ${BUTTONS.borderRadius};
  &:hover {
    background: linear-gradient(
      135deg,
      ${COLORS.purple} 0%,
      ${COLORS.magenta} 49.21%,
      ${COLORS.orange} 100%
    );
  }
`;

const HeroImgWrapper = styled.div`
  align-self: center;
  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;
const HeroImgTabletWrapper = styled.div`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    display: block;
    max-width: 50%;
    max-height: 600px;
  }
  @media ${QUERIES.laptopAndUp} {
    height: 600px;
  }
`;

const HeroImg = styled.img`
  display: block;
  width: 100%;
  max-height: 600px;
  @media ${QUERIES.laptopAndUp} {
    height: 100%;
    width: auto;
  }
`;
export default Hero;
