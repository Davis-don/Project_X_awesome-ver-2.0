import React from 'react'
import { ReactTyped } from 'react-typed';
import './introitem.css'
import image1 from '../Images/caspar-camille-rubin-fPkvU7RDmCo-unsplash.jpg'

export default function Introitem() {
  return (
    <div className='overall-introitem-component'>
       <img src={image1}alt='image of a laptop'/>
       {/* <h4 className='text-light text-intro-heading'>Transformative Experience</h4> */}
       <h3 style={{textAlign:'center'}} className='text-light'>
        {" "}
        <ReactTyped className='text-light' strings={["Transformative Experience"]} typeSpeed={100} loop />
      </h3>
       <p className='text-light container-fluid'>winky_web_us takes your idea,analyses the services that a system can do that can save you time,automates those services and compile 
       them on a sigle platform.</p>
    </div>
  )
}