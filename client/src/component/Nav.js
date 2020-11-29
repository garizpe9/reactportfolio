import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf,faFolderOpen,faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'

const Example= (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Giovanna Arizpe</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/giovanna-arizpe-msa-64ab2314" ><FontAwesomeIcon icon={faLinkedin}  /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/garizpe9" ><FontAwesomeIcon icon={faGithub}  /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" ><FontAwesomeIcon icon={faFilePdf}  /></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/">
                  About Me   
                </DropdownItem>
                <DropdownItem >
                  Resume <FontAwesomeIcon icon={faFilePdf}/>    
                </DropdownItem>
                <DropdownItem href="/portfolio">
                  Portfolio <FontAwesomeIcon icon={faFolderOpen} />  
                </DropdownItem>
                <DropdownItem>
                 Contact Me <FontAwesomeIcon icon={faEnvelopeOpen}/>
                </DropdownItem>
                <DropdownItem href="https://github.com/garizpe9">
                  GitHub <FontAwesomeIcon icon={faGithub} />
                </DropdownItem>    
                <DropdownItem href="https://www.linkedin.com/in/giovanna-arizpe-msa-64ab2314" >
                  LinkedIn <FontAwesomeIcon icon={faLinkedin}  />  
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
        
      </Navbar>
    </div>
  );
}


export default Example;