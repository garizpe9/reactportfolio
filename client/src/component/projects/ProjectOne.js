import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectOne = (props) => {
  return (
    <div>

      <Card>
        <CardHeader tag="h3" >Random Password Generator</CardHeader>
        <CardBody>
          <CardTitle tag="h5"></CardTitle>
          <CardText>This is a random password generator. Upon clicking generate It will alert you upon entering what kind of specifications you would like to have and then creates a password.<br/> This uses HTML5, CSS, and vanilla Javascript</CardText>
          <img className="profile" src= {require ("../assets/Passgen.png")} alt="card"/>

        </CardBody>
        <CardFooter className="text-muted"><a href="https://github.com/garizpe9/passgen">View Repo <FontAwesomeIcon  icon={faGithub}/> </a></CardFooter>
      </Card>
    </div>
  );
};

export default ProjectOne;