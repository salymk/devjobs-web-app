import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const Jobs = () => {
  return <Wrapper></Wrapper>;
};

export default Jobs;

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: 32px;
  grid-gap: 50px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 12px;
    grid-row-gap: 40px;
    margin-top: 45px;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 65px;
    margin-top: 80px;
  }
`;
