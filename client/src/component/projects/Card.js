import React, { useState } from "react";
import { Container, UncontrolledAccordion } from "reactstrap";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour";
import ProjectFive from "./ProjectFive";
import ProjectSix from "./ProjectSix";
import ProjectSeven from "./ProjectSeven";
import ProjectEight from "./ProjectEight";

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
        <UncontrolledAccordion
          flush
          defaultOpen={["2"]}
          toggle={toggle}
          className="profile"
        >
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
