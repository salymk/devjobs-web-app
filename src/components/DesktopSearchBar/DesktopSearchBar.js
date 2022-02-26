import React from "react";
import styled from "styled-components/macro";
import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import LocationIcon from "../../assets/desktop/LocationIcon";
import SearchIcon from "../../assets/desktop/SearchIcon";

import Checkbox from "../Checkbox";
import { flexbox } from "@mui/system";

const DesktopSearchBar = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <Form>
        {/* Flex item 1 */}
        <SearchLabel>
          <StyledSearchIcon fill="#5964E0" />
          <Input
            type="text"
            name="Search"
            id=""
            placeholder="Filter by title, companies, expertise…"
          />
          <BorderLeft />
        </SearchLabel>

        {/* Flex item 2 */}
        <LocationLabel>
          <LocationIcon />
          <Input
            type="text"
            name="Location"
            id=""
            placeholder="Filter by location…"
          />
          <BorderLeft />
        </LocationLabel>

        {/* Flex item 3 */}
        <Container>
          <FulltimeLabel>
            <Checkbox
              checked={checked}
              text="Full Time Only"
              onChange={() => setChecked(!checked)}
            />
          </FulltimeLabel>
          <SearchButton type="button" value="Search" />
        </Container>
      </Form>
    </>
  );
};

export default DesktopSearchBar;

const Form = styled.form`
  max-width: 100%;
  display: none;
  background-color: ${COLORS.white};
  height: 80px;
  padding: 16px;
  border-radius: 6px;
  margin-top: 46px;
  transform: translateY(-15px);

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
    align-items: center;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: 38% 25% 32%;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 24px;
`;

const SearchLabel = styled(Label)`
  flex-basis: 312px;
`;

const LocationLabel = styled(Label)`
  flex-basis: 300px;
`;

const FulltimeLabel = styled(Label)``;

const Input = styled.input`
  border: none;
  flex-shrink: 1;
  width: 90%;
  border-radius: 2px;
  caret-color: ${COLORS.violet[200]};
  margin-left: 16px;

  &:focus-visible {
    outline: 2px solid ${COLORS.violet[200]};
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  /* margin-right: 16px; */
`;

const SearchButton = styled.input`
  background-color: ${COLORS.violet[200]};
  border: none;
  padding: 14px 35px;
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.bold};
  border-radius: 5px;
  line-height: 20px;

  &:active {
    transform: scale(0.98);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const BorderLeft = styled.div`
  border-left: 1px solid;
  border-color: hsla(214, 17%, 51%, 0.2);
  height: 80px;
  margin-left: 14px;
`;
