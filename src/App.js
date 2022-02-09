import React, { useRef } from "react";
import { customTheme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { all_routes } from "./routes/routes";
import { useRoutes } from "react-router-dom";

function App() {
  const all_pages = useRoutes(all_routes);

  const theme = customTheme();
  // Scroll Top and Down
  const scrollToResultDiv = useRef();
  const scrollFunc = () => {
    window.scrollTo({
      top: scrollToResultDiv.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {all_pages}
    </ThemeProvider>
  );
}

export default App;
