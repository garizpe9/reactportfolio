import React from "react";
import { CardBody, CardHeader, Container } from "reactstrap";
import pdf from "../assets/memo/Kenya.pdf";

function Evanslist2() {
  return (
    <div>
      <div>
        <CardHeader>
          <Container>
            This paper examines Kenya's apiary policies & development, its
            economic impacts, and ecological effects for smallholder farmers in
            Kenya
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
export default Evanslist2;
