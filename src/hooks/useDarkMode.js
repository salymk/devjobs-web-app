// A custom Hook that provides a multi-instance, multi-tab/browser shared and persistent state.
import createPersistedState from "use-persisted-state";

// use-persisted-state is not a hook itself, but is a factory that accepts a
// storage key('localDarkMode') and an optional storage provider (default = localStorage) and
// returns a hook(useLocalDarkMode) that you can use as a direct replacement for useState.
const useLocalDarkMode = createPersistedState("localDarkMode");

// This hook handles the toggle logic required to add a dark mode toggle to Devjobs.
// It uses localStorage to remember the user's chosen mode, and manages the setting of a .dark className on body to apply our styles.
const useDarkMode = () => {
  // Use our useLocalDarkMode hook to persist state through a page refresh.
  const [isDarkMode, setIsDarkMode] = useLocalDarkMode();

  // If isDarkMode is true add 'dark' class else remove it
  if (isDarkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return {
    isDarkMode,
    setIsDarkMode,
  };
};

export default useDarkMode;
