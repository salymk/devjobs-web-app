import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";
import JobCard from "../JobCard/JobCard";
import data from "../../data.json";

const Jobs = () => {
  return (
    <Wrapper>
      {data.map((job) => (
        <JobCard
          key={job.id}
          logo={job.logo}
          logoBackground={job.logoBackground}
          postedAt={job.postedAt}
          contract={job.contract}
          position={job.position}
          company={job.company}
          location={job.location}
        />
      ))}
    </Wrapper>
  );
};

export default Jobs;

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: 32px;
  grid-gap: 50px;
  padding-bottom: 45px;

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
