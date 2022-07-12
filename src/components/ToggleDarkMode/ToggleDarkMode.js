import React from "react";
import styled from "styled-components/macro";
import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/base/SwitchUnstyled";
import useDarkMode from "../../hooks/useDarkMode";

import { COLORS } from "../../constants";
import MoonIcon from "../../assets/desktop/MoonIcon";
import SunIcon from "../../assets/desktop/SunIcon";

const ToggleDarkMode = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const label = {
    componentsProps: {
      input: { "aria-label": "Toggle dark mode" },
    },
  };

  return (
    <Wrapper>
      <StyledSun aria-hidden="true" />
      <SwitchUnstyled
        data-test="toggle-darkmode"
        component={Root}
        {...label}
        checked={isDarkMode}
        onChange={(e) => setIsDarkMode(e.target.checked)}
      />
      <StyledMoon aria-hidden="true" />
    </Wrapper>
  );
};

export default ToggleDarkMode;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 10;
`;

const StyledSun = styled(SunIcon)`
  margin-right: 6px;
`;

const StyledMoon = styled(MoonIcon)`
  margin-left: 6px;
`;

const Root = styled("span")`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  border-radius: 12px;
  margin: 10px;
  cursor: pointer;
  transition: all 200ms;

  &:hover .${switchUnstyledClasses.thumb} {
    background-color: hsla(235, 82%, 77%, 1);
  }

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: ${COLORS.white};
    border-radius: 12px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 5px;
    left: 5px;
    border-radius: 16px;
    background-color: ${COLORS.violet[200]};
    position: relative;
    transition: all 100ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} {
    outline-offset: 4px;
    outline: 2px solid white;
    border-radius: 1px;
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 29px;
      top: 5px;
      background-color: ${COLORS.violet[200]};
    }

    &:hover .${switchUnstyledClasses.thumb} {
      background-color: hsla(235, 82%, 77%, 1);
    }

    .${switchUnstyledClasses.track} {
      background: ${COLORS.white};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`;
