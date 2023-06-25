import React from "react";
import { CardFooter } from "reactstrap";
import Direction from "./NavDirection.js";

export const Footertest = () => {
  return (
    <div>
      <CardFooter className="footnote">
        <Direction />
      </CardFooter>
    </div>
  );
};

export default Footertest;
