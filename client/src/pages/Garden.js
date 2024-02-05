import React from "react";
import { Jumbotron } from "reactstrap";
import Container from "@material-ui/core/Container";
import Garden from "../component/garden/home.js";

function Home() {
  return (
    <div>
      <Container maxWidth="md">
        <Jumbotron>
          <Garden />
        </Jumbotron>
      </Container>
    </div>
  );
}

export default Home;
