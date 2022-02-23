import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import ProfilePicture from './assets/android-chrome-192x192.png';
import './style.css';

function Jumbotron(props) {
  return (
    <div className={'jumbotron'}>
      <Image src={ProfilePicture} responsive roundedCircle />
    </div>
  );
}
export default Jumbotron;
