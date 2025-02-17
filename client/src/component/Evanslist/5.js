import React from "react";
import { CardBody, CardHeader, Container } from "reactstrap";
import pdf from "../assets/memo/Ranier.pdf";

function Evanslist5() {
  return (
    <div>
      <div>
        <CardHeader>
          <Container>
            To improve quality of life for all public housing residents at the
            Vista, Jobs Resource Center (JRC), is tasked with providing
            employment related services. To fulfil this mission, JRC partnered
            with Washington Works (WAW), an organization that focuses on
            teaching an introspective “disidentifying” approach for women in the
            workforce, and Refugee Woman’s Alliance (REWA), an organization,
            known for providing English as a Second Language (ESL) couurses to
            immigrant and reguee owmen, to provide language specific employment
            assistance
          </Container>{" "}
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
export default Evanslist5;
