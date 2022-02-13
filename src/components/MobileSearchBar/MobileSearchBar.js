import React from "react";
import styled from "styled-components/macro";
import IconButton from "@mui/material/IconButton";

import { COLORS, QUERIES } from "../../constants";
import SearchIcon from "../../assets/desktop/SearchIcon";
import FilterIcon from "../../assets/mobile/FilterIcon";

const MobileSearchBar = () => {
  return (
    <>
      <Form>
        <Label>
          <Input
            type="text"
            name="Search"
            id=""
            placeholder="Filter by title..."
          />
        </Label>

        <ButtonWrapper>
          <FilterButton aria-label="Filter button to open modal">
            <FilterIcon />
          </FilterButton>
          <SearchButton aria-label="Search button">
            <StyledSearchIcon />
          </SearchButton>
        </ButtonWrapper>
      </Form>
    </>
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

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const Input = styled.input`
  border: none;
  flex-shrink: 1;
  width: 90%;
  border-radius: 2px;
  caret-color: ${COLORS.violet[200]};

  &:focus-visible {
    outline: 2px solid ${COLORS.violet[200]};
  }
`;

const Label = styled.label`
  flex-basis: 100%;
`;

const ButtonWrapper = styled.div`
  flex-shrink: 0;
`;

const SearchButton = styled.button`
  padding: 14px;
  background-color: ${COLORS.violet[200]};
  border: none;
  border-radius: 5px;
  margin-left: 20px;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: ${COLORS.violet[100]};
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 20px;
  color: white;
  fill: white;
`;

const FilterButton = styled.button`
  background-color: ${COLORS.white};
  border: none;
  cursor: pointer;
`;
