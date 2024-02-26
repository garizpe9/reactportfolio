import React from "react";
import { Jumbotron, Button } from "reactstrap";
import "./style.css";

const Example = (props) => {
  return (
    <div>
      <Jumbotron className="home">
        <h1 className="display-3">Giovanna Arizpe</h1>
        <p className="lead">About Me</p>
        <hr className="my-2" />
        <img
          className="picture"
          src={require("../component/assets/Headshot.jpg")}
          alt="card"
        />{" "}
        <br />
        <p>
          {" "}
          I am attending Evans School of Public Policy and Governance as an
          Evans School Fellow in the Master of Public Administration program to
          enhance my leadership skills in the public sector. <br />
          <br />
          Having mastered product management, data wrangling, and financial
          technology platform implementation by leveraging my consulting, full
          stack web development and my political science background, my unique
          skillset provides a unique persepctive which encompasses on technical
          details and considers how people are affected.
          <br />
          <br />
          Raised in Florida and recent Seattlite after 10 years in Chicago, I
          like exploring the Pacific Northwest hiking trails and enjoy watching
          the Mariners.
        </p>
        <p className="lead">
          <Button color="primary" href="/portfolio" size="lg">
            Learn More
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Example;
