import React from "react";
import { CardBody, CardHeader, CardFooter } from "reactstrap";
import pdf from "../assets/memo/Negotiations.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScroll } from "@fortawesome/free-solid-svg-icons";

function Evanslist13() {
  return (
    <div>
      <div>
        <CardHeader></CardHeader>
        <CardBody>
          <a href={pdf} target="_blank" rel="noopener noreferrer">
            <img
              className="pdf"
              src={require("../assets/memo/pdf_18312582.png")}
              alt="card"
            />
          </a>
        </CardBody>
        <CardFooter>
          <FontAwesomeIcon icon={faScroll} color="white" />
          Read Document
        </CardFooter>
      </div>
    </div>
  );
}
export default Evanslist13;
