import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";
import JobCard from "../JobCard/JobCard";
import Button from "../Button/Button";
import data from "../../data.json";

const Jobs = ({ title, location, contract }) => {
  return (
    <>
      <Wrapper>
        {data
          .filter((job) => (contract ? job.contract === "Full Time" : true))
          .filter((job) =>
            location.trim() !== ""
              ? job.location
                  .toLowerCase()
                  .includes(location.trim().toLowerCase())
              : true
          )
          .filter((job) =>
            title.trim() !== ""
              ? job.company
                  .toLowerCase()
                  .includes(title.trim().toLowerCase()) ||
                job.position.toLowerCase().includes(title.trim().toLowerCase())
              : true
          )
          .map((job) => (
            <JobCard
              key={job.id}
              logo={process.env.PUBLIC_URL + job.logo}
              logoBackground={job.logoBackground}
              postedAt={job.postedAt}
              contract={job.contract}
              position={job.position}
              company={job.company}
              location={job.location}
            />
          ))}
      </Wrapper>
      <ButtonContainer>
        <LoadMoreButton variant="fill" size="large">
          Load more
        </LoadMoreButton>
      </ButtonContainer>
    </>
  );
};

export default Jobs;

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: 32px;
  grid-gap: 50px;
  padding-bottom: 56px;

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

const LoadMoreButton = styled(Button)``;

const ButtonContainer = styled.div`
  text-align: center;
  padding-bottom: 100px;
`;
