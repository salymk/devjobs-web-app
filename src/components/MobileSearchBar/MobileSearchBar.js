import React from "react";
import styled from "styled-components/macro";
import IconButton from "@mui/material/IconButton";

import { COLORS } from "../../constants";
import SearchIcon from "../../assets/desktop/SearchIcon";
import FilterIcon from "../../assets/mobile/FilterIcon";

const MobileSearchBar = () => {
  return (
    <div>
      <Form>
        <label>
          <Input
            type="text"
            name="Search"
            id=""
            placeholder="Filter by title..."
          />
        </label>

        <ButtonWrapper>
          <FilterButton aria-label="Filter button to open modal">
            <FilterIcon />
          </FilterButton>
          <SearchButton aria-label="Search button">
            <StyledSearchIcon />
          </SearchButton>
        </ButtonWrapper>
      </Form>
    </div>
  );
};

export default MobileSearchBar;

const Form = styled.form`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLORS.white};
  height: 80px;
  padding: 16px;
  border-radius: 6px;
  margin-top: 32px;
  transform: translateY(-15px);
`;

const Input = styled.input`
  border: none;
`;

const ButtonWrapper = styled.div``;

const SearchButton = styled.button`
  padding: 14px;
  background-color: ${COLORS.violet[200]};
  border: none;
  border-radius: 5px;
  margin-left: 20px;
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 20px;
  color: white;
  fill: white;
`;

const FilterButton = styled.button`
  background-color: ${COLORS.white};
  border: none;
`;
