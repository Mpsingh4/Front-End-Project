import React from 'react'
import './whatWS.css';
import Feature from '../../components/feature/feature';

const WhatWS = () => {
  return (
    <div className='whatWS__container section_margin' id='whpt3'>
      <div className='whatWS__feature'>
        <Feature />
      </div>
      <div className='whatWS__heading'>
        <h1 className='gradient-text'>
          The possibilities are beyond your imagination
        </h1>
        <p> Explore the Library</p>
      </div>
      <div className='whatWS__feature-container'>
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default WhatWS;
