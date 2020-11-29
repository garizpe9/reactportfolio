import React from 'react';
import { Button } from 'reactstrap';
import ProjectOne from "./projects/ProjectOne"
import ProjectTwo from "./projects/ProjectTwo"
import ProjectThree from "./projects/ProjectThree"
import ProjectFour from "./projects/ProjectFour"
import ProjectFive from "./projects/ProjectFive"
import ProjectSix from "./projects/ProjectSix"
import ProjectSeven from "./projects/ProjectSeven"



const Cardcomp = (props) => {
  return (
    <div>
      <ProjectOne/> <br/>
      <ProjectTwo/> <br/>
      <ProjectThree/> <br/>
      <ProjectFour/> <br/>
      <ProjectFive/> <br/>
      <ProjectSix/> <br/>
      <ProjectSeven/> <br/>
     

      <p className="lead">

          <Button color="primary" href="/contact" size="lg"><b> Contact Me</b></Button>
        </p>
    </div>
  );
};

export default Cardcomp;