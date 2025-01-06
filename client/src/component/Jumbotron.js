import { React } from "react";
import { Container, Button, Card, CardTitle } from "reactstrap";

const Example = (props) => {
  return (
    <div>
      <Container className="home">
        <h1 className="display-3">Giovanna Arizpe</h1>
        <Card>
          <CardTitle className="top">
            <p className="lead">About Me</p>
            <hr className="my-2" />
          </CardTitle>
          <img
            className="picture"
            src={require("../component/assets/Headshot.jpg")}
            alt="card"
          />{" "}
          <br />
          <p>
            {" "}
            <Container>
              I am attending Evans School of Public Policy and Governance as an
              Evans School Fellow in the Master of Public Administration program
              to enhance my leadership skills in the public sector. <br />
              <br />
              Having mastered product management, data wrangling, and financial
              technology platform implementation by leveraging my consulting,
              full stack web development and my political science background, my
              unique skillset provides a unique persepctive which encompasses on
              technical details and considers how people are affected.
              <br />
              <br />
              Raised in Florida and recent Seattlite after 10 years in Chicago,
              I like exploring the Pacific Northwest hiking trails and enjoy
              watching the Mariners.
            </Container>
          </p>
          <p className="lead"></p>
        </Card>
      </Container>
    </div>
  );
};

export default Example;
