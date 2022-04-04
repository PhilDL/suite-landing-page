import { ReactElement } from "react";
import styled from "styled-components/macro";
import { COLORS, QUERIES } from "../../constants";

export interface TestimonialAuthor {
  name: string;
  title: string;
  company: string;
  imgSrc: string;
  imgSrcXl?: string;
  imgSrcSet: string;
}
export interface TestimonialProps {
  author: TestimonialAuthor;
  title: ReactElement;
  testimonial: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  author,
  title,
  testimonial,
}) => {
  const imgAlt = `${author.name}'s photo`;
  return (
    <TestimonialsWrapper>
      <TestimonialImgWrapper>
        <TestimonialImg
          src={author.imgSrc}
          srcSet={author.imgSrcSet}
          alt={imgAlt}
        />
      </TestimonialImgWrapper>

      <CurvedLineImg
        src="/assets/pattern-curved-line-2.svg"
        alt="Curved line"
      />
      <TestimonialContent>
        <TestimonialTitle>{title}</TestimonialTitle>
        <TestimonialText>{testimonial}</TestimonialText>
        <TestimonialSource>
          <TestimonialAuthorName>{author.name}</TestimonialAuthorName>
          <TestimonialCompany>
            {author.title}, {author.company}
          </TestimonialCompany>
        </TestimonialSource>
      </TestimonialContent>
    </TestimonialsWrapper>
  );
};

const TestimonialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  position: relative;
  align-items: center;
  background-color: ${COLORS.darkblue};
  color: ${COLORS.creamWhite};
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 15px;
  margin-top: 11rem;
  padding-bottom: calc(64 / 16 * 1rem);
  margin-top: -400px;
  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
    padding-bottom: 0;
    justify-content: space-evenly;
    padding-left: 112px;
    padding-right: 112px;
    background-image: url("/assets/pattern-blur.svg");
    background-repeat: no-repeat;
    background-position-y: 78px;
    background-position-x: 35px;
    margin-top: -300px;
  }
`;

const CurvedLineImg = styled.img`
  height: 40px;
  @media ${QUERIES.laptopAndUp} {
    align-self: flex-start;
    margin-top: calc(88px + 6rem);
  }
`;
const TestimonialImgWrapper = styled.div`
  margin-top: -11rem;
  height: 395px;
  width: 243px;
  @media ${QUERIES.laptopAndUp} {
    margin-top: -3rem;
    height: 590px;
    width: 361px;
  }
`;

const TestimonialImg = styled.img`
  width: 100%;
`;

const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  position: relative;
  align-items: center;
  max-width: 62ch;
  @media ${QUERIES.laptopAndUp} {
    align-items: flex-start;
    flex: 1;
    max-width: 50%;
    padding-top: 88px;
    padding-bottom: 88px;
  }
`;
const TestimonialTitle = styled.h3`
  font-size: calc(40 / 16 * 1rem);
  font-weight: 400;
`;

const TestimonialText = styled.p`
  font-size: calc(18 / 16 * 1rem);
  text-align: center;
  @media ${QUERIES.laptopAndUp} {
    text-align: left;
  }
`;
const TestimonialSource = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  align-items: center;
  @media ${QUERIES.laptopAndUp} {
    align-items: flex-start;
  }
`;
const TestimonialAuthorName = styled.span`
  font-weight: 700;
`;
const TestimonialCompany = styled.span``;
export default Testimonial;
