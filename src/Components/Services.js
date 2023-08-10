import React from 'react'
import CustomCakes from './images/Custom Cakes.jpg'
import Paestries from './images/Paestries.jpg'
import CupCakes from './images/Cup Cakes.jpg'
import BakingItems from './images/BakingItems.jpg'
export default function Services() {
  return (
    <div className='services' id='Services'>
      <div className='title-txt'>
         <p>SERVICES</p>
         <h1>We Provide Better</h1>
      </div>
      <div className='overlay'></div>
     <div className='services-box'>
       <div className='ser-image'>
        <img src={CustomCakes} alt="" />
         <div className='service-desc'>
          <h3>Custom Cakes</h3>
          <br />
          <hr/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
         </div>
       </div>
       <div className='ser-image' >
       <img src={Paestries} alt="" />
       <div className='service-desc'>
          <h3>Pastries</h3>
          <br />
          <hr/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
         </div>
      </div>
      <div className='ser-image'>
      <img src={CupCakes} alt="" />
      <div className='service-desc'>
          <h3>Cup Cakes</h3>
          <br />
          <hr/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
         </div>
      </div>
      <div className='ser-image'>
      <img src={BakingItems} alt="" />
      <div className='service-desc'>
          <h3>Baking Items</h3>
          <br />
          <hr/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
         </div>
      </div> 
      </div>
    </div>
  )
}


