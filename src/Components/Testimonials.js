import React from 'react'
import Ken from './images/Ken.jpg'
import Alis from './images/Alis.jpg'
import Jack from './images/Jack.jpg'
export default function Testimonials() {
  return (
    <div id='Testmonial' className='testimonials'>
       <div className='title-txt'>
         <p>TESTIMONIAL</p>
         <h1>What Client Say's</h1>
       </div>
       <div className='testmonial-row'>
        <div className="test-column">
          <div className='user'>
            <img src={Ken} alt="" />
            <div className='user-info'>
              <h4>KEN NORMAN</h4>
              <small>@kennorman</small>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos eum mollitia sapiente. Consequatur modi facilis mollitia obcaecati iure vel consequuntur, recusandae odit officia dolore! Quasi nobis possimus cum itaque.</p>
       </div>
        <div className="test-column">
        <div className='user'>
            <img src={Alis} alt="" />
            <div className='user-info'>
              <h4>ALIS MARTIN </h4>
              <small>@alismartin</small>
            </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos eum mollitia sapiente. Consequatur modi facilis mollitia obcaecati iure vel consequuntur, recusandae odit officia dolore! Quasi nobis possimus cum itaque.</p>
        </div>
        <div className="test-column">
        <div className='user'>
            <img src={Jack} alt="" />
            <div className='user-info'>
              <h4>JACK SPARROW </h4>
              <small>@jacksparrow</small>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos eum mollitia sapiente. Consequatur modi facilis mollitia obcaecati iure vel consequuntur, recusandae odit officia dolore! Quasi nobis possimus cum itaque.</p>
        </div>
        
       </div>
    </div>
  )
}
