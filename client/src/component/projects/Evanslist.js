import React, { useState } from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Container,
} from "reactstrap";
import PFF from "../assets/memo/Duwamish.pdf";
import PFF2 from "../assets/memo/FSI.pdf";
import PFF3 from "../assets/memo/Cascadia.pdf";
import PFF4 from "../assets/memo/Providence.pdf";
import PFF5 from "../assets/memo/LSC.pdf";
import PFF6 from "../assets/memo/FDIC.pdf";
import PFF7 from "../assets/memo/SCA.pdf";
import PFF8 from "../assets/memo/SCOTUS.pdf";
import PFF9 from "../assets/memo/Ranier.pdf";
import PFF10 from "../assets/memo/CBO.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScroll, faAsterisk } from "@fortawesome/free-solid-svg-icons";

function Evanslist(props) {
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
          <AccordionItem>
            <AccordionHeader targetId="1">
              <h5>Providence Ten-Point Ratios Analysis </h5>
            </AccordionHeader>
            <AccordionBody accordionId="1">
              <Card>
                <CardHeader></CardHeader>
                <CardBody>
                  <a>
                    Providence Ten-Point ratios depict an illiquid,
                    unprofitable, and insolvent government; broader analysis
                    illustrates a resilient policy-focused government amid
                    pandemic anomalies
                  </a>
                  <br /> <br />
                  <a href={PFF4} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faScroll} color="white" />
                    Read Document
                  </a>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </AccordionBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader targetId="2">
              <h5>Duwamish River Cleanup Public Engagement Strategy*</h5>
            </AccordionHeader>
            <AccordionBody accordionId="2">
              <Card>
                <CardHeader></CardHeader>
                <CardBody>
                  <a href={PFF} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faScroll} color="white" />
                    Read Document
                  </a>
                </CardBody>
                <CardFooter>
                  <FontAwesomeIcon icon={faAsterisk} />
                  <a /> Group assignment; names redacted for privacy
                </CardFooter>
              </Card>
            </AccordionBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader targetId="3">
              <h5>Securing Capital for LSC Partners and LSC interests*</h5>
            </AccordionHeader>
            <AccordionBody accordionId="3">
              <Card>
                <CardHeader></CardHeader>
                <CardBody>
                  <a href={PFF5} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faScroll} color="white" />
                    Read Document
                  </a>
                </CardBody>
                <CardFooter>
                  <FontAwesomeIcon icon={faAsterisk} />
                  <a /> Group assignment; names redacted for privacy
                </CardFooter>
              </Card>
            </AccordionBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader targetId="4">
              <h5>
                Increasing Cascadia Hearing School Revenue Recommendations
              </h5>
            </AccordionHeader>
            <AccordionBody accordionId="4">
              <Card>
                <CardHeader></CardHeader>
                <CardBody>
                  <a href={PFF3} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faScroll} color="white" />
                    Read Document
                  </a>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </AccordionBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader targetId="5">
              <h5>
                Sexual Harrassment and Racism are Endangering FDIC's Mission
              </h5>
            </AccordionHeader>
            <AccordionBody accordionId="5">
              <Card>
                <CardHeader></CardHeader>
                <CardBody>
                  <a href={PFF6} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faScroll} color="white" />
                    Read Document
                  </a>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </AccordionBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader targetId="6">
              <h5>
                Family Support Initiatve Organizational Management
                Recommendations*
              </h5>
            </AccordionHeader>
            <AccordionBody accordionId="6">
              <Card>
                <CardHeader></CardHeader>
                <CardBody>
                  <a href={PFF2} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faScroll} color="white" />
                    Read Document
                  </a>
                </CardBody>
                <CardFooter>
                  <FontAwesomeIcon icon={faAsterisk} />
                  <a /> Group assignment; names redacted for privacy
                </CardFooter>
              </Card>
            </AccordionBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader targetId="7">
              <h5>
                Updating Seattle Community Association Anti-Racism Initiative*
              </h5>
            </AccordionHeader>
            <AccordionBody accordionId="7">
              <Card>
                <CardHeader></CardHeader>
                <CardBody>
                  <a href={PFF7} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faScroll} color="white" />
                    Read Document
                  </a>
                </CardBody>
                <CardFooter>
                  {" "}
                  <FontAwesomeIcon icon={faAsterisk} />
                  <a /> Group assignment; names redacted for privacy
                </CardFooter>
              </Card>
            </AccordionBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader targetId="8">
              <h5>U.S. Supreme Court Constitutionality Testing*</h5>
            </AccordionHeader>
            <AccordionBody accordionId="8">
              <Card>
                <CardHeader></CardHeader>
                <CardBody>
                  <a href={PFF8} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faScroll} color="white" />
                    Read Document
                  </a>
                </CardBody>
                <CardFooter>
                  <FontAwesomeIcon icon={faAsterisk} />
                  <a /> Group assignment; names redacted for privacy
                </CardFooter>
              </Card>
            </AccordionBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader targetId="9">
              <h5>
                Updating JRC Demographic Integration and Intra-partnership
                Communication
              </h5>
            </AccordionHeader>
            <AccordionBody accordionId="9">
              <Card>
                <CardHeader></CardHeader>
                <CardBody>
                  <a href={PFF9} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faScroll} color="white" />
                    Read Document
                  </a>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </AccordionBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader targetId="10">
              <h5>
                Prioritize Mitigating Damage Over Highway Funding Solutions
              </h5>
            </AccordionHeader>
            <AccordionBody accordionId="10">
              <Card>
                <CardHeader></CardHeader>
                <CardBody>
                  <a href={PFF10} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faScroll} color="white" />
                    Read Document
                  </a>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </AccordionBody>
          </AccordionItem>
        </Container>
        <br />
      </div>
    </div>
  );
}

export default Evanslist;
