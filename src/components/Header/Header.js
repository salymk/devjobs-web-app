import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Logo from "../../assets/desktop/Logo";
import ToggleButton from "../ToggleButton";
import { QUERIES } from "../../constants";

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo alt="Devjobs" />
      </Link>
      <ToggleButton />
    </Wrapper>
  );
};

export default Header;

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
