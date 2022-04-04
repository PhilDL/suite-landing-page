import styled from "styled-components/macro";
import React from "react";
import { COLORS, QUERIES } from "../../constants";

export type Statistic = {
  title: string;
  subtitle: string;
};
export type StatisticsProps = {
  statistics: Statistic[];
};

const Statistics: React.FC<StatisticsProps> = ({ statistics }) => {
  return (
    <StatisticsWrapper>
      {statistics.map((statistic, index) => (
        <StatisticItem key={index}>
          <StatTitle>{statistic.title}</StatTitle>
          <StatSubtitle>{statistic.subtitle}</StatSubtitle>
        </StatisticItem>
      ))}
    </StatisticsWrapper>
  );
};

const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  position: relative;
  align-items: center;
  color: ${COLORS.darkblue};
  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    justify-content: space-evenly;
    gap: 8px;
  }
  @media ${QUERIES.laptopAndUp} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const StatisticItem = styled.div`
  text-align: center;
  @media ${QUERIES.laptopAndUp} {
    text-align: left;
  }
`;
const StatTitle = styled.h3`
  font-weight: 700;
  font-size: calc(48 / 16 * 1rem);
  line-height: 56px;
`;
const StatSubtitle = styled.span`
  font-size: 1rem;
  color: ${COLORS.grey};
  text-transform: uppercase;
`;

export default Statistics;
