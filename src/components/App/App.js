import React from "react";
import whatInput from "what-input";
import Header from "../Header";
import Container from "../Container";
import BgHeader from "../BgHeader";
import SearchBar from "../SearchBar";
import Jobs from "../Jobs";
import DesktopSearchBar from "../DesktopSearchBar/DesktopSearchBar";

function App() {
  const [contract, setContract] = React.useState(null);
  const [title, setTitle] = React.useState("");
  const [location, setLocation] = React.useState("");

  const handleSubmit = (values) => {
    setContract(values.contract);
    setTitle(values.title);
    setLocation(values.location);
  };

  return (
    <>
      <BgHeader />
      <Container>
        <Header />
        <SearchBar>
          <DesktopSearchBar
            title={title}
            location={location}
            contract={contract}
            handleSubmit={handleSubmit}
          />
        </SearchBar>
        <Jobs title={title} location={location} contract={contract} />
      </Container>
    </>
  );
}

export default App;
