import React from "react";
import whatInput from "what-input";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "../../helpers/ScrollToTop";

import Job from "../Job";
import NotFound from "../NotFound";
import Jobs from "../Jobs";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Jobs />} />
            <Route path="job/:jobId" element={<Job />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
        <GlobalStyles />
      </BrowserRouter>
    </>
  );
}

export default App;
