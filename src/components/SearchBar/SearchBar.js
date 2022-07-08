import React from "react";
import styled from "styled-components/macro";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

// Custom Components & etc...
import { COLORS, QUERIES } from "../../constants";
import SearchModal from "../SearchModal";
import Checkbox from "../Checkbox";
import Button from "../Button";

// Icons
import SearchIcon from "../../assets/desktop/SearchIcon";
import LocationIcon from "../../assets/desktop/LocationIcon";
import FilterIcon from "../../assets/mobile/FilterIcon";

const schema = yup.object().shape({
  title: yup.string(),
  mobileTitle: yup.string(),
  location: yup.string(),
  modalLocation: yup.string(),
  contract: yup.bool(),
  modalContract: yup.bool(),
});

// formSubmitHandler lives in App.js
const SearchBar = ({
  formSubmitHandler,
  isOpen,
  handleClose,
  handleOpen,
  titleParam,
  mobileTitleParam,
  locationParam,
  modalLocationParam,
  contractParam,
  modalContractParam,
}) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: titleParam,
      mobileTitle: mobileTitleParam,
      location: locationParam,
      modalLocation: modalLocationParam,
      contract: contractParam || false,
      modalContract: modalContractParam || false,
    },
  });

  return (
    // Prop spreading all of the methods from useForm()
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
        {/* Desktop Search Bar */}
        <DesktopSearchBarContainer>
          {/* Flex item 1 */}
          <SearchLabel>
            <SearchIcon aria-hidden="true" fill="#5964E0" />
            <Input
              type="text"
              name="title"
              aria-label="Filter by title, companies, expertise…"
              placeholder="Filter by title, companies, expertise…"
              data-test="filter-jobs"
              {...methods.register("title")}
            />
            <BorderLeft />
          </SearchLabel>

          {/* Flex item 2 */}
          <LocationLabel>
            <LocationIcon aria-hidden="true" />
            <Input
              type="text"
              name="location"
              aria-label="Filter by location"
              placeholder="Filter by location…"
              data-test="filter-locations"
              {...methods.register("location")}
            />
            <BorderLeft />
          </LocationLabel>

          {/* Flex item 3 */}
          <CheckboxAndButtonContainer>
            {/* Makes it easier to work with external uncontrolled components or native input fields */}
            <Controller
              name="contract"
              type="checkbox"
              control={methods.control}
              render={({ field }) => (
                <Checkbox
                  onChange={(e) => field.onChange(e.target.checked)}
                  checked={field.value}
                  text="Full Time Only"
                  textWidth="70px"
                  aria-label="Full time only"
                  data-test="full-time-checkbox"
                />
              )}
            />

            <DesktopSearchButton
              type="submit"
              variant="fill"
              size="medium"
              data-test="search-button"
            >
              Search
            </DesktopSearchButton>
          </CheckboxAndButtonContainer>
        </DesktopSearchBarContainer>

        {/* Mobile Search Bar */}
        <MobileSearchBarContainer>
          <Label>
            <Input
              type="text"
              name="mobileTitle"
              aria-label="Filter by title, companies, expertise…"
              placeholder="Filter by title..."
              {...methods.register("mobileTitle")}
            />
          </Label>

          <ButtonWrapper>
            <FilterButton
              type="button"
              onClick={handleOpen}
              aria-label="Filter button to open modal"
              size="small"
              variant="ghost"
            >
              <StyledFilterIcon alt="Filter" />
            </FilterButton>
            <Button
              type="submit"
              aria-label="Search"
              variant="fill"
              size="small"
            >
              <StyledSearchIcon alt="Search" fill="#FFF" />
            </Button>
          </ButtonWrapper>
        </MobileSearchBarContainer>
        {/* <DevTool control={methods.control} /> */}
        {/* nested inputs for FormProvider to handle */}
        <SearchModal isOpen={isOpen} handleClose={handleClose} />
      </form>
    </FormProvider>
  );
};

export default SearchBar;

const DesktopSearchBarContainer = styled.div`
  max-width: 100%;
  display: none;
  background-color: var(--background);
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

const Input = styled.input`
  border: none;
  flex-shrink: 1;
  width: 90%;
  border-radius: 2px;
  caret-color: ${COLORS.violet[200]};
  background-color: var(--background);
  color: var(--inputText);

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
  background-color: var(--background);
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

const StyledFilterIcon = styled(FilterIcon)`
  fill: var(--filterIcon);
`;

const FilterButton = styled(Button)`
  margin-right: 20px;
  cursor: pointer;
  background-color: var(--background);
`;
