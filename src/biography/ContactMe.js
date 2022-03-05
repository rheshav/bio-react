import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

function ContactMe(props) {
  return (
    <div id="contactme" className="justify-content-center fs-5 min-height">
      <h3 className="text-start mb-5">Contact Me</h3>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
export default ContactMe;
