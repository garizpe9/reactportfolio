import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import "./style.css"


const Example = (props) => {
  return (
    <div>
      <Jumbotron className="home">
        <h1 className="display-3">Giovanna Arizpe</h1>
        <p className="lead">About Me</p>
        <hr className="my-2" />
        <img className="picture" src= {require ("../component/assets/IMG_1589.jpg")} alt="card"/> <br/>
        <p>I am a Full Stack Software Architect with tax provision implementation knowledge educated at University of Florida, Loyola University of Chicago, and Northwestern University. My skills range from HTML, CSS, JavaScript, Node.js, MySQL, MongoDB, React to ERM systems and Tax Provision and compliance software with strengths in problem solving, creativity, and teamwork.<br/><br/>

        I am passionate about learning new technologies and applying skills to improve project efficiencies. I  also enjoy showing clients how technology works and I take time after troubleshooting to demonstate to clients how to solve the issue themselves so they can better maintain their software environment. <br/><br/>
        I strive to enhance internal and external processes and created company guidelines on how to update software along with company instructional guides for clients to use on tax software.  <br/><br/>

         I am excited to develop responsive websites and am positioned to provide unique perspectives on how end users interact with websites and software platforms by leveraging my background in professional services in a Tax Provision software company.</p>
        <p className="lead">
          <Button color="primary" href="/portfolio" size="lg">Learn More</Button>
        </p>
        
      </Jumbotron>
      
      
    </div>
  );
};

export default Example;
