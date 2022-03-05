import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer(props) {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="col-md-4">
            <p>Created with love by Rhesa Havilah Mondi</p>
          </Col>
          <Col>
            <Stack gap={3}>
              <div className="text-end fw-bold">Github</div>
              <div className="text-end fw-bold">LinkedIn</div>
              <div className="text-end fw-bold">rhesa.havilah@gmail.com</div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Footer;
