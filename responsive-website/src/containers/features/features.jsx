
import React from 'react'
import './features.css';

const Features = ({ title, text }) => {
  return (
    <div className='whatWS__features-container__feature'>
      <div className='whatWS__features-container__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='whatWS__features-container__features-text'>
        {text}
      </div>
    </div>
  )
}

export default Features
