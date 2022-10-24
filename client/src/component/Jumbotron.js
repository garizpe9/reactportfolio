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
        <p> I help people solve problems through technology. <br/><br/>
        I provide a unique perspective on product management, data wrangling, and platform implementation, by leveraging my tax provision software consulting background, my full stack web development experience, and my political science education.<br/><br/>
        I work cross-functionally to understand technical, business, and user experience needs by examining product functionality with product designers, stakeholders, and users. I collaborate with stakeholders and users to ensure platform build or enhancement is completed by a target date. I create agile/waterfall work plans for design, task, build/minimum viable project, and user acceptance testing. I follow-up with stakeholders and users to ensure product success, receive product feedback, inform stakeholders and users of newer features available, and inform product designers of stakeholder and user feedback. 

       </p>
        <p className="lead">
          <Button color="primary" href="/portfolio" size="lg">Learn More</Button>
        </p>
        
      </Jumbotron>
      
      
    </div>
  );
};

export default Example;
