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
          title={state.title}
          location={state.location}
          contract={state.contract}
        />
      </Container>
    </>
  );
}

export default App;
