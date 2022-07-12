import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components/macro";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import useJobs from "../../hooks/useJobs";

import JobCard from "../JobCard/JobCard";
import Button from "../Button/Button";
import Header from "../Header";
import Container from "../Container";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader";

const Jobs = () => {
  const [loadMore, setLoadMore] = React.useState(9);
  const { status, data, error } = useJobs();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useSearchParams();

  // Get search params
  const titleParam = search.get("title") || "";
  const mobileTitleParam = search.get("mobileTitle") || "";
  const locationParam = search.get("location") || "";
  const modalLocationParam = search.get("modalLocation") || "";
  const contractParam = JSON.parse(search.get("contract"));
  const modalContractParam = JSON.parse(search.get("modalContract"));

  // Handle modal state
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const formSubmitHandler = (data) => {
    // Create search params with form input
    setSearch(data);
    handleClose();
  };

  // Assign search param values
  const title = titleParam || mobileTitleParam;
  const location = locationParam || modalLocationParam;
  const contract = contractParam || modalContractParam;

  const handleClick = () => setLoadMore(loadMore + 6);
  return (
    <>
      <Header />
      <Main>
        <Container>
          <SearchBar
            formSubmitHandler={formSubmitHandler}
            isOpen={isOpen}
            handleClose={handleClose}
            handleOpen={handleOpen}
            titleParam={titleParam}
            mobileTitleParam={mobileTitleParam}
            locationParam={locationParam}
            modalLocationParam={modalLocationParam}
            contractParam={contractParam}
            modalContractParam={modalContractParam}
          />

          <>
            {status === "loading" ? (
              <LoadingContainer>
                <Loader />
              </LoadingContainer>
            ) : status === "error" ? (
              <span>Error: {error.message}</span>
            ) : (
              <>
                <Wrapper data-test="jobs-list">
                  {data
                    .filter((job) =>
                      contract ? job.contract === "Full Time" : true
                    )
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
                        to={`/job/${job.id}`}
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
                  <LoadMoreButton
                    aria-label="Load more jobs"
                    variant="fill"
                    size="large"
                    data-test="load-more-btn"
                    onClick={handleClick}
                  >
                    Load more
                  </LoadMoreButton>
                </ButtonContainer>
              </>
            )}
          </>
        </Container>
      </Main>
    </>
  );
};

export default Jobs;

const Main = styled.main``;

const NoJobs = styled.div``;

const LoadingContainer = styled.div`
  display: grid;
  place-items: center;
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
