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

  const formSubmitHandler = (data) => {
    setContract(data.contract);
    setTitle(data.title || data.mobileTitle);
    setMobileTitle(data.mobileTitle);
    setLocation(data.location);
    console.log(data);
  };

  console.log(location, contract, mobileTitle);

  return (
    <>
      <BgHeader />
      <Container>
        <Header />
        <SearchBar
          formSubmitHandler={formSubmitHandler}
          setContract={setContract}
          setLocation={setLocation}
          setMobileTitle={setMobileTitle}
        />

        <Jobs title={title} location={location} contract={contract} />
      </Container>
    </>
  );
}

export default App;
