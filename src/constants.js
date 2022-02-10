export const COLORS = {
  white: "hsl(0, 0%, 100%)",
  gray: {
    100: "hsl(210, 22%, 96%)",
    200: "hsl(212, 23%, 69%)",
    300: "hsl(214, 17%, 51%)",
  },
  violet: {
    100: "hsl(235, 82%, 77%)",
    200: "hsl(235, 69%, 61%)",
  },
  dark: {
    100: "hsl(219, 29%, 14%)",
    200: "hsl(220, 29%, 10%)",
  },
};

export const WEIGHTS = {
  normal: 400,
  bold: 700,
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.sm / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.md / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.lg / 16}rem)`,
};
