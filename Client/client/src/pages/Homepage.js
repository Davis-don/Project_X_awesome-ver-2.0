import React from 'react';
import personalport from '../Images/Davis Ikou portfolio - Google Chrome 13_02_2024 16_49_26.png'
import loginapp from '../Images/Davis Ikou portfolio - Google Chrome 13_02_2024 16_54_19.png'
import consultation from '../Images/christina-wocintechchat-com-vzfgh3RAPzM-unsplash.jpg'
import { FaAnglesDown, FaAnglesUp ,FaRegMessage } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { useState } from 'react';
import Introitem from '../Components/Introitem';
import './Homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import VideoPlayer from '../Components/Videoplayer';
import { FaTiktok,FaYoutube ,FaWhatsapp, } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdComment } from "react-icons/md";
import Logoimg from '../Images/Digital World.png'

export default function Homepage() {
const [first,setFirst]=useState(true)
const [second,setsecond]=useState(false)
  return (
    <div className='overall-homepage-container'>
  <header className='header-element'>
    <div className='overall-header-div'>
    <div className='logo-item'>
   <div className='logo-header-div'>
    <img className='actual-logo-img' src={Logoimg} alt='imageof winky logo'/>
   </div>
    </div>
    <div className='company-name'>
     <div className='p-1' style={{width:'max-content'}}>
    <Link to='/Testimonials'>  <MdComment className='fs-1 text-light ' /></Link>
    </div>
    </div>
    {/* <div className='p-1' style={{width:'max-content'}}>
    <Link to='/Testimonials'>  <MdComment className='fs-1 text-light ' /></Link>
    </div> */}
    </div>
   
  </header>
  {first && <div className='intro-image-section'>
  <VideoPlayer className='actual-video'/>
  <div onClick={()=>{setFirst(false);setsecond(true)}} className='text-light fs-1 angled-icon'><FaAnglesDown /></div>
  </div>}

{second && (
  <div className='proceeding-contect'>
    <div className='after-click-item'>
      <Introitem />
    </div>
    <div className='other-information'>
      <div>
        <h3 className='container-fluid'>Personal portfolio </h3>
        <p className='container'>Market your services and skills online</p>
        <div className='personal-portfolio-image'>
          <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={personalport} alt='sample personal portfolio' />
        </div>
      </div>
      <div>
        <h3 className='container-fluid'>Companies platforms </h3>
        <p className='container'>Allow clients to open accounts </p>
        <div className='personal-portfolio-image'>
          <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={loginapp} alt='sample personal portfolio' />
        </div>
      </div>
      <div>
        <h3 className='container-fluid'>Free consultation </h3>
        <p className='container'>Converse with our experts</p>
        <div className='personal-portfolio-image'>
          <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={consultation} alt='sample personal portfolio' />
        </div>
      </div>
    </div>
    <div className='follow-us-on'>
      <h3 className='follow-winky-web-heading'>Follow Winky_web_us</h3>
      <ul className='list-unstyled'>
        <li><a href='https://www.youtube.com/@winkywebbers'><FaYoutube className='text-light fs-1' /></a></li>
        <li className='text-light'><a href='https://www.tiktok.com/@Winky.Webbers?_t=8h5a3megmYP&_1'><FaTiktok className='text-light fs-1' /></a></li>
      </ul>
    </div>
    <div className='contact-us-on p-1'>
      <h3 className='follow-winky-web-heading text-dark'>Contact us on </h3>
      <ul className='list-unstyled contact-ul'>
        <li className='fs-5'><span> <IoIosCall className='fs-2' />Call</span><span> +254758420860</span></li>
        <li className='fs-5'><span><FaWhatsapp className='fs-2' />Whatsapp</span><span>+254758420860</span></li>
        <li className='fs-5'><span><FaRegMessage className='fs-2' />Message</span><span>+254758420860</span></li>
      </ul>
    </div>
    <div onClick={() => { setFirst(true); setsecond(false) }} className='text-light fs-1 angled-icon'><FaAnglesUp /></div>
  </div>
)}


  </div>
  )
}