import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Footer from './Footer';
import Jumbotron from './Jumbotron';
import Projects from './Projects';
import Skills from './Skills';

function Body(props) {
  return (
    <div>
      <Jumbotron />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}
export default Body;
