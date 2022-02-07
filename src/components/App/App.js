import Header from "../Header";
import styled from "styled-components/macro";
import Container from "../Container";
import BgPatternHeader2 from "../../assets/desktop/bg-pattern-header.svg";

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
  background-image: url(${BgPatternHeader2});
  height: 160px;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;
