import React from "react";
import styled from "styled-components/macro";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import CheckIcon from "../../assets/desktop/CheckIcon";

// Built this component with the help of https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd
const Checkbox = ({ className, text, textWidth, checked, ...props }) => {
  return (
    <Wrapper>
      <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />

        <StyledCheckbox checked={checked}>
          <Icon />
        </StyledCheckbox>
      </CheckboxContainer>
      <Text textWidth={textWidth}>{text}</Text>
    </Wrapper>
  );
};

export default Checkbox;

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.span`
  margin-left: 16px;
  font-size: 1rem;
  font-weight: ${WEIGHTS.bold};
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  text-overflow: clip;
  width: ${(props) => props.textWidth};
  color: var(--heading);

  @media ${QUERIES.desktopAndUp} {
    width: 108px;
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled(CheckIcon)`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 24px;
  width: 24px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  overflow: hidden;
  padding: 0;
  opacity: 0;
`;

const StyledCheckbox = styled.div`
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  background: ${(props) =>
    props.checked ? "hsla(235, 69%, 61%, 1)" : `var(--checkbox)`};
  border-radius: 3px;

  &:hover {
    background-color: hsla(235, 69%, 61%, 0.25);
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px ${COLORS.violet[200]};
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
