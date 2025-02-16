import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Navbar className="card-title-color" expand="md">
        <NavbarBrand href="/Evans"> Public Policy Portfolio</NavbarBrand>
        <NavbarBrand href="/Portfolio">Fullstack Portfolio</NavbarBrand>
        <NavbarBrand href="/">About</NavbarBrand>
        <NavbarBrand href="/Contact">Contact</NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Example;
//<NavbarBrand href="/garden">
//<Button>Garden Project</Button>
//</NavbarBrand>
