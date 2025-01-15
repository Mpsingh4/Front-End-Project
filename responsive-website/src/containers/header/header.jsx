import React from 'react'
import './header.css';
import ai from '../../assets/ai.png';
import people from '../../assets/people.png';

const Header = () => {
  return (
    <div className='whatWS__header section__padding'>
      <div className='whatWS__header-content'>
        <h1 className='gradient__text'>Lets build something with AI</h1>
        <p>placeholder text for now, add interesting facts about chatgpt here.</p>
        <div className='whatWS__header-content__input'>
          <input type='email' placeholder='your email here'/>
          <button type='button'>Get Started</button>
        </div>

        <div className='whatWS__header-content__people'>
          <img src={people} alt="people"/>
          <p>1,400 people requested access in the last 24 hours</p>
         </div>
      </div>
        <div className='whatWS__header-image'>
          <img src={ai} alt='ai'/>
        </div>
    </div>
  )
}

export default Header
