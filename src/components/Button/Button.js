import React from "react";
import styled from "styled-components/macro";
import { COLORS, WEIGHTS } from "../../constants";

// CSS variables for the different sized buttons
const SIZES = {
  small: {
    "--padding": "14px 14px",
  },
  medium: {
    "--padding": "14px 20px",
  },
  large: {
    "--padding": "14px 35px",
  },
};

const Button = ({ variant, size, children }) => {
  // Make the CSS variables available in my styled components
  // by applying them as inline styles
  const styles = SIZES[size];

  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }
  return <Component style={styles}>{children}</Component>;
};

export default Button;

const ButtonBase = styled.button`
  font-size: 1rem;
  border: none;
  padding: var(--padding);
  font-weight: ${WEIGHTS.bold};
  border-radius: 5px;
  line-height: 20px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline-color: ${COLORS.violet[200]};
    outline-offset: 4px;
  }
`;

const FillButton = styled(ButtonBase)`
  background-color: ${COLORS.violet[200]};
  color: ${COLORS.white};

  &:hover {
    background-color: hsla(235, 82%, 77%, 1);
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: hsla(235, 69%, 61%, 0.1);
  color: ${COLORS.violet[200]};

  &:hover {
    background-color: hsla(235, 69%, 61%, 0.35);
  }
`;
