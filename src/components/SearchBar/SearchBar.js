import React from "react";
import styled from "styled-components/macro";
import { Formik, Field, Form, ErrorMessage } from "formik";
import SearchModal from "../SearchModal/SearchModal";

import { COLORS, QUERIES } from "../../constants";
import Checkbox from "../Checkbox";
import Button from "../Button";

import SearchIcon from "../../assets/desktop/SearchIcon";
import LocationIcon from "../../assets/desktop/LocationIcon";
import FilterIcon from "../../assets/mobile/FilterIcon";

const SearchBar = ({ contract, title, location, handleSubmit }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

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
        <Form>
          {/* Desktop Search Bar */}
          <DesktopSearchBarContainer>
            {/* Flex item 1 */}
            <SearchLabel>
              <SearchIcon fill="#5964E0" />
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

              <DesktopSearchButton type="submit" variant="fill" size="medium">
                Search
              </DesktopSearchButton>
            </CheckboxAndButtonContainer>
          </DesktopSearchBarContainer>

          {/* Mobile Search Bar */}
          <MobileSearchBarContainer>
            <Label>
              <Input
                type="text"
                name="title"
                id=""
                placeholder="Filter by title..."
              />
            </Label>
            <ErrorMessage name="title" />

            <ButtonWrapper>
              <FilterButton
                type="button"
                onClick={handleOpen}
                aria-label="Filter button to open modal"
                size="small"
                variant="ghost"
              >
                <FilterIcon />
              </FilterButton>
              <Button
                type="submit"
                aria-label="Search button"
                variant="fill"
                size="small"
              >
                <StyledSearchIcon fill="#FFF" />
              </Button>
            </ButtonWrapper>
            <SearchModal
              isOpen={isOpen}
              handleClose={handleClose}
              location={location}
              contract={contract}
            />
          </MobileSearchBarContainer>
        </Form>
      </Formik>
    </>
  );
};

export default SearchBar;

const DesktopSearchBarContainer = styled.div`
  max-width: 100%;
  display: none;
  background-color: ${COLORS.white};
  height: 80px;
  padding: 16px;
  border-radius: 6px;
  transform: translateY(-15px);
  margin-top: 46px;

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
  flex-basis: 100%;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-height: 24px;
  }
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

  &:focus-visible {
    outline: 2px solid ${COLORS.violet[200]};
  }

  @media ${QUERIES.tabletAndUp} {
    margin-left: 16px;
  }
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

const DesktopSearchButton = styled(Button)`
  @media ${QUERIES.desktopAndUp} {
    padding: 14px 35px;
  }
`;

// Mobile Styles

const MobileSearchBarContainer = styled.div`
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

const ButtonWrapper = styled.div`
  flex-shrink: 0;
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 20px;
  color: white;
  fill: white;
`;

const FilterButton = styled(Button)`
  margin-right: 20px;
  cursor: pointer;
`;
