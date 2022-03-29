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
                    <>
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

                        <Button
                          as="a"
                          variant="outline"
                          size="medium"
                          href={job.website}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Company Site
                        </Button>
                      </HeaderContainer>
                      <Main>
                        <MainHeaderContainer>
                          <MainHeaderDetailsContainer>
                            <PostedAtAndContractContainer>
                              {job.postedAt}
                              <span>&#8226;</span>
                              {job.contract}
                            </PostedAtAndContractContainer>
                            <h1>{job.position}</h1>
                            <h2>{job.location}</h2>
                          </MainHeaderDetailsContainer>
                          <ButtonLink
                            variant="fill"
                            size="large"
                            href={job.apply}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Apply Now
                          </ButtonLink>
                        </MainHeaderContainer>
                        <MainContentContainer>
                          <p>{job.description}</p>
                          <div>
                            <h3>Requirements</h3>
                            <p>{job.requirements.content}</p>
                            <ul>
                              {job.requirements.items.map((item) => (
                                <li>
                                  <p>{item}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3>What You Will Do</h3>
                            <p>{job.role.content}</p>
                            <ol>
                              {job.role.items.map((item) => (
                                <li>
                                  <p>{item}</p>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </MainContentContainer>
                      </Main>
                      <Footer>
                        <div>
                          <h3>{job.position}</h3>
                          <p>So Digital Inc.</p>
                        </div>
                        <ButtonLink
                          variant="fill"
                          size="large"
                          href={job.apply}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Apply Now
                        </ButtonLink>
                      </Footer>
                    </>
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

const ButtonLink = styled(Button)``;

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

// Header Styles
const HeaderContainer = styled.header`
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

//  Main Styles
const Main = styled.main`
  background-color: ${COLORS.white};
  border-radius: 6px;
  padding: 40px 24px;
`;

const MainHeaderContainer = styled.div`
  ${ButtonLink} {
    display: block;
    text-align: center;
    width: 100%;
  }

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;

    ${ButtonLink} {
      width: unset;
      justify-self: end;
    }
  }
`;

const MainHeaderDetailsContainer = styled.div`
  margin-bottom: 50px;

  h1 {
    font-size: ${20 / 16}rem;
    font-weight: ${WEIGHTS.bold};
    color: ${COLORS.dark[100]};
    line-height: 25px;
    margin-top: 4px;
    margin-bottom: 8px;
  }

  h2 {
    font-size: ${14 / 16}rem;
    font-weight: ${WEIGHTS.bold};
    color: ${COLORS.violet[200]};
  }

  @media ${QUERIES.tabletAndUp} {
    h1 {
      font-size: ${28 / 16}rem;
      line-height: 34px;
    }

    margin-bottom: revert;
  }
`;

const PostedAtAndContractContainer = styled.p`
  display: flex;
  gap: 12px;
  color: ${COLORS.gray[300]};
  font-size: 1rem;
`;

const MainContentContainer = styled.div`
  margin-top: 32px;

  div:first-of-type {
    margin: 40px 0;
  }

  h3 {
    font-size: ${20 / 16}rem;
    line-height: 25px;
    margin-bottom: 23px;
  }

  p,
  li {
    font-size: 1rem;
    line-height: 26px;
    color: ${COLORS.gray[300]};
  }

  ul,
  ol {
    margin-top: 32px;
    padding-left: 16px;
  }

  li p {
    margin-left: 32px;
  }

  li::marker {
    color: ${COLORS.violet[200]};
    padding-right: 20px;
    font-weight: ${WEIGHTS.bold};
  }

  li:not(:last-child) {
    margin-bottom: 8px;
  }

  @media ${QUERIES.tabletAndUp} {
    h3 {
      margin-bottom: 28px;
    }

    ul,
    ol {
      margin-top: 24px;
    }
  }
`;

// Footer Styles
const Footer = styled.footer`
  background-color: ${COLORS.white};
  padding: 25px;
  margin-top: 64px;
  border-radius: 6px 6px 0px 0px;

  ${ButtonLink} {
    width: 100%;
    display: block;
    text-align: center;
  }

  div {
    display: none;

    h3 {
      font-size: ${20 / 16}rem;
      line-height: 25px;
      color: ${COLORS.dark[100]};
      margin-bottom: 5px;
    }

    p {
      color: ${COLORS.gray[300]};
    }
  }

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${ButtonLink} {
      width: unset;
    }

    div {
      display: block;
    }
  }
`;
