import React from "react";
import whatInput from "what-input";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "../../helpers/ScrollToTop";
import { DarkTheme, LightTheme } from "../Themes/Themes";
import { useTheme } from "../../helpers/ThemeProvider";

import Job from "../Job";
import NotFound from "../NotFound";
import Jobs from "../Jobs";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
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
      </ThemeProvider>
    </>
  );
}

export default App;
