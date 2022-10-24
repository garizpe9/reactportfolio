import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf,faFolderOpen,faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import Pdf from "./assets/Giovanna Arizpe 2022.pdf"
const Example= (props) => {
  const [isOpen, setIsOpen] = useState(true);


  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Giovanna Arizpe</NavbarBrand>
        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Links
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/">
                  About Me   
                </DropdownItem>
                <DropdownItem href={Pdf}  target = "_blank">
                  <FontAwesomeIcon icon={faFilePdf}/> Resume     
                </DropdownItem>
                <DropdownItem href="/portfolio">
                   <FontAwesomeIcon icon={faFolderOpen} /> Portfolio  
                </DropdownItem>
                <DropdownItem href="https://github.com/garizpe9" target = "_blank">
                 <FontAwesomeIcon icon={faGithub} /> GitHub 
                </DropdownItem>    
                <DropdownItem href="https://www.linkedin.com/in/giovanna-arizpe-msa-64ab2314" target = "_blank" >
                 <FontAwesomeIcon icon={faLinkedin}  /> LinkedIn   
                </DropdownItem>
              </DropdownMenu>
              <DropdownItem href="/contact">
                  <FontAwesomeIcon icon={faEnvelopeOpen}/> Contact Me
                </DropdownItem>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
        
      </Navbar>
    </div>
  );
}


export default Example;
