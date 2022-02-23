import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Jumbotron from './Jumbotron';

function Body(props) {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Jumbotron />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Body;
