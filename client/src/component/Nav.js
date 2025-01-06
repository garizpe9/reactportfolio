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
      <Navbar className="card-title-color" expand="md">
        <NavbarBrand className="$body-color" href="/">
          Giovanna Arizpe
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Example;
//<NavbarBrand href="/garden">
//<Button>Garden Project</Button>
//</NavbarBrand>
