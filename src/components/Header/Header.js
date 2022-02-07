import styled from "styled-components/macro";
import BgPatternHeader from "../../assets/desktop/BgPatternHeader";
import Logo from "../../assets/desktop/Logo";
import ToggleButton from "../ToggleButton";

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <ToggleButton />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
