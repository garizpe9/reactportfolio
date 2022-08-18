import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardTitle, Row, Col, Button} from 'reactstrap';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf,faFolderOpen,faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import Pdf from "./assets/Giovanna Arizpe 2022.pdf"


function Contact() {
    return (
      <div>
      
      <h1 className="display-3">Contact Me</h1>
      <hr className="my-2" />
          <img className="picture" src= {require ("../component/assets/coffee.png")} alt="card"/> <br/>
          <Card>
        <CardHeader tag="h3"></CardHeader>
        <CardBody>
        <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>   
          <CardTitle tag="h5"> <a href="https://www.linkedin.com/in/giovanna-arizpe-msa-64ab2314" target = "_blank"> <FontAwesomeIcon icon={faLinkedin}/> LinkedIn: Giovanna Arizpe, MSA  </a></CardTitle>
<FontAwesomeIcon icon={faLinkedin}/>
          <CardTitle tag="h5"> <a href="/portfolio" ><FontAwesomeIcon icon={faFolderOpen} />View my Portfolio  </a> </CardTitle>

          <CardTitle tag="h5"> <a href={Pdf}  target = "_blank">  <FontAwesomeIcon icon={faFilePdf} target = "_blank"/> View My Resume </a> </CardTitle>

          <CardTitle tag="h5"> <a href="https://github.com/garizpe9" target = "_blank">  <FontAwesomeIcon icon={faGithub} /> View GitHub </a> </CardTitle>

          
          <CardTitle tag="h5"><Button href="https://giovanna-arizpe.herokuapp.com/form" target="_blank">  <FontAwesomeIcon icon={faEnvelopeOpen}/> Send an Email</Button></CardTitle>
          </Col>
          </Row>
        </CardBody>
        <CardFooter className="text-muted"></CardFooter>
      </Card>
      </div>
    );
  }
  
  export default Contact;
  
