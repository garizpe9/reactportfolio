import React from "react";
import { CardBody, CardHeader, Container } from "reactstrap";
import pdf from "../assets/memo/Duwamish.pdf";

function Evanslist8() {
  return (
    <div>
      <div>
        <CardHeader>
          <Container>
            The nonprofit Lake Street Council (LSC) is tasked with coordinating
            Lake Street redevelopment and aspires to reflect Lake Street’s
            diversity through minority owned firms involvement and ownership
            along its storefronts.
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
export default Evanslist8;
