import React from "react";
import Modal from "@mui/material/Modal";
import styled from "styled-components/macro";
import { COLORS, WEIGHTS } from "../../constants";
import Checkbox from "../Checkbox";
import LocationIcon from "../../assets/desktop/LocationIcon";

const SearchModal = ({ isOpen, handleClose }) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div>
      <Modal
        open={isOpen || false}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <SearchLabel>
            <StyledLocationIcon />
            <Input
              type="text"
              name="Search"
              id=""
              placeholder="Filter by location…"
            />
          </SearchLabel>

          <HR />

          <CheckboxContainer>
            <Checkbox
              checked={checked}
              text="Full Time Only"
              onChange={() => setChecked(!checked)}
            />
          </CheckboxContainer>

          <Button>Search</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default SearchModal;

const Box = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 327px;
  width: 100%;
  height: 225px;
  background-color: ${COLORS.white};
  border-radius: 6px;
  padding: 24px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 24px;
  flex-shrink: 1;
`;

const SearchLabel = styled(Label)``;

const Input = styled.input`
  height: 20px;
  caret-color: ${COLORS.violet[200]};
  width: 100%;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${COLORS.violet[200]};
  }
`;

const StyledLocationIcon = styled(LocationIcon)`
  width: 24px;
  margin-right: 16px;
`;

const HR = styled.hr`
  background: hsla(214, 17%, 51%, 1);
  margin-top: 24px;
  margin-left: -24px;
  margin-right: -24px;
  mix-blend-mode: normal;
  opacity: 0.2;
`;

const CheckboxContainer = styled.div`
  padding: 24px 0;
`;

const Button = styled.button`
  color: white;
  background: ${COLORS.violet[200]};
  border-radius: 5px;
  height: 48px;
  width: 100%;
  border: none;
  font-weight: ${WEIGHTS.bold};
  cursor: pointer;
  transition: all 200ms;

  &:active {
    transform: scale(0.98);
  }
`;
