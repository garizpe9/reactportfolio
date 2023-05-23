import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardTitle, Row, Col, } from 'reactstrap';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf,faFolderOpen,} from '@fortawesome/free-solid-svg-icons'
import Pdf from "./assets/5.22.2023 Resume.pdf"


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
          <CardTitle tag="h5"> <a href="https://www.linkedin.com/in/giovannaarizpe"  target = "_blank" rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedin}/> LinkedIn: Giovanna Arizpe </a></CardTitle>

          <CardTitle tag="h5"> <a href="/portfolio" >
              <FontAwesomeIcon icon={faFolderOpen} />View my Portfolio  </a> </CardTitle>

          <CardTitle tag="h5"> <a href={Pdf}  target = "_blank" rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faFilePdf} /> View My Resume </a> </CardTitle>

          <CardTitle tag="h5"> <a href="https://github.com/garizpe9" target = "_blank" rel='noopener noreferrer'>  
              <FontAwesomeIcon icon={faGithub} /> View GitHub </a> </CardTitle>

          

          </Col>
          </Row>
        </CardBody>
        <CardFooter className="text-muted"></CardFooter>
      </Card>
      </div>
    );
  }
  
  export default Contact;
  
//          <CardTitle tag="h5"><Button href="https://giovanna-arizpe.herokuapp.com/form" target="_blank" rel='noopener noreferrer'> <FontAwesomeIcon icon={faEnvelopeOpen}/> Send an Email</Button></CardTitle>