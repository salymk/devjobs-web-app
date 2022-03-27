import React from "react";
import styled from "styled-components/macro";
import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import JobCard from "../JobCard/JobCard";
import Button from "../Button/Button";
import useJobs from "../../hooks/useJobs";

const Jobs = ({ title, location, contract }) => {
  const [loadMore, setLoadMore] = React.useState(6);
  const { status, data, error } = useJobs();

  const handleClick = () => setLoadMore(loadMore + 6);
  return (
    <>
      <Wrapper>
        {status === "loading" ? (
          <LoadingContainer>
            <Loading>Loading jobs...</Loading>
          </LoadingContainer>
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
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
                    job.position
                      .toLowerCase()
                      .includes(title.trim().toLowerCase())
                  : true
              )
              .slice(0, loadMore)
              .map((job) => (
                <JobCard
                  to={`${job.id}`}
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
          </>
        )}
      </Wrapper>
      <ButtonContainer>
        <LoadMoreButton variant="fill" size="large" onClick={handleClick}>
          Load more
        </LoadMoreButton>
      </ButtonContainer>
    </>
  );
};

export default Jobs;

const LoadingContainer = styled.div`
  display: grid;
  place-items: center;
`;

const Loading = styled.h2`
  font-size: 2rem;
  color: ${COLORS.violet[200]};
  font-weight: ${WEIGHTS.bold};
`;

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
