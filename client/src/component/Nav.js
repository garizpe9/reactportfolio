import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
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
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Giovanna Arizpe</NavbarBrand>
        <NavbarBrand href="/garden">
          <Button>Garden Project</Button>
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Example;
