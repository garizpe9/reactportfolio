import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
  import {faGithub} from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectFive = (props) => {
  return (
    <div>

      <Card>
        <CardHeader tag="h3" >Team Generator</CardHeader>
        <CardBody>
          <CardTitle tag="h5"></CardTitle>
          <CardText>This website app uses javascript and node to create an html page for a team of employees and will display
          corresponding information. It includes questions specific to the role. For example, managers will have an
          office number, Engineers will have a github, and Interns will have a school. In addition, Jest Test is
          included to ensure that the code is running properly.</CardText>
          <img className="profile" src= "https://img.youtube.com/vi/8xmdjcRvGro/0.jpg" alt="card"/>
          <Button size="sm" href="https://www.youtube.com/watch?v=8xmdjcRvGro">Visit Page</Button>
        </CardBody>
        <CardFooter className="text-muted"><a href="https://github.com/garizpe9/teamgenerator-">View Repo <FontAwesomeIcon  icon={faGithub}/> </a></CardFooter>
      </Card>
    </div>
  );
};

export default ProjectFive;