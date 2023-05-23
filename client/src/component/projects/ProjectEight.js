import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
  import {faGithub} from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  

const ProjectSeven = (props) => {
  return (
    <div>
 <div>

      
<Card>
  <CardHeader tag="h3" >Train of Thought</CardHeader>
  <CardBody>
    <CardTitle tag="h5"></CardTitle>
    <CardText>Train of Thought implores users to sit down and elaborate on their thoughts and feelings on any subject. With our journal entry section, users have free reign to vent out any frustrations or highlight special parts of their day.<br/><br/>
    Train of Thought includes a mood recognition page that detects a user's mood by using their camera and curates prompts for those who need some guidance on how to externalize their temperament.<br/><br/>

    This app uses the following technologies: MERN stack, passport.js, face-api.js, material-auto-rotating-carousel.js, material-ui.js, react-swipeable-views.js, styled-components.js, Healthroughwords API.</CardText>
    <img className="profile" src= {require ("../assets/TOT1.jpg")} alt="card"/>
    <img className="profile" src= {require ("../assets/TOT2.jpg")} alt="card"/>
    <img className="profile" src= {require ("../assets/TOT3.jpg")} alt="card"/>
    
  </CardBody>
  <CardFooter className="text-muted"><a href="https://github.com/garizpe9/facespace">View Repo <FontAwesomeIcon  icon={faGithub}/> </a></CardFooter>
</Card>

</div>
    </div>
  );
};

export default ProjectSeven;