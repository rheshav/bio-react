import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import ProfilePicture from './assets/android-chrome-192x192.png';
import './style.css';

function Jumbotron(props) {
  return (
    <div id="home" className="jumbotron text-center min-height">
      <Image src={ProfilePicture} responsive roundedCircle />
      <p className="lead pt-2 mt-3 fs-3 text-center">Software Engineer</p>
    </div>
  );
}
export default Jumbotron;
