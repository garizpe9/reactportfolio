import React, { useState } from "react";
import { Container, UncontrolledAccordion } from "reactstrap";
import ProjectOne from "./projects/ProjectOne";
import ProjectTwo from "./projects/ProjectTwo";
import ProjectThree from "./projects/ProjectThree";
import ProjectFour from "./projects/ProjectFour";
import ProjectFive from "./projects/ProjectFive";
import ProjectSix from "./projects/ProjectSix";
import ProjectSeven from "./projects/ProjectSeven";
import ProjectEight from "./projects/ProjectEight";

function Cardcomp(props) {
  const [open, setOpen] = useState("(1)");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Container>
        <UncontrolledAccordion flush defaultOpen={["2"]} toggle={toggle}>
          <ProjectSeven />
          <ProjectSix />
          <ProjectFive />
          <ProjectFour />
          <ProjectThree />
          <ProjectTwo />
          <ProjectOne />
          <ProjectEight />
          <p className="lead"></p>
        </UncontrolledAccordion>
      </Container>
    </div>
  );
}

export default Cardcomp;
