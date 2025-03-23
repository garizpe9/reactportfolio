import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Navbar className="card-title-color" expand="md">
        <NavbarBrand href="/">About</NavbarBrand>
        <NavbarBrand href="/Evans"> Public Policy </NavbarBrand>
        <NavbarBrand href="/datasci"> Data Science</NavbarBrand>

        <NavbarBrand href="/Portfolio">Fullstack Web Dev</NavbarBrand>

        <NavbarBrand href="/resume">Resume</NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Example;
//<NavbarBrand href="/garden">
//<Button>Garden Project</Button>
//</NavbarBrand>
