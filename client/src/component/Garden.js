import React from "react";
import { Jumbotron } from "reactstrap";
import "./style.css";
import Home from "../pages/Garden";
const Example = (props) => {
  return (
    <div>
      <Jumbotron className="home">
        <Home />
      </Jumbotron>
    </div>
  );
};

export default Example;
