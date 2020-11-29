import React from "react";
import { Jumbotron, } from 'reactstrap';
import Container from '@material-ui/core/Container';
import Contact from "../component/Contact"




function Home() {
  return (
    <div>
    <Container maxWidth="md">
    <Jumbotron>
      <Contact/>
       
    </Jumbotron>
    </Container>
    </div>
  );
}

export default Home;
