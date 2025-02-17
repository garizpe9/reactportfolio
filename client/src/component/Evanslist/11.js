import React from "react";
import { CardBody, CardHeader, Container } from "reactstrap";
import pdf from "../assets/memo/Cascadia.pdf";

function Evanslist11() {
  return (
    <div>
      <div>
        <CardHeader>
          <Container>
            Cascadia Hearing School (CHS) depends on Rubenstein grants to
            supplement its revenue. Grant funding ends after 2022 and threatens
            CHS’s continued operations. To create a surplus and avoid closure,
            CHS should increase Parent-Infant/Early Intervention Program (PIEIP)
            enrollment, increase Preschool Classroom Program (PSCP) enrollment,
            eliminate Outreach and Consultations (OAC), and expand its Audiology
            Program (AP). This change helps the greatest number of families and
            reinforces CHS’s mission by providing centralized Auditory-Verbal
            therapy.
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
export default Evanslist11;
