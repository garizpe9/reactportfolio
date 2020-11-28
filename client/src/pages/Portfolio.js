import React from "react";
import Card from "../component/Card"
import { Jumbotron, } from 'reactstrap';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from '@material-ui/core/Container';



function Portfolio() {
  return (
    <div>
        <Container maxWidth="lg">
        <Jumbotron>
        <h1 className="display-3">Full Stack Portfolio</h1>
        <p className="lead">See All Github Repositories <FontAwesomeIcon icon={faGithub} size="2x" /></p>
        <hr className="my-2" />
            <Card/>
        </Jumbotron>
        </Container>
        
   
      

    </div>
  );
}


export default Portfolio;
