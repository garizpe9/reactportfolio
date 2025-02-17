import React from "react";
import { CardBody, CardHeader, Container } from "reactstrap";
import pdf from "../assets/memo/SCOTUS.pdf";

function Evanslist6() {
  return (
    <div>
      <div>
        <CardHeader>
          <Container>
            This analysis is for the U.S. Solicitor General who is the primary
            litigator for public officials within the U.S. Attorney General’s
            Office. The purpose of the analysis is to understand the U.S.
            Supreme Court’s (SCOTUS) ruling habits by considering
            constitutionality and issue areas to better allocate U.S. Solicitor
            General resources. To conduct this analysis, we used the 2020
            Supreme Court dataset that contains all SCOTUS cases from 1946 to
            2020 and compares issue areas (area of controversy) and
            unconstitutionality rulings by decade.
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
export default Evanslist6;
