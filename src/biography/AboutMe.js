import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

function AboutMe(props) {
  return (
    <div id="about" className="justify-content-center fs-5 text-center">
      <Container className="min-height">
        <h3>About Me</h3>
        <p>
          A graduate of computer science at Sebelas Maret University, looking to secure a job position as Frontend Developer position to use and develop my skill and knowledge in a practical environment. My career goal is to assume a role
          that allows me contribute to an impactful project.
        </p>
      </Container>
    </div>
  );
}
export default AboutMe;
