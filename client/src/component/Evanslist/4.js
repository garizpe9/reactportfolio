import React from "react";
import { CardBody, CardHeader, Container } from "reactstrap";
import pdf from "../assets/memo/Bellevue.pdf";

function Evanslist4() {
  return (
    <div>
      <div>
        <CardHeader>
          <Container>
            Policy report that proposes a solution to Bellevue’s Single
            Occupancy Vehicle. The report starts with an an assessment of
            Bellevue stakeholders priorities, level of interest, and level of
            influence toward the city, and proposes a solution.
          </Container>
        </CardHeader>
        <CardBody>
          <a href={pdf} target="_blank" rel="noopener noreferrer">
            <img
              className="pdf"
              src={require("../assets/memo/pdf_18312582.png")}
              alt="card"
            />
          </a>
        </CardBody>
      </div>
    </div>
  );
}
export default Evanslist4;
