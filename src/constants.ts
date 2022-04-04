export const COLORS = {
  darkblue: "hsla(219, 43%, 16%, 1)",
  grey: "hsl(218, 20%, 36%)",
  cream: "hsl(30, 33%, 93%)",
  creamWhite: "hsl(30, 29%, 97%)",
  orangePale: "hsl(25, 100%, 94%)",
  purple: "hsl(262, 100%, 69%)",
  magenta: "hsl(292, 76%, 54%)",
  orange: "hsl(31, 100%, 65%)",
};

export const BREAKPOINTS = {
  tabletMin: 750,
  laptopMin: 1100,
};
export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
};

export const BUTTONS = {
  borderRadius: "6px",
  borderWidth: "2px",
  padding:
    "calc(14 / 16 * 1rem) calc(16 / 16 * 1rem) calc(10 / 16 * 1rem) calc(16 / 16 * 1rem)",
};
