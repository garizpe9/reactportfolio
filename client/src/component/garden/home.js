import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const ProjectFive = (props) => {
  return (
    <div>
      <Card>
        <CardHeader tag="h3">
          {" "}
          <p> My Garden Project </p>
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">
            While awaiting my enrollment to University of Washington's Evan's
            School of Governance and Public Policy, I ventured into DIY:{" "}
          </CardTitle>
          <CardText>
            {" "}
            Sanding and painting a fence turned into placing garden bed borders
            and evolved into planting several shrubs, flowers and trees with the
            objective of having at least one plant in bloom each month.
            <br />
            <br />
            Comparative pictures of this project are forthcoming!{" "}
          </CardText>
        </CardBody>
        <CardFooter className="text-muted" />
      </Card>
    </div>
  );
};

export default ProjectFive;
