import React from "react";
import styled from "styled-components/macro";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { COLORS, QUERIES } from "../../constants";
import Checkbox from "../Checkbox";
import Button from "../Button";

import SearchIcon from "../../assets/desktop/SearchIcon";
import LocationIcon from "../../assets/desktop/LocationIcon";

const DesktopSearchBar = ({ contract, title, location, handleSubmit }) => {
  return (
    <>
      <Formik
        initialValues={{
          title: title,
          location: location,
          contract: null ?? false,
        }}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          {/* Flex item 1 */}
          <SearchLabel>
            <StyledSearchIcon fill="#5964E0" />
            <Input
              type="text"
              name="title"
              placeholder="Filter by title, companies, expertise…"
            />
            <BorderLeft />
          </SearchLabel>
          <ErrorMessage name="title" />

          {/* Flex item 2 */}
          <LocationLabel>
            <LocationIcon />
            <Input
              type="text"
              name="location"
              id=""
              placeholder="Filter by location…"
            />
            <BorderLeft />
          </LocationLabel>
          <ErrorMessage name="location" />

          {/* Flex item 3 */}
          <CheckboxAndButtonContainer>
            <FulltimeLabel>
              <Field
                as={Checkbox}
                type="checkbox"
                name="contract"
                text="Full Time Only"
                textWidth="70px"
              />
            </FulltimeLabel>
            <ErrorMessage name="contract" />

            <Button type="submit" variant="fill" size="large">
              Search
            </Button>
          </CheckboxAndButtonContainer>
        </StyledForm>
      </Formik>
    </>
  );
};

export default DesktopSearchBar;

const StyledForm = styled(Form)`
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

const Input = styled(Field)`
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

const CheckboxAndButtonContainer = styled.div`
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
