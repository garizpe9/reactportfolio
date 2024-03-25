import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectThree = (props) => {
  return (
    <div>
      <Card>
        <CardHeader tag="h3">Weather Dashboard</CardHeader>
        <CardBody>
          <CardTitle tag="h5"></CardTitle>
          <CardText>
            This dashboard uses two Openweathermap API's and shows the current
            and forecasted weather for the selected city. All searches are
            stored in local storage and can be clicked on to view weather
            updates. This uses jQuery, HTML5, Bootstrap, and CSS3
          </CardText>
          <img
            className="profile"
            src={require("../assets/weather.png")}
            alt="card"
          />
        </CardBody>
        <CardFooter className="text-muted">
          <a href="https://github.com/garizpe9/WeatherDash">
            View Repo <FontAwesomeIcon icon={faGithub} />{" "}
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectThree;
