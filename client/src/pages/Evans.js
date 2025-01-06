import React from "react";
import Container from "@material-ui/core/Container";
import Memo from "../component/projects/Memo";

function Evans() {
  return (
    <div>
      <Container maxWidth="lg">
        <h1 className="display-3"> Policy Memo Portfolio</h1>
        <p className="lead">
          <img
            src={require("../component/assets/evans.png")}
            alt="card"
            width="100%"
          />{" "}
          <br />
          <br />
        </p>
        <hr className="my-2" />
        <Memo />
      </Container>
    </div>
  );
}
export default Evans;
