import React, { useState } from "react";
import { Container, UncontrolledAccordion } from "reactstrap";
import Evanslist from "../projects/Evanslist";

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
      <div>
        <Container>
          <UncontrolledAccordion flush defaultOpen={["1"]} toggle={toggle}>
            <Evanslist />
          </UncontrolledAccordion>
        </Container>
      </div>
    </div>
  );
}

export default Memo;
