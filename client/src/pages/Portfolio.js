import React from "react";
import Card from "../component/Card";
import { Jumbotron } from "reactstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "@material-ui/core/Container";
import Memo from "../component/projects/Memo";

function Portfolio() {
  return (
    <div>
      <Container maxWidth="lg">
        <Jumbotron>
          {" "}
          <h1 className="display-3">Memo Policy Portfolio</h1>
          <p className="lead">
            {" "}
            <br />
            <br /> <a href="https://github.com/garizpe9"> </a>
          </p>
          <hr className="my-2" />
          <Memo></Memo>
        </Jumbotron>
        <Jumbotron>
          <h1 className="display-3">Website Full Stack Portfolio </h1>
          <p className="lead">
            Northwestern University Fullstack assignments: <br></br>See All
            Github Repositories{" "}
            <a href="https://github.com/garizpe9">
              {" "}
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </p>
          <hr className="my-2" />
          <Card />
        </Jumbotron>
      </Container>
    </div>
  );
}

export default Portfolio;
