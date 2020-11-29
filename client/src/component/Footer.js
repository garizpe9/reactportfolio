import React from 'react'
import {CardFooter  } from 'reactstrap';
import { faFilePdf,faFolderOpen,faEnvelopeOpen,faCopyright} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Footertest = () => {
    return(
<div>
    <CardFooter>
    <FontAwesomeIcon icon={faFilePdf}/>  
    <FontAwesomeIcon icon={faEnvelopeOpen}  />  
    <FontAwesomeIcon icon={faFolderOpen} />  
    <FontAwesomeIcon icon={faCopyright} />  
    <FontAwesomeIcon icon={faLinkedin}  />  
    <FontAwesomeIcon icon={faGithub} />  
    </CardFooter>
  </div>
    );
};

export default Footertest;


