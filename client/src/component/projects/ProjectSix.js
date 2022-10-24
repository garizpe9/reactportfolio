import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
  import {faGithub} from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  
const ProjectSix = (props) => {
  return (
    <div>

    <Card>
      <CardHeader tag="h3" >Aquarium4noobs</CardHeader>
      <CardBody>
        <CardTitle tag="h5"></CardTitle>
        <CardText>This app is for the beginner who wants to create an aquarium. It provides a variety of fish and the ability to select the fish in the site's aquarium based on tank size.
          The app includes a feature for people who want to suggest and submit new fish to be included in the aquarium selection. The app uses node packages express, handlebars, mysql, sequlize, and also includes an image library.<br/>
          <br/> This was a group project where my main role was full-stack functionality.  The tasks in my role included creating the mysql database with sequelize, connecting the database to the server, using sequelize to create queries for "GET" and "POST" with node express urls to recieve and post mysql information, creating a call back from api route to front-end javascript, creating the html form for the 'newfish' url, and creating the css background and button formatting.</CardText>
        <img className="profile" src= {require ("../assets/fish.png")}  alt="card"/>
       
      </CardBody>
      <CardFooter className="text-muted"><a href="https://github.com/garizpe9/Aquarium4noobs">View Repo <FontAwesomeIcon  icon={faGithub}/> </a></CardFooter>
    </Card>
  </div>
  );
};

export default ProjectSix;