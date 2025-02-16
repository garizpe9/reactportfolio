import React from "react";

import Container from "@material-ui/core/Container";
import Garden from "../component/garden/home.js";

function Home() {
  return (
    <div>
      <Container maxWidth="md">
        <Garden />
      </Container>
    </div>
  );
}

export default Home;
