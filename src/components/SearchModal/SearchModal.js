import React from "react";
import Modal from "@mui/material/Modal";
import styled from "styled-components/macro";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { COLORS, WEIGHTS } from "../../constants";
import Checkbox from "../Checkbox";

import LocationIcon from "../../assets/desktop/LocationIcon";

const schema = yup.object().shape({
  title: yup.string(),
  location: yup.string(),
  contract: yup.bool(),
});

const SearchModal = ({ isOpen, handleClose, modalFormSubmitHandler }) => {
  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <Modal
        open={isOpen || false}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box onSubmit={handleSubmit(modalFormSubmitHandler)}>
          <SearchLabel>
            <StyledLocationIcon />
            <Input
              type="text"
              name="location"
              id=""
              placeholder="Filter by location…"
              {...register("location")}
            />
          </SearchLabel>

          <HR />

          <CheckboxContainer>
            <Controller
              name="contract"
              type="checkbox"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkbox
                  onChange={(e) => field.onChange(e.target.checked)}
                  checked={field.value}
                  name="contract"
                  text="Full Time Only"
                  textWidth="100%"
                />
              )}
            />
          </CheckboxContainer>

          <Button type="submit">Search</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default SearchModal;

const Box = styled.form`
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
