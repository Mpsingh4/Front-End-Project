import React from 'react'
import './header.css';

const Header = () => {
  return (
    <div className='whatWS__header section__padding'>
      <div className='whatWS__header-content'>
        <h1 className='gradient__text'>Lets build something</h1>
        <div className='whatWS__header-content__'>
          <input type='email' placeholder='your email here'/>
          <button type='button'>Get Started</button>
        </div>
      </div>
      Header
    </div>
  )
}

export default Header
