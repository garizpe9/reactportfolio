import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
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
const Memo = (props) => {
  return (
    <div>
      <div>
        <Card>
          <CardHeader tag="h3">
            Memos written for Evans School of Governance and Public Policy:
          </CardHeader>
          <CardBody>
            <CardTitle tag="h5"></CardTitle>
            <CardText>
              {" "}
              <a href={PFF4} target="_blank" rel="noopener noreferrer">
                {" "}
                <FontAwesomeIcon icon={faScroll} /> <a />
                Providence Ten-Point ratios depict an illiquid, unprofitable,
                and insolvent government; broader analysis illustrates a
                resilient policy-focused government amid pandemic anomalies
              </a>{" "}
              <br /> <br />{" "}
              <a href={PFF} target="_blank" rel="noopener noreferrer">
                {" "}
                <FontAwesomeIcon icon={faScroll} /> <a />
                Duwamish River Cleanup Public Engagement Strategy*
              </a>{" "}
              <br /> <br />{" "}
              <a href={PFF5} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faScroll} /> <a />
                Securing Capital for LSC Partners and LSC interests*
                <br /> <br />{" "}
              </a>{" "}
              <a href={PFF3} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faScroll} /> <a />
                Increasing Cascadia Hearing School Revenue Recommendations
                <br /> <br />{" "}
              </a>{" "}
              <a href={PFF6} target="_blank" rel="noopener noreferrer">
                {" "}
                <FontAwesomeIcon icon={faScroll} /> <a />
                Sexual Harrassment and Racism are Endangering FDIC's Mission
                <br /> <br />{" "}
              </a>{" "}
              <a href={PFF2} target="_blank" rel="noopener noreferrer">
                {" "}
                <FontAwesomeIcon icon={faScroll} /> <a />
                Family Support Initiatve Organizational Management
                Recommendations* <br /> <br />{" "}
              </a>{" "}
              <a href={PFF7} target="_blank" rel="noopener noreferrer">
                {" "}
                <FontAwesomeIcon icon={faScroll} /> <a />
                Updating Seattle Community Association Anti-Racism Initiative*{" "}
                <br /> <br />{" "}
              </a>{" "}
              <a href={PFF8} target="_blank" rel="noopener noreferrer">
                {" "}
                <FontAwesomeIcon icon={faScroll} /> <a />
                U.S. Supreme Court Constitutionality Testing*{" "}
              </a>{" "}
              <a href={PFF9} target="_blank" rel="noopener noreferrer">
                {" "}
                <br /> <br /> <FontAwesomeIcon icon={faScroll} /> <a />
                Updating JRC Demographic Integration and Intra-partnership
                Communication
              </a>{" "}
              <br /> <br />{" "}
              <a href={PFF10} target="_blank" rel="noopener noreferrer">
                {" "}
                <FontAwesomeIcon icon={faScroll} /> <a />
                Prioritize Mitigating Damage Over Highway Funding Solutions
              </a>{" "}
              <br /> <br />{" "}
            </CardText>
          </CardBody>
          <CardFooter className="text-muted">
            <FontAwesomeIcon icon={faAsterisk} />
            <a /> Group assignment; names redacted for privacy
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Memo;
