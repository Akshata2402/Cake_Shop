import React from 'react';
import  "./Home.css";
import Services from './Services';
import Features from './Features';
import Testimonials from './Testimonials.js';
import Contact from './Contact.js'
import Logo from './images/Logo.png';
export default function Home(){
  console.log("Home component");
  return(
    <div id='home'>
      <div className='navbar'>
      <div>
        <img src={Logo} alt="" className='logo' />
      </div>
     <div>
       <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#Features">Features</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Testmonial">Testmonial</a></li>
        <li><a href="#Contact">Contact</a></li>
       </ul>
     </div>
     </div>
     <div className='text'>
        <h1>Cake Shop</h1>
        <p>Baking with heart</p>
        <div className='btn'>
           <button className='btn1'><a href="#Contact">Find Out</a></button>
           <button className='btn2'><a href="#Services">Read</a></button>
        </div>
     </div>
     <Features/>
     <Services/>
     <Testimonials/>
     <Contact/>
    </div>
  )
}
