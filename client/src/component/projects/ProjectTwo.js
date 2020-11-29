import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

const ProjectTwo = (props) => {
  return (
    <div>

      <Card>
        <CardHeader tag="h3">Featured</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
    </div>
  );
};

export default ProjectTwo;