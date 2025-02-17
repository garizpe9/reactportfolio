import React from "react";
import { CardBody, CardHeader, Container } from "reactstrap";
import pdf from "../assets/memo/Providence.pdf";

function Evanslist10() {
  return (
    <div>
      <div>
        <CardHeader>
          <Container>
            Providence’s 2022 financial analysis summarizes the General Fund,
            governmental activities, and total primary government by utilizing
            Ten-Point test ratios to measure liquidity, profitability, and
            solvency. The ratios are compared against general standards and
            other cities’ ratios. Table 1 provides specific information on how
            ratios were calculated and the resulting financial consequences. The
            initial analysis illustrates that Providence needs financial policy
            revision. However, additional considerations are included in the
            Discussion section and provide a nuanced interpretation of
            Providence’s financial position.
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
export default Evanslist10;
