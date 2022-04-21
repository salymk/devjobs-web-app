import React, { useState } from "react";
import whatInput from "what-input";
import Header from "../Header";
import Container from "../Container";
import Jobs from "../Jobs/Jobs";
import SearchBar from "../SearchBar/SearchBar";
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
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = (event) => {
    setDarkMode(event.target.checked);
  };

  console.log(darkMode);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const formSubmitHandler = (data) => {
    setState({
      title: data.title,
      mobileTitle: data.mobileTitle,
      location: data.location,
      modalLocation: data.modalLocation,
      contract: data.contract,
      modalContract: data.modalContract,
    });

    handleClose();
  };

  return (
    <>
      <Header checked={darkMode} onChange={handleDarkMode} />
      <main>
        <Container>
          <SearchBar
            formSubmitHandler={formSubmitHandler}
            isOpen={isOpen}
            handleClose={handleClose}
            handleOpen={handleOpen}
          />

          {/* Pass form input state to filter jobs */}
          <Jobs
            title={state.title || state.mobileTitle}
            location={state.location || state.modalLocation}
            contract={state.contract || state.modalContract}
          />
        </Container>
      </main>
    </>
  );
}

export default App;
