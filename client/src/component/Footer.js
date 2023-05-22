import React from 'react'
import {CardFooter} from 'reactstrap';
import {faCopyright} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Button} from 'reactstrap';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

var date = new Date();
var fullyear= date.getFullYear()


export const Footertest = () => {
    return(
<div>

    <CardFooter className="footnote">
    <FontAwesomeIcon icon={faCopyright} />  <b>{fullyear}    </b>
    <Button className="center" href="/contact">
    <FontAwesomeIcon icon={faEnvelopeOpen }/> 
       Contact Me </Button>
       </CardFooter>
  </div>
  
    );
};

export default Footertest;


