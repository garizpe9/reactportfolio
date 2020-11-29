import React from 'react'
import {CardFooter  } from 'reactstrap';
import { faCopyright} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var date = new Date();
var fullyear= date.getFullYear()


export const Footertest = () => {
    return(
<div>
    <CardFooter>
    <FontAwesomeIcon icon={faCopyright} />  <b>{fullyear}</b>
    </CardFooter>
  </div>
    );
};

export default Footertest;


