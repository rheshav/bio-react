import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Hrj from './assets/hcj.jpg';
import Mern from './assets/mern.jpg';
import Aws from './assets/aws.jpg';

function Skills(props) {
  return (
    <div id="skills" className="justify-content-center fs-5 min-height">
      <h3 className="mb-4">Skills</h3>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }} className="h-100 skills-card">
              <Card.Img variant="top" src={Hrj} className="card-image" />
              <Card.Body>
                <Card.Title>HTML, CSS, Javascript</Card.Title>
                <Card.Text>Great understanding of basic web programming.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }} className="h-100 skills-card">
              <Card.Img variant="top" src={Mern} className="card-image" />
              <Card.Body>
                <Card.Title>MERN</Card.Title>
                <Card.Text>Basic Understanding of MongoDB, ExpressJS, ReactJS, and NodeJS.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }} className="h-100 skills-card">
              <Card.Img variant="top" src={Aws} className="card-image" />
              <Card.Body>
                <Card.Title>Cloud Computing</Card.Title>
                <Card.Text>Good understanding of Cloud Computing especially in AWS Platform</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Skills;
