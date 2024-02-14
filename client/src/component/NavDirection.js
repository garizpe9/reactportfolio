import React from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import Pdf from "./assets/Giovanna Arizpe CV.pdf";

export default function App() {
  const [dropdownOpen, setOpen] = React.useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>About Me</DropdownToggle>
      <DropdownMenu>
        <DropdownItem href="/">About Me</DropdownItem>
        <DropdownItem href={Pdf} target="_blank">
          <FontAwesomeIcon icon={faFilePdf} /> Resume
        </DropdownItem>
        <DropdownItem href="/portfolio">
          <FontAwesomeIcon icon={faFolderOpen} /> Portfolio
        </DropdownItem>
        <DropdownItem href="https://github.com/garizpe9" target="_blank">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </DropdownItem>
        <DropdownItem
          href="https://www.linkedin.com/in/giovanna-arizpe-msa-64ab2314"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}
