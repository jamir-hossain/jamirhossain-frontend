import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Component/Header/Header";
import About from "./Component/About/About";
import Footer from "./Component/Footer/Footer";
import Skills from "./Component/Skills/Skills";
import Contact from "./Component/Contact/Contact";
import Works from "./Component/Works/Works";
import Achievement from "./Component/Achievement/Achievement";
import WorksDetails from "./Component/WorksDetails/WorksDetails";
import { customTheme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
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
      <div className="Background">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <About></About>
            </Route>
            <Route path="/skills">
              <Skills></Skills>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/works">
              <Works scrollFunc={scrollFunc} ref={scrollToResultDiv}></Works>
            </Route>
            <Route path="/project/:id">
              <WorksDetails></WorksDetails>
            </Route>
            <Route path="/achievement">
              <Achievement></Achievement>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
