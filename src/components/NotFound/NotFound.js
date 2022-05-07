import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import Header from "../Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Main>
          <ContentWrapper>
            <Content>
              <p>404 error</p>
              <Title>Page not found.</Title>
              <p>Sorry, we couldn't find the page you're looking for.</p>
              <LinkWrapper>
                <StyledLink to="/">
                  Go back home<span aria-hidden="true"> &rarr;</span>
                </StyledLink>
              </LinkWrapper>
            </Content>
          </ContentWrapper>
        </Main>
      </Wrapper>
    </>
  );
};

export default NotFound;

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  padding-top: 4rem;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  margin: 0 auto;
  width: 100%;
  max-width: 80rem;
  padding: 0rem 1rem;

  @media ${QUERIES.tabletAndUp} {
    padding: 0rem 1.5rem;
  }
  @media ${QUERIES.desktopAndUp} {
    padding: 0rem 2rem;
  }
`;

const ContentWrapper = styled.div`
  padding: 4rem 0rem;
`;

const Content = styled.div`
  text-align: center;

  p:first-child {
    color: ${COLORS.violet[200]};
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-transform: uppercase;
    font-weight: ${WEIGHTS.bold};
  }

  p:last-of-type {
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--text);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: ${WEIGHTS.bold};
  color: var(--heading);
  line-height: 1;
  margin-top: 8px;
  margin-bottom: 8px;

  @media ${QUERIES.tabletAndUp} {
    font-size: 3rem;
  }
`;

const LinkWrapper = styled.div`
  margin-top: 1.5rem;
`;

const StyledLink = styled(Link)`
  color: ${COLORS.violet[200]};
  text-decoration: none;
  transition: all 200ms;

  &:hover {
    color: ${COLORS.violet[100]};
  }
`;
