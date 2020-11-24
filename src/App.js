import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Component/Header/Header";
import About from "./Component/About/About";
import Footer from "./Component/Footer/Footer";
import Skills from "./Component/Skills/Skills";
import Contact from "./Component/Contact/Contact";
import Works from "./Component/Works/Works";

function App() {
  return (
    <div className="Background">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <About></About>
          </Route>
          <Route path='/skills'>
            <Skills></Skills>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/works'>
            <Works></Works>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
