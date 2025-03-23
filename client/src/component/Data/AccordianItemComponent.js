import React, { useState } from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  CardFooter,
} from "reactstrap";
import CodeEditor from "./JailCensus";
import PTSCodeEditor from "./PTS";

function DataListComp(props) {
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
      <AccordionItem>
        <AccordionHeader targetId="1">
          <h5>Stata: 2019 Washington Jail Population by County</h5>
        </AccordionHeader>
        <AccordionBody accordionId="1">
          <Card>
            <CardHeader tag="h3">
              2019 Washington Jail Population by County{" "}
            </CardHeader>
            <CardBody>
              <CardTitle tag="h5"></CardTitle>
              <CardText>
                {" "}
                This code uses stata to pull information from the 2019 U.S. Jail
                Census to then isolate Washington state and group by countey.
                The code also includes equations to remove dupliate information
                and group by jail/county.
              </CardText>{" "}
              <CodeEditor />
            </CardBody>
            <CardFooter className="text-muted">
              {" "}
              Source:
              <a href="https://www.icpsr.umich.edu/web/NACJD/studies/38323">
                2019 Jail Census{" "}
              </a>
            </CardFooter>
          </Card>
        </AccordionBody>
      </AccordionItem>

      <AccordionItem>
        <AccordionHeader targetId="2">
          <h5> Stata: Pretrial Service Analysis</h5>
        </AccordionHeader>
        <AccordionBody accordionId="2">
          <Card>
            <CardHeader tag="h3">
              2019-2023 Pretrial Service Analysis{" "}
            </CardHeader>
            <CardBody>
              <CardTitle tag="h5"></CardTitle>
              <CardText>
                {" "}
                This code uses stata analyze pretrial information received from
                a government body. Information was renamed, redacted, and
                adjusted to remove any identifying information.
              </CardText>{" "}
              <PTSCodeEditor />
            </CardBody>
            <CardFooter className="text-muted">
              {" "}
              Source:
              <a href="https://sao.wa.gov/sites/default/files/2025-03/PA_overview_Expanding_Use_Pretrial_Services.pdf">
                Expanding Use of Pretrial Services{" "}
              </a>
            </CardFooter>
          </Card>
        </AccordionBody>
      </AccordionItem>
    </div>
  );
}

export default DataListComp;
