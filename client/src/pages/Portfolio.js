import React from "react";
import Card from "../component/Card";
import { Jumbotron } from "reactstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "@material-ui/core/Container";

function Portfolio() {
  return (
    <div>
      <Container maxWidth="lg">
        <h1 className="display-3">NU Website Portfolio </h1>
        <p className="lead">
          Northwestern University Coding Bootcamp Assignments: <br></br>See All
          Github Repositories{" "}
          <a href="https://github.com/garizpe9">
            {" "}
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </p>
        <hr className="my-2" />
        <Card />
      </Container>
    </div>
  );
}

export default Portfolio;
