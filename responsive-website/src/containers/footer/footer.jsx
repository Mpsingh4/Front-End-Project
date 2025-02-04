import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div className='whatWS__footer section__padding'>
      <div className='whatWS__footer-heading'>
        <h1 className='gradient__text'> Would you like to step into the Future?</h1>
      </div>
      <div className='whatWS__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='whatWS__footer-links'>
        <div className='whatWS__footer-link_logo'>
          <img src='gpt3Logo' alt='logo' />
          <p>All Rights Reserved 2025</p>
        </div>
        <div className='whatWS__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='whatWS__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='whatWS__footer-links_div'>
          <h4>Get In Touch</h4>
          <p>Toronto, Ontario, Canada</p>
          <p>416-555-5555</p>
          <p>test-email@NotRealDomain.net</p>
        </div>
      </div>
      <div className='whatWS__footer-copyright'>
        <p>© 2025 All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
