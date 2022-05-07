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

const Button = ({ href, onClick, variant, size, children, ...otherProps }) => {
  // Make the CSS variables available in my styled components
  // by applying them as inline styles
  const styles = SIZES[size];

  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  } else if (variant === "ghost") {
    Component = GhostButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  // learned this technique here: https://www.joshwcomeau.com/css/styled-components/
  // if their is an href with a type of string then assign an 'a' tag to the tag prop
  const tag = typeof href === "string" ? "a" : "button";

  return (
    <Component
      style={styles}
      onClick={onClick}
      as={tag}
      href={href}
      {...otherProps}
    >
      {children}
    </Component>
  );
};

export default Button;

// The 'button' down here doesn't really matter,
// since it'll always get overwritten by the as prop
const ButtonBase = styled.button`
  font-size: 1rem;
  border: none;
  padding: var(--padding);
  font-weight: ${WEIGHTS.bold};
  border-radius: 5px;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;

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

const GhostButton = styled(ButtonBase)`
  background-color: ${COLORS.white};
`;
