import React, { useState } from "react";
import DataListComp from "./AccordianItemComponent";
import PortfolioSci from "./Portfolio";
import { UncontrolledAccordion } from "reactstrap";
function DataSci(props) {
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
      <PortfolioSci />

      <UncontrolledAccordion flush defaultOpen={["1"]} toggle={toggle}>
        <DataListComp />
      </UncontrolledAccordion>
    </div>
  );
}

export default DataSci;
