import React from "react";

import Container from "@material-ui/core/Container";
import Contact from "../component/Contact";

function Home() {
  return (
    <div>
      <Container maxWidth="md">
        <Contact />
      </Container>
    </div>
  );
}

export default Home;
