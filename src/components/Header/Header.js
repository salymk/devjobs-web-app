import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Logo from "../../assets/desktop/Logo";
import ToggleButton from "../ToggleButton";
import { QUERIES, COLORS } from "../../constants";

const Header = () => {
  return (
    <Wrapper>
      <StyledLink aria-label="Back to home page" to="/">
        <Logo alt="Devjobs" />
      </StyledLink>
      <ToggleButton />
    </Wrapper>
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

const Wrapper = styled.header`
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
