import React from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectFour(props) {
  return (
    <div>
      <AccordionItem>
        <AccordionHeader targetId="5">
          <h5>PizzabytheByte</h5>
        </AccordionHeader>
        <AccordionBody accordionId="5">
          <Card>
            <CardHeader tag="h3">PizzabytheByte</CardHeader>
            <CardBody>
              <CardTitle tag="h5"></CardTitle>
              <CardText>
                This app uses jQuery, Google Maps API, and Yelp API to pinpoint
                nearest mapped pizza places and creates a table of the
                restaurant names, ratings, and price points.
                <br />
                This was a group project where my core responsibilities were
                finding a CORS API and using jQuery to create a table from the
                Yelp API, managing the timeline and responsibilities of overall
                project
              </CardText>
              <img
                className="profile"
                src={require("../assets/pizza.JPG")}
                alt="card"
              />
            </CardBody>
            <CardFooter className="text-muted">
              <a href="https://github.com/garizpe9/PizzabytheByte">
                View Repo <FontAwesomeIcon icon={faGithub} />{" "}
              </a>
            </CardFooter>
          </Card>
        </AccordionBody>
      </AccordionItem>
    </div>
  );
}

export default ProjectFour;
