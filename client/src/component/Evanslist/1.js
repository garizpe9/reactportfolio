import React from "react";
import { CardBody, CardHeader, Container } from "reactstrap";
import pdf from "../assets/memo/Negotiations.pdf";

function Evanslist1() {
  return (
    <div>
      <div>
        <CardHeader>
          {" "}
          <Container>
            A proposal to utilize the legislative Blue-Ribbon Commission to
            create a subcommittee in order to negotiate expanding Washington’s
            pretrial services.{" "}
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
export default Evanslist1;
