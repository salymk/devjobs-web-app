import React from "react";
import styled from "styled-components/macro";
import { useParams } from "react-router-dom";
import Header from "../Header";
import useJobs from "../../hooks/useJobs";
import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import Button from "../Button/Button";
import Loader from "../Loader";

const Job = () => {
  const { jobId } = useParams();
  const { status, data } = useJobs();

  if (status === "loading")
    return (
      <>
        <Header />
        <Wrapper>
          <LoadingContainer>
            <Loader />
          </LoadingContainer>
        </Wrapper>
      </>
    );
  if (status === "error") return "Error...";

  const job = data.find((j) => j.id.toString() === jobId);
  return (
    <>
      <Header />
      <Wrapper data-test="job-details">
        <>
          <Article>
            <HeaderContainer>
              {/* Flex 1 */}
              <HeaderDetailsContainer>
                <LogoContainer logoBackground={job.logoBackground}>
                  <img src={job.logo} alt={job.company} />
                </LogoContainer>
                <HeaderDetails>
                  <h2>{job.company}</h2>
                  <p>
                    {job.company.split(" ").join("").toLowerCase() + ".com"}
                  </p>
                </HeaderDetails>
              </HeaderDetailsContainer>
              {/* Flex 2 */}

              <StyledButton
                variant="outline"
                size="medium"
                href={job.website}
                target="_blank"
                rel="noreferrer"
                data-test="company-btn"
              >
                Company Site
              </StyledButton>
            </HeaderContainer>
            <JobDescription>
              <JobDescriptionHeader>
                <JobDescriptionHeaderDetails>
                  <PostedAtAndContractContainer>
                    {job.postedAt}
                    <span>&#8226;</span>
                    {job.contract}
                  </PostedAtAndContractContainer>
                  <h1>{job.position}</h1>
                  <p className="location">{job.location}</p>
                </JobDescriptionHeaderDetails>
                <ButtonLink
                  variant="fill"
                  size="large"
                  href={job.apply}
                  target="_blank"
                  rel="noreferrer"
                  data-test="application-btn"
                >
                  Apply Now
                </ButtonLink>
              </JobDescriptionHeader>
              <JobDescriptionContent>
                <p>{job.description}</p>
                <div>
                  <h2>Requirements</h2>
                  <p>{job.requirements.content}</p>
                  <ul>
                    {job.requirements.items.map((item) => (
                      <li key={item}>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2>What You Will Do</h2>
                  <p>{job.role.content}</p>
                  <ol>
                    {job.role.items.map((item) => (
                      <li key={item}>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </JobDescriptionContent>
            </JobDescription>
          </Article>
          <Footer>
            <FooterContainer>
              <div>
                <h2>{job.position}</h2>
                <p>So Digital Inc.</p>
              </div>
              <ButtonLink
                variant="fill"
                size="large"
                href={job.apply}
                target="_blank"
                rel="noreferrer"
                data-test="application-btn-2"
              >
                Apply Now
              </ButtonLink>
            </FooterContainer>
          </Footer>
        </>
      </Wrapper>
    </>
  );
};

export default Job;

const LoadingContainer = styled.div`
  display: grid;
  place-items: center;
`;

const ButtonLink = styled(Button)``;

const StyledButton = styled(Button)`
  background-color: var(--outlineButton);
  color: var(--outlineButtonText);

  &:hover {
    background-color: var(--outlineButtonHover);
  }
`;

const Wrapper = styled.main`
  position: relative;
  margin-top: 40px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 25px;
  }
`;

const Article = styled.article`
  padding: 0 24px;
  width: 730px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

// Header Styles
const HeaderContainer = styled.header`
  background-color: var(--background);
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
    grid-template-columns: 1fr 1fr;
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
    width: 140px;
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
    color: var(--heading);
  }

  p {
    font-size: 1rem;
    font-weight: ${WEIGHTS.normal};
    color: var(--text);
  }
`;

//  Main Styles
const JobDescription = styled.div`
  background-color: var(--background);
  border-radius: 6px;
  padding: 40px 24px;
`;

const JobDescriptionHeader = styled.header`
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

const JobDescriptionHeaderDetails = styled.div`
  margin-bottom: 50px;

  h1 {
    font-size: ${20 / 16}rem;
    font-weight: ${WEIGHTS.bold};
    color: var(--heading);
    line-height: 25px;
    margin-top: 4px;
    margin-bottom: 8px;
  }

  .location {
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
  color: var(--text);
  font-size: 1rem;
`;

const JobDescriptionContent = styled.div`
  margin-top: 32px;

  div:first-of-type {
    margin: 40px 0;
  }

  h2 {
    font-size: ${20 / 16}rem;
    line-height: 25px;
    margin-bottom: 23px;
    color: var(--heading);
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
    h2 {
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
  position: relative;
  background-color: var(--background);
  margin-top: 64px;
`;

const FooterContainer = styled.div`
  padding: 25px 24px;
  width: 730px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${ButtonLink} {
    width: 100%;
    display: block;
    text-align: center;
  }

  div {
    display: none;

    h2 {
      font-size: ${20 / 16}rem;
      line-height: 25px;
      color: var(--heading);
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
