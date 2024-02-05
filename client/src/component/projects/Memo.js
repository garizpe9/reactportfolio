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
                Providence Ten-Point ratios depict an illiquid, unprofitable,
                and insolvent government; broader analysis illustrates a
                resilient policy-focused government amid pandemic anomalies
              </a>{" "}
              <br /> <br />
              <a href={PFF} target="_blank" rel="noopener noreferrer">
                Duwamish River Cleanup Public Engagement Strategy*{" "}
              </a>{" "}
              <br /> <br />
              <a href={PFF5} target="_blank" rel="noopener noreferrer">
                Securing Capital for LSC Partners and LSC interests*
                <br /> <br />{" "}
              </a>{" "}
              <a href={PFF3} target="_blank" rel="noopener noreferrer">
                Increasing Cascadia Hearing School Revenue Recommendations
                <br /> <br />{" "}
              </a>{" "}
              <a href={PFF6} target="_blank" rel="noopener noreferrer">
                {" "}
                Sexual Harracement and Racism are Endangering FDIC's Mission
                <br /> <br />{" "}
              </a>{" "}
              <a href={PFF2} target="_blank" rel="noopener noreferrer">
                {" "}
                Family Support Initiatve Organizational Management
                Recommendations*{" "}
              </a>{" "}
            </CardText>
          </CardBody>
          <CardFooter className="text-muted">
            *Names in group assignments redacted for privacy
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Memo;
