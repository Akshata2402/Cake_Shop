import React from 'react'
import LOGO from './images/Logo.png'
export default function Contact() {
  return (
    <div className='contact' id='Contact'>
     {/* <img src={LOGO} alt="" className='footer img' /> */}
      <div className='title-txt'>
        <p>CONTACT</p>
        <h1>Visit Shop Today</h1>
      </div>
      <div className='footer-row'>
        <div className="footer-left">
          <h1>Opening Hours</h1>
          <p>Monday to Friday - 9am to 9pm</p>
          <p>saturday to sunday - 8am to 11pm</p>
        </div>
        <div className="footer-right">
          <h1>Get In Touch</h1>
          <p>#30IN abc colony,xyz City IN </p>
          <p>example@gmail.com </p>
          <p>1233456677 </p>
        </div>
      </div>
    </div>
  )
}
