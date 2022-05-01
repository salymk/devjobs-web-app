import React, { useState } from "react";
import styled from "styled-components/macro";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import useJobs from "../../hooks/useJobs";
import useSetState from "../../hooks/useSetState";

import JobCard from "../JobCard/JobCard";
import Button from "../Button/Button";
import Header from "../Header";
import Container from "../Container";
import SearchBar from "../SearchBar/SearchBar";

const initialState = {
  title: "",
  mobileTitle: "",
  location: "",
  modalLocation: "",
  contract: null,
  modalContract: null,
};

const Jobs = () => {
  const [loadMore, setLoadMore] = React.useState(6);
  const { status, data, error } = useJobs();
  const [state, setState] = useSetState(initialState);
  const [isOpen, setIsOpen] = useState(false);

  // Handle modal state
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const formSubmitHandler = (data) => {
    setState({
      title: data.title,
      mobileTitle: data.mobileTitle,
      location: data.location,
      modalLocation: data.modalLocation,
      contract: data.contract,
      modalContract: data.modalContract,
    });

    handleClose();
  };

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
          />

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
                  .filter((job) =>
                    state.contract ? job.contract === "Full Time" : true
                  )
                  .filter((job) =>
                    state.location.trim() !== ""
                      ? job.location
                          .toLowerCase()
                          .includes(state.location.trim().toLowerCase())
                      : true
                  )
                  .filter((job) =>
                    state.title.trim() !== ""
                      ? job.company
                          .toLowerCase()
                          .includes(state.title.trim().toLowerCase()) ||
                        job.position
                          .toLowerCase()
                          .includes(state.title.trim().toLowerCase())
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
              </>
            )}
          </Wrapper>
        </Container>
        <ButtonContainer>
          <LoadMoreButton
            aria-label="Load more jobs"
            variant="fill"
            size="large"
            onClick={handleClick}
          >
            Load more
          </LoadMoreButton>
        </ButtonContainer>
      </Main>
    </>
  );
};

export default Jobs;

const Main = styled.main`
  background-color: var(--body);
  transition: all 200ms ease-in;
`;

const LoadingContainer = styled.div`
  display: grid;
  place-items: center;
`;

const Loading = styled.h2`
  font-size: 2rem;
  color: ${COLORS.violet[200]};
  font-weight: ${WEIGHTS.bold};
  margin-top: 48px;
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
