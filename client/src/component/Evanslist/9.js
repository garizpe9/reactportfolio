import React from "react";
import { CardBody, CardHeader, Container } from "reactstrap";
import pdf from "../assets/memo/FSI.pdf";

function Evanslist9() {
  return (
    <div>
      <div>
        <CardHeader>
          <Container>
            The Family Support Initiative (FSI) is a pilot program spearheaded
            by Seattle’s Child Justice Advocacy Center (SCJAC). If the FSI’s
            leadership does not clarify role expectations and establish a direct
            reporting structure, employees' attempted process improvements will
            silo employee responsibilities, and a create disproportionate
            workload that contributes to turnover and negatively impacting FSI’s
            ability to fulfill its mission. This memo provides solutions to
            clarify employee role responsibility and establish a direct
            reporting structure that reduces the FSI turnover.
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
export default Evanslist9;
