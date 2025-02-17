import React from "react";
import { CardBody, CardHeader, Container } from "reactstrap";
import pdf from "../assets/memo/Evaluation Plan.pdf";

function Evanslist3() {
  return (
    <div>
      <div>
        <CardHeader>
          <Container>
            A combined implementation and outcome evaluation on the NEVI Formula
            Program. To guide our evaluation, we have formulated five research
            questions based on the program’s theory and context.
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
export default Evanslist3;
