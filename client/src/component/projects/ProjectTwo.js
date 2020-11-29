import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
  import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectTwo = (props) => {
  return (
    <div>

      
      <Card>
        <CardHeader tag="h3" >Coding Quiz</CardHeader>
        <CardBody>
          <CardTitle tag="h5"></CardTitle>
          <CardText>This is a quiz that has a timer. It also stores the time and initials in local storage. It clears storage on click. This uses HTML5 and vanilla JavaScript.</CardText>
          <img className="picture" src= {require ("../assets/code.png")} alt="card"/>
          <Button size="sm" href="https://garizpe9.github.io/API-Quiz/">Visit Project Page</Button>
        </CardBody>
        <CardFooter className="text-muted"><a href="https://github.com/garizpe9/API-Quiz">View Repo <FontAwesomeIcon  icon={faGithub}/> </a></CardFooter>
      </Card>
    
    </div>
  );
};

export default ProjectTwo;