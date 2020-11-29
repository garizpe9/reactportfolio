import React from 'react';
import ProjectOne from "./projects/ProjectOne"
import ProjectTwo from "./projects/ProjectTwo"
import ProjectThree from "./projects/ProjectThree"
import ProjectFour from "./projects/ProjectFour"
import ProjectFive from "./projects/ProjectFive"
import ProjectSix from "./projects/ProjectSix"
import ProjectSeven from "./projects/ProjectSeven"
import ProjectEight from "./projects/ProjectEight"


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
      <ProjectEight/> <br/>
    </div>
  );
};

export default Cardcomp;