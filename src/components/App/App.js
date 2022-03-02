import whatInput from "what-input";
import Header from "../Header";
import Container from "../Container";
import BgHeader from "../BgHeader";
import SearchBar from "../SearchBar";
import Jobs from "../Jobs";

function App() {
  return (
    <>
      <BgHeader />
      <Container>
        <Header />
        <SearchBar />
        <Jobs />
      </Container>
    </>
  );
}

export default App;
