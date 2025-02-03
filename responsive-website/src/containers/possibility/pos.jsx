import React from 'react'
import './pos.css';
import possibilityImage from '../../assets/possibility.png';

const Pos = () => {
  return (
    <div className='whatWS__pos section__padding'>
      <div className='whatWS__pos-image'>
        <img src={possibilityImage} alt="possibility"/>
      </div>
      <div className='whatWS__pos-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'> The Possibilities are Endless.</h1>
        <p>The possibilities are vast, with potential applications across various fields such as education, healthcare, customer service, and creative writing. It could be used to automate routine tasks, assist in research, or provide personalized recommendations, enhancing productivity. As AI continues to evolve, ChatGPT may open new avenues for human-computer collaboration.</p>
      </div>
    </div>
    
  )
}

export default Pos
