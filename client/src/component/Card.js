import React from "react";
import { Button } from "reactstrap";
import ProjectOne from "./projects/ProjectOne";
import ProjectTwo from "./projects/ProjectTwo";
import ProjectThree from "./projects/ProjectThree";
import ProjectFour from "./projects/ProjectFour";
import ProjectFive from "./projects/ProjectFive";
import ProjectSix from "./projects/ProjectSix";
import ProjectSeven from "./projects/ProjectSeven";
import ProjectEight from "./projects/ProjectEight";

const Cardcomp = (props) => {
  return (
    <div>
      <ProjectEight />
      <br />
      <ProjectSeven /> <br />
      <ProjectSix /> <br />
      <ProjectFive /> <br />
      <ProjectFour /> <br />
      <ProjectThree /> <br />
      <ProjectTwo /> <br />
      <ProjectOne /> <br />
      <p className="lead"></p>
    </div>
  );
};

export default Cardcomp;
