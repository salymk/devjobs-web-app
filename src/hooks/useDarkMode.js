import { useEffect, useMemo, useState } from "react";
// A custom Hook that provides a multi-instance, multi-tab/browser shared and persistent state.
import createPersistedState from "use-persisted-state";
import useMedia from "./useMedia";

// use-persisted-state is not a hook itself, but is a factory that accepts a
// storage key('localDarkMode') and an optional storage provider (default = localStorage) and
// returns a hook(useLocalDarkMode) that you can use as a direct replacement for useState.
const useLocalDarkMode = createPersistedState("localDarkMode");

// Compose our useMedia hook to detect dark mode preference.
// The API for useMedia looks a bit weird, but that's because ...
// ... it was designed to support multiple media queries and return values.
// Thanks to hook composition we can hide away that extra complexity!
function usePrefersDarkMode() {
  return useMedia(["(prefers-color-scheme: dark)"], [true], false);
}

// This hook handles all the stateful logic required to add a dark mode toggle to Devjobs.
// It uses localStorage to remember the user's chosen mode, defaults to their browser or OS level
// setting using the prefers-color-scheme media query and manages the setting of a .dark className on body to apply our styles.
const useDarkMode = () => {
  // See if user has set a browser or OS preference for dark mode.
  const prefersDarkMode = usePrefersDarkMode();
  // Use our useLocalDarkMode hook to persist state through a page refresh.
  const [isDarkMode, setIsDarkMode] = useLocalDarkMode();

  // // If isDarkMode is defined use it, otherwise fallback to prefersDarkMode.
  // // This allows user to override OS level setting on our website.
  // const enabled =
  //   typeof isDarkMode !== "undefined" ? isDarkMode : prefersDarkMode;

  const enabled = useMemo(
    () => (isDarkMode === undefined ? !!prefersDarkMode : isDarkMode),
    [isDarkMode, prefersDarkMode]
  );

  // // Fire off effect that add/removes dark mode class
  useEffect(() => {
    if (enabled) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [enabled]);

  return {
    isDarkMode,
    setIsDarkMode,
  };
};

export default useDarkMode;
