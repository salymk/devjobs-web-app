import React from "react";
import styled from "styled-components/macro";
import { COLORS, QUERIES } from "../../constants";
import LocationIcon from "../../assets/desktop/LocationIcon";
import CheckIcon from "../../assets/desktop/icon-check.svg";
import SearchIcon from "../../assets/desktop/SearchIcon";

import MobileSearchBar from "../MobileSearchBar";
import DesktopSearchBar from "../DesktopSearchBar/DesktopSearchBar";

const SearchBar = () => {
  return (
    <>
      <MobileSearchBar />
      <DesktopSearchBar />
    </>
  );
};

export default SearchBar;
