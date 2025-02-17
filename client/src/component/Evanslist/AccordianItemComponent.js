import React, { useState } from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
} from "reactstrap";
import Evanslist1 from "./1";
import Evanslist2 from "./2";
import Evanslist3 from "./3";
import Evanslist4 from "./4";
import Evanslist5 from "./5";
import Evanslist6 from "./6";
import Evanslist7 from "./7";
import Evanslist8 from "./8";
import Evanslist9 from "./9";
import Evanslist10 from "./10";
import Evanslist11 from "./11";
import Evanslist12 from "./12";

function MemoListComp(props) {
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
        <AccordionItem>
          <AccordionHeader targetId="1">
            <h5>Pretrial Justice Legislative Negotiation Proposal</h5>
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <Card>
              <Evanslist1 />
            </Card>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="2">
            <h5>
              Beekeeping in Kenya: Local Economies, Policy, & Environmental
              Justice*
            </h5>
          </AccordionHeader>
          <AccordionBody accordionId="2">
            <Card>
              <Evanslist2 />
            </Card>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">
            <h5>
              Final Evaluation for The National Electric Vehicle Infrastructure
              Formula Program*
            </h5>
          </AccordionHeader>
          <AccordionBody accordionId="3">
            <Card>
              <Evanslist3 />
            </Card>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">
            <h5> Policy Analysis to Decrease Single Occupancy Vehicles*</h5>
          </AccordionHeader>
          <AccordionBody accordionId="4">
            <Card>
              <Evanslist4 />
            </Card>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">
            <h5>
              Updating JRC Demographic Integration and Intra-partnership
              Communication
            </h5>
          </AccordionHeader>
          <AccordionBody accordionId="5">
            <Card>
              <Evanslist5 />
            </Card>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="6">
            <h5>U.S. Supreme Court Constitutionality Testing*</h5>
          </AccordionHeader>
          <AccordionBody accordionId="6">
            <Card>
              <Evanslist6 />
            </Card>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="7">
            <h5>Securing Capital for LSC partners and LSC interests*</h5>
          </AccordionHeader>
          <AccordionBody accordionId="7">
            <Card>
              <Evanslist7 />
            </Card>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="9">
            <h5>
              Family Support Initiative Organizational Management
              Recommendations*{" "}
            </h5>
          </AccordionHeader>
          <AccordionBody accordionId="9">
            <Card>
              <Evanslist9 />
            </Card>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="10">
            <h5>Providence Ten-Point Ratios Analysis </h5>
          </AccordionHeader>
          <AccordionBody accordionId="10">
            <Card>
              <Evanslist10 />
            </Card>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="11">
            <h5>Increasing Cascadia Hearing School Revenue Recommendations</h5>
          </AccordionHeader>
          <AccordionBody accordionId="11">
            <Card>
              <Evanslist11 />
            </Card>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="12">
            <h5>
              Sexual Harrassment and Racism are Endangering FDIC's Mission
            </h5>
          </AccordionHeader>
          <AccordionBody accordionId="12">
            <Card>
              <Evanslist12 />
            </Card>
          </AccordionBody>
        </AccordionItem>
      </div>
    </div>
  );
}

export default MemoListComp;
