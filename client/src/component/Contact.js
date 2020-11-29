import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardTitle, Row, Col, Button} from 'reactstrap';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf,faFolderOpen,faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import Pdf from "./assets/Velia Giovanna Arizpe 2020.pdf"


function Contact() {
    return (
      <div>
      
      <h1 className="display-3">Contact Me</h1>
      <hr className="my-2" />
          <img className="picture" src= {require ("../component/assets/IMG_1589.jpg")} alt="card"/> <br/>
          <Card>
        <CardHeader tag="h3"></CardHeader>
        <CardBody>
        <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>   
          <CardTitle tag="h5"> <a href="https://www.linkedin.com/in/giovanna-arizpe-msa-64ab2314" target = "_blank">LinkedIn: Giovanna Arizpe, MSA <FontAwesomeIcon icon={faLinkedin}/> </a></CardTitle>

          <CardTitle tag="h5"> <a href="/portfolio" >View my Portfolio <FontAwesomeIcon icon={faFolderOpen} /> </a> </CardTitle>

          <CardTitle tag="h5"> <a href={Pdf}  target = "_blank"> View My Resume <FontAwesomeIcon icon={faFilePdf}/> </a> </CardTitle>

          <CardTitle tag="h5"> <a href="https://github.com/garizpe9" target = "_blank">View GitHub <FontAwesomeIcon icon={faGithub} /> </a> </CardTitle>

          
          <CardTitle tag="h5"><Button href="https://giovanna-arizpe.herokuapp.com/form" target="_blank"> Send an Email <FontAwesomeIcon icon={faEnvelopeOpen}/></Button></CardTitle>
          </Col>
          </Row>
        </CardBody>
        <CardFooter className="text-muted"></CardFooter>
      </Card>
      </div>
    );
  }
  
  export default Contact;
  