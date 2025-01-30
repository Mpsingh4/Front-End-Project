import React from 'react'
import './whatWS.css';
import Feature from '../../components/feature/feature';

const WhatWS = () => {
  return (
    <div className='whatWS__whatwsp section_margin' id='whpt3'>
      <div className='whatWS__whatwsp-feature'>
        <Feature />
      </div>
      <div className='whatWS__whatwsp-heading'>
        <h1 className='gradient-text'>
          The possibilities are beyond your imagination
        </h1>
        <p> Explore the Library</p>
      </div>
      <div className='whatWS__whatwsp-container'>
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default WhatWS;
