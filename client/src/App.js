import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aboutme from "./pages/Aboutme";
import Data from "./pages/Data Science";
import Portfolio from "./pages/Portfolio";
import Evans from "./pages/Evans";
import Nav from "./component/Nav";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/aboutme"]}>
            <Aboutme />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/evans">
            <Evans />
          </Route>
          <Route exact path="/resume">
            <Contact />
          </Route>
          <Route exact path="/datasci">
            <Data />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
