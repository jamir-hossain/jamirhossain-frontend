export const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        // textTransform: "none",
        borderRadius: "4px",
        fontWeight: 500,
        padding: "6px 16px",
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        height: "100%",
        width: "100%",
      },
      body: {
        margin: 0,
        padding: 0,
        height: "100%",
      },
      a: {
        color: "inherit",
        textDecoration: "none",
        "&:hover": { textDecoration: "none" },
      },
      "#root": {
        height: "100%",
      },
    },
  },
};
