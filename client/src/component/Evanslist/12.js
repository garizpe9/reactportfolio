import React from "react";
import { CardBody, CardHeader, Container } from "reactstrap";
import pdf from "../assets/memo/FDIC.pdf";

function Evanslist12() {
  return (
    <div>
      <div>
        <CardHeader>
          <Container>
            The FDIC's aggresive and retaliatory behavrio enabled staff sexual
            harrassment and racism. Failure to remedy and update the code of
            conduct, establish ,an inclusive culture, and dismiss problematic
            staff threatens FDIC's stability and risks degrated public
            confidence in U.S. banking.
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
export default Evanslist12;
