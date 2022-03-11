import React from "react";
import whatInput from "what-input";
import Header from "../Header";
import Container from "../Container";
import BgHeader from "../BgHeader";
import Jobs from "../Jobs";
import Searchbar from "../Searchbar";

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
        <Searchbar
          title={title}
          location={location}
          contract={contract}
          handleSubmit={handleSubmit}
        />
        <Jobs title={title} location={location} contract={contract} />
      </Container>
    </>
  );
}

export default App;
