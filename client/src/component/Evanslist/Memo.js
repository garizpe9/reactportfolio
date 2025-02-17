import React, { useState } from "react";
import { Container, UncontrolledAccordion } from "reactstrap";
import AccordianItemComp from "./AccordianItemComponent";

function Memo(props) {
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
          defaultOpen={["1"]}
          toggle={toggle}
          className="profile"
        >
          <AccordianItemComp></AccordianItemComp>
        </UncontrolledAccordion>
      </Container>
    </div>
  );
}

export default Memo;
