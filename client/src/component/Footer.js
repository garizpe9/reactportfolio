import React from 'react'
import {CardFooter  } from 'reactstrap';
import { faFilePdf,faFolderOpen,faEnvelopeOpen,faCopyright} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Footertest = () => {
    return(
<div>
    <CardFooter>
    <FontAwesomeIcon icon={faFilePdf} size="2x" />
    <FontAwesomeIcon icon={faEnvelopeOpen} size="2x" />
    <FontAwesomeIcon icon={faFolderOpen} size="2x" />
    <FontAwesomeIcon icon={faCopyright} size="2x" />
    <FontAwesomeIcon icon={faLinkedin} size="2x" />
    <FontAwesomeIcon icon={faGithub} size="2x" />
    </CardFooter>
  </div>
    );
};

export default Footertest;


