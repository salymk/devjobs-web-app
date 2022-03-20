import React from "react";
import whatInput from "what-input";
import Header from "../Header";
import Container from "../Container";
import BgHeader from "../BgHeader";
import Jobs from "../Jobs";
import SearchBar from "../SearchBar";

function App() {
  const [contract, setContract] = React.useState(null);
  const [title, setTitle] = React.useState("");
  const [mobileTitle, setMobileTitle] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [modalLocation, setModalLocation] = React.useState("");
  // const [modalContract, setModalContract] = React.useState(null);

  const formSubmitHandler = (data) => {
    setContract(data.contract);
    setTitle(data.title || data.mobileTitle);
    setMobileTitle(data.mobileTitle);
    setLocation(data.location);
    setModalLocation(data.modalLocation);

    console.log(data);
  };

  return (
    <>
      <BgHeader />
      <Container>
        <Header />
        <SearchBar formSubmitHandler={formSubmitHandler} />

        <Jobs title={title} location={location} contract={contract} />
      </Container>
    </>
  );
}

export default App;
