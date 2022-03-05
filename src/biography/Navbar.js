import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar fixed="top" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#home">Rhesa Havilah Mondi</Navbar.Brand>
          <Nav className="me-20">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contactme">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
