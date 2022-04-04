import React from "react";
import styled from "styled-components/macro";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import { QUERIES } from "./constants";
import { CurvedLineOnTop, Emphasis } from "./components/UI";

const STATISTICS = [
  { title: "2K+", subtitle: "Companies" },
  { title: "8", subtitle: "Languages" },
  { title: "1.2M", subtitle: "Leads" },
];

function App() {
  return (
    <>
      <Header></Header>
      <Main>
        <Hero
          heroTitle={
            <>
              A <Emphasis>super </Emphasis>
              <CurvedLineOnTop>solution</CurvedLineOnTop> for your{" "}
              <Emphasis>business</Emphasis>.
            </>
          }
          leadText={
            <>
              Our marketing and sales automations help you scale your outreach
              to get more leads for your company.
            </>
          }
          ctaButtonText="Request Beta Access"
          imgSrc="/assets/image-hero-landscape.webp"
          imgSrcSet="/assets/image-hero-landscape.webp 320w,
          /assets/image-hero-landscape@2x.webp 640w"
          imgSrcLaptop="/assets/image-hero-portrait.webp"
          imgSrcSetLaptop="/assets/image-hero-portrait.webp 320w,
          /assets/image-hero-portrait@2x.webp 640w"
          imgAlt="Graphic of statistics on a phone"
        />
        <Statistics statistics={STATISTICS} />
      </Main>
      <Footer>
        <Testimonial
          author={{
            name: "Jeremy Robinson",
            title: "CMO",
            company: "Fly",
            imgSrc: "/assets/image-jeremy-small.webp",
            imgSrcXl: "/assets/image-jeremy-large.webp",
            imgSrcSet:
              "/assets/image-jeremy-small.webp 320w, /assets/image-jeremy-large.webp 640w",
          }}
          title={
            <>
              It just <strong>works.</strong>
            </>
          }
          testimonial="“I really like how it is an all-in-one solution that handle many of
          the tasks that you would normally need separate tools to do the same
          job. This thing is a miracle worker.”"
        />
      </Footer>
    </>
  );
}

const Main = styled.main`
  padding: 32px 16px 0 16px;
  display: flex;
  flex-direction: column;
  gap: 56px;
  @media ${QUERIES.tabletAndUp} {
    max-width: 1110px;
    margin: auto;
    padding: 0 39px;
    gap: 88px;
  }
  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
    gap: 96px;
  }
`;

export default App;
