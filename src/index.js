import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./components/App";
import Job from "./components/Job";
import ScrollToTop from "./helpers/ScrollToTop";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="job/:jobId" element={<Job />} />
        </Routes>
      </ScrollToTop>
      <GlobalStyles />
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById("root")
);
