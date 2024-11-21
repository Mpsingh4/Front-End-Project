import React, { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
          <p><a href='#home'>Home</a></p>
          <p><a href='#whatWS'>What is GPT?</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
        </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='whatWS__navbar'>
      <div className='whatWS__navbar-links'>
        <div className='whatWS__navbar-links-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='whatWS__navbar-links-container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#whatWS'>What is GPT?</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
      </div>
      <div className='whatWS__navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='whatWS__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='whatWS__navbar-menu-container scale-up-center'>
            <div className='whatWS__navbar-menu-container-links'></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
//<img src={logo} alt='logo' />