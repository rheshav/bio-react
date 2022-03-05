import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import Aps from './assets/aps.jpg';
import Mangan from './assets/mangan.jpg';
import AwsC from './assets/awscertified.png';

function Projects(props) {
  return (
    <div id="projects" className="justify-content-center fs-5 min-height">
      <Container>
        <Card className="projects-card mb-3">
          <Row>
            <Col md={4}>
              <Card.Img src={Aps} className="img-fluid rounded-start projects-img" />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>PT. Angkasa Pura I Kantor Cabang Bandar Udara Adi Soemarmo</Card.Title>
                <Card.Text>As Internship in charge of creating a good display for customer satisfactory system and admin system at PT. Angkasa Pura I Kantor Cabang Bandar Udara Adi Soemarmo.</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
      <Container>
        <Card className="projects-card mb-3">
          <Row>
            <Col md={4}>
              <Card.Img src={Mangan} className="img-fluid rounded-start projects-img" />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>PT. Media Kreatif Pangan</Card.Title>
                <Card.Text>Data entry for "MANGAN" website and aplication. Also responsible for some of the display in "MANGAN" web application. And create a food recommendation based on restaurant's content.</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
      <Container>
        <Card className="projects-card mb-3">
          <Row>
            <Col md={4}>
              <Card.Img src={AwsC} className="img-fluid rounded-start projects-img" />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>AWS Certified Cloud Practitioner</Card.Title>
                <Card.Text>AWS Certified Cloud Practitioner since Nov 2020 by Amazon Web Service and DTS Kominfo Fresh Graduate Academy</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}
export default Projects;
