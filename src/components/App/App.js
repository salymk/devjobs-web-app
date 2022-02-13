import whatInput from "what-input";
import Header from "../Header";
import Container from "../Container";
import BgHeader from "../BgHeader";
import SearchBar from "../SearchBar";

function App() {
  return (
    <>
      <BgHeader />
      <Container>
        <Header />
        <SearchBar />
      </Container>
    </>
  );
}

export default App;
