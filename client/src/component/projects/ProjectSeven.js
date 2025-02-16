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

const ProjectSeven = (props) => {
  return (
    <div>
      <AccordionItem>
        <AccordionHeader targetId="2">
          <h5>Weather Dashboard</h5>
        </AccordionHeader>
        <AccordionBody accordionId="2">
          <Card>
            <CardHeader tag="h3">Weather Dashboard</CardHeader>
            <CardBody>
              <CardTitle tag="h5"></CardTitle>
              <CardText>
                This app uses a random user API and react to dynamically filter
                and sort information. The information automatically generates
                200 names. From the search bar, the names can be filtered by
                their first or last name. The button next to the first/last name
                sort the rendered users.
                <br />
                In addition to HTML5 and CSS3, this app uses the following node
                packages: react.js, axios.js, react-dom.js, gh-pgates.js, and
                reactstrap.js.
              </CardText>
              <img
                className="profile"
                src={require("../assets/directory.jpg")}
                alt="card"
              />
            </CardBody>
            <CardFooter className="text-muted">
              <a href="https://github.com/garizpe9/employeedirectory">
                View Repo <FontAwesomeIcon icon={faGithub} />{" "}
              </a>
            </CardFooter>
          </Card>
        </AccordionBody>
      </AccordionItem>
    </div>
  );
};

export default ProjectSeven;
