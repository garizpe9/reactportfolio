import React, { useState } from "react";
import Direction from "./NavDirection.js";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Navbar className="card-title-color" expand="md">
        <Container>
          <NavbarBrand href="/Evans"> Public Policy Portfolio</NavbarBrand>
          <NavbarBrand href="/Portfolio">Fullstack Portfolio</NavbarBrand>
          <NavbarBrand href="/">About</NavbarBrand>
          <NavbarBrand href="/Contact">Contact</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Example;
//<NavbarBrand href="/garden">
//<Button>Garden Project</Button>
//</NavbarBrand>
