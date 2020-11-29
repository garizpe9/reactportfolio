import React from 'react'
import {CardFooter  } from 'reactstrap';
import { faCopyright} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact} from '@fortawesome/free-brands-svg-icons';

var date = new Date();
var fullyear= date.getFullYear()


export const Footertest = () => {
    return(
<div>
    <CardFooter className="footnote">
    <FontAwesomeIcon icon={faCopyright} />  <b>{fullyear}   </b>
    Powered By React <FontAwesomeIcon icon={faReact} /> 
    </CardFooter>
  </div>
    );
};

export default Footertest;


