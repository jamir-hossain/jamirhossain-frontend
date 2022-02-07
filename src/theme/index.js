import { components } from "./components";
import { typography } from "./typography";
import { themeColors } from "./themeColors";
import { createTheme } from "@mui/material";

export const customTheme = () => {
  let theme = createTheme({
    components: {
      ...components,
    },
    palette: {
      ...themeColors,
      background: {
        default: "#f0f0f0",
        paper: "#ffffff",
      },
    },
    typography,
  });

  theme.shadows[1] = "1px 1px 6px 5px #f5f5f51f";
  theme.shadows[2] = "0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%)";
  theme.shadows[3] = "0px 0px 21px 1px rgba(0, 0, 0, 0.07)";
  theme.shadows[4] = "0px 10px 30px rgba(0, 0, 0, 0.1)";
  theme.shadows[5] = "0px 7px 30px 3px rgba(0, 0, 0, 0.05)";

  return theme;
};
