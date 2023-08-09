import React from 'react'
import featureimg from './images/FeatureImg.jpg'
export default function Features() {
  return (
    <div id='Features' className='demo'>
      <div className='features'>
       <p>FEATURES</p>
       <h1>Why Choose Us</h1>
       </div>
      <div className='features-box'>
        <div className='feature'>
          <h1>Exprienced Staff</h1>
          <div className='feature-decs'>
            <div className='feature-icon'>
              <i class="fas fa-shield-alt"></i>
            </div>
            <div className='feature-txt'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. lit dolorum totam, delectus quisquam suscipit culpa vitae esse </p>
            </div>
          </div>
          <h1>Pre Booking Online</h1>
          <div className='feature-decs'>
          <div className='feature-icon'>
            <i class="fas fa-check-square"></i>
          </div>
          <div className='feature-txt'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  sit deserunt placeat ea ullam dolore ipsa, sunt quaerat eos.</p>
          </div>
          </div>
          <h1>Affordable Cost</h1>
          <div className='feature-decs'>
            <div className='feature-icon'>
              <i class="fas fa-rupee-sign"></i>
            </div>
            <div className='feature-txt'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. sdam deserunt dolorem, ipsum necessitatibus officiis id! Deleniti, earum?</p>
            </div>
          </div>
        </div>
        <div className='feature-img'>
          <img src={featureimg} alt="" />
        </div>
      </div>
    </div>
  )
}
