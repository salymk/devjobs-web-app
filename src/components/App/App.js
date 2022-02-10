import Header from "../Header";
import styled from "styled-components/macro";
import Container from "../Container";
import { QUERIES } from "../../constants";
import BgPatternHeaderMobile from "../../assets/mobile/bg-pattern-header.svg";
import BgPatternHeaderTablet from "../../assets/tablet/bg-pattern-header.svg";
import BgPatternHeaderDesktop from "../../assets/desktop/bg-pattern-header.svg";

function App() {
  return (
    <>
      <BgHeader />
      <Container>
        <Header />
      </Container>
    </>
  );
}

export default App;

const BgHeader = styled.div`
  background-image: url(${BgPatternHeaderMobile});
  height: 136px;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  @media ${QUERIES.tabletAndUp} {
    background-image: url(${BgPatternHeaderTablet});
    height: 160px;
  }

  @media ${QUERIES.desktopAndUp} {
    background-image: url(${BgPatternHeaderDesktop});
  }
`;
