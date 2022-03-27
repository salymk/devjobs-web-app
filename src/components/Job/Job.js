import React from "react";
import styled from "styled-components/macro";
import { useParams } from "react-router-dom";
import BgHeader from "../BgHeader";
import Container from "../Container";
import Header from "../Header";
import useJobs from "../../hooks/useJobs";
import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import Button from "../Button/Button";

const Job = () => {
  const { jobId } = useParams();
  const { status, data, error } = useJobs();

  return (
    <>
      <BgHeader />
      <Container>
        <Header />
        {status === "loading" ? (
          <LoadingContainer>
            <Loading>Loading jobs...</Loading>
          </LoadingContainer>
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <Wrapper>
            <>
              {/* try a different array method */}
              {data
                .filter((job) => job.id.toString() === jobId)
                .map((job) => {
                  return (
                    <HeaderContainer>
                      {/* Flex 1 */}
                      <HeaderDetailsContainer>
                        <LogoContainer logoBackground={job.logoBackground}>
                          <img src={job.logo} alt={job.company} />
                        </LogoContainer>
                        <HeaderDetails>
                          <h2>{job.company}</h2>
                          <p>
                            {job.company.split(" ").join("").toLowerCase() +
                              ".com"}
                          </p>
                        </HeaderDetails>
                      </HeaderDetailsContainer>
                      {/* Flex 2 */}
                      <Button variant="outline" size="medium">
                        Company Site
                      </Button>
                    </HeaderContainer>
                  );
                })}
            </>
          </Wrapper>
        )}
      </Container>
    </>
  );
};

export default Job;

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
  position: relative;
  width: 730px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 45px;
  }
`;

const HeaderContainer = styled.div`
  background-color: ${COLORS.white};
  border-radius: 6px;
  padding: 24px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 32px 0 0;
  }
`;

const HeaderDetailsContainer = styled.div`
  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  transform: translate(10px, -50px);
  width: 50px;
  height: 50px;
  background: ${(props) => props.logoBackground || "white"};
  display: grid;
  place-items: center;
  border-radius: 15px;

  @media ${QUERIES.tabletAndUp} {
    position: relative;
    transform: none;
    width: revert;
    height: revert;
    border-radius: 6px 0 0 6px;

    img {
      width: 80px;
    }
  }
`;

const HeaderDetails = styled.div`
  margin: 24px 0;

  @media ${QUERIES.tabletAndUp} {
    text-align: left;
    margin: 40px 0;
  }

  h2 {
    font-size: ${20 / 16}rem;
    font-weight: ${WEIGHTS.bold};
    margin-bottom: 8px;
  }

  p {
    font-size: 1rem;
    font-weight: ${WEIGHTS.normal};
    color: ${COLORS.gray[300]};
  }
`;
