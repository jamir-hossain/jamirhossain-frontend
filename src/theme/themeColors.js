const primary = {
  400: "#172a45",
  light: "#4b5769",
  main: "#0d2242",
  dark: "#0a192f",
  contrastText: "#fff",
};

const secondary = {
  light: "#fff676",
  main: "#fff454",
  dark: "#b2aa3a",
  contrastText: "#fff",
};

const grey = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#EEEEEE",
  300: "#e0e0e0", // border color
  400: "#bdbdbd",
  main: "#9e9e9e", // main
  600: "#757575",
  700: "#616161",
  800: "#424242",
  dark: "#202020",
  light: "#6b7280",
};

const text = {
  primary: grey[50],
  secondary: grey.dark,
  disabled: "rgba(0, 0, 0, 0.38)",
  black: "#000000",
};

const error = {
  light: "#f26969",
  main: "#ef4444",
  dark: "#a72f2f",
};

const info = {
  light: "#629bf7",
  main: "#3b82f6",
  dark: "#295bac",
};

const success = {
  light: "#a27cf7",
  main: "#10b981",
  dark: "#0b815a",
};

const warning = {
  light: "#f7b13b",
  main: "#f59e0b",
  dark: "#ab6e07",
};

// export const themeShadows = {
//   1: "0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%)",
//   2: "0px 0px 21px 1px rgba(0, 0, 0, 0.07)",
//   3: "0px 10px 30px rgba(0, 0, 0, 0.1)",
//   4: "0px 7px 30px 3px rgba(0, 0, 0, 0.05)",
// };

export const themeColors = {
  text,
  info,
  grey,
  error,
  primary,
  secondary,
  warning,
  success,
};
