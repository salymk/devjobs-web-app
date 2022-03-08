import React from "react";
import whatInput from "what-input";
import Header from "../Header";
import Container from "../Container";
import BgHeader from "../BgHeader";
import SearchBar from "../SearchBar";
import Jobs from "../Jobs";
import DesktopSearchBar from "../DesktopSearchBar/DesktopSearchBar";

function App() {
  const [contract, setContract] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [location, setLocation] = React.useState("");

  const handleSubmit = (values) => {
    console.log(values.title, values.location, values.contract);
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
        <Jobs title={title} />
      </Container>
    </>
  );
}

export default App;
