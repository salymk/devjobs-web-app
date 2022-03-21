import React from "react";
import whatInput from "what-input";
import Header from "../Header";
import Container from "../Container";
import BgHeader from "../BgHeader";
import Jobs from "../Jobs";
import SearchBar from "../SearchBar";
import useSetState from "../../hooks/useSetState";

const initialState = {
  title: "",
  mobileTitle: "",
  location: "",
  modalLocation: "",
  contract: null,
  modalContract: null,
};

function App() {
  const [state, setState] = useSetState(initialState);

  const formSubmitHandler = (data) => {
    setState({
      title: data.title,
      mobileTitle: data.mobileTitle,
      location: data.location,
      modalLocation: data.modalLocation,
      contract: data.contract,
      modalContract: data.modalContract,
    });

    console.log(data);
  };

  return (
    <>
      <BgHeader />
      <Container>
        <Header />
        <SearchBar formSubmitHandler={formSubmitHandler} />

        {/* Pass form input state to filter jobs */}
        <Jobs
          title={state.title || state.mobileTitle}
          location={state.location || state.modalLocation}
          contract={state.contract || state.modalContract}
        />
      </Container>
    </>
  );
}

export default App;
