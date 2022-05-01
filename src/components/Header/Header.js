import React, { useState } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Logo from "../../assets/desktop/Logo";
import ToggleDarkMode from "../ToggleDarkMode/ToggleDarkMode";
import { QUERIES } from "../../constants";
import BgHeader from "../BgHeader";

const Header = () => {
  return (
    <>
      <BgHeader />
      <HeaderContainer>
        <HeaderContent>
          <StyledLink aria-label="DevJobs - Home" to="/">
            <Logo aria-hidden="true" />
          </StyledLink>
          <ToggleDarkMode />
        </HeaderContent>
      </HeaderContainer>
    </>
  );
};

export default Header;

const StyledLink = styled(Link)`
  outline: none;
  border-radius: 1px;
  transition: all 100ms;
  &:focus {
    outline: 2px solid white;
    outline-offset: 4px;
  }

  &:active {
    outline: none;
  }
`;

const HeaderContainer = styled.header`
  position: relative;
  width: 1100px;
  max-width: 100%;
  padding: 0 24px;
  margin: 0 auto;
  @media ${QUERIES.tabletAndUp} {
    padding: 0 40px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 42px;
  }

  @media ${QUERIES.desktopAndUp} {
    margin-top: 45px;
  }
`;
