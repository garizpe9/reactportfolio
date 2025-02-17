import React from "react";
import Container from "@material-ui/core/Container";
import Memo from "../component/Evanslist/Memo";

function Evans() {
  return (
    <div>
      <Container maxWidth="lg">
        <h1 className="display-3"> Policy Memo Portfolio</h1>
        <p className="lead">
          {" "}
          <Container>
            Memoranda for University of Washington Evans School of Policy and
            Governance
          </Container>
          <img
            src={require("../component/assets/evans.png")}
            alt="card"
            width="100%"
            className="profile"
          />
          <br />
        </p>
        <hr className="my-2" />
        <Memo />
        <br />
        *Memo was completed collaboratively and contributor names are
        anonymized.
      </Container>
    </div>
  );
}
export default Evans;
