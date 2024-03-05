import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Comments.css'
import { FaQuoteLeft,FaBars,FaRegWindowClose } from "react-icons/fa";
import {  FaAnglesUp } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Testimonials() {
  const [serverMessage,setServermessage]=useState('')
  const [messageDiv,setmessageDiv]=useState(false)
  const [tesifyData,setTestifyData]=useState({
    firstName:"",
    lastName:"",
    workState:"",
    Comment:"",
    EmailAdress:""
  })
  const updateDataTestimony=(e)=>{
    setTestifyData({
      ...tesifyData,[e.target.name]:e.target.value
    })
    console.log(tesifyData)
  }
  const Handlepost= async (e)=>{
    e.preventDefault();
    try{
let response=await fetch('http://localhost:4000/api/testify',{
  method:'post',
  headers:{
    "content-type":"application/json"
  },
  body:JSON.stringify(tesifyData)
})
if(response){
  const data=await response.json();
  console.log(data)
  if(data.message==="Comment added"){
    setServermessage(data.message)
    setmessageDiv(true)
    setLoading(false)
    setTimeout(() => {
      setForm(false)
    }, 3000);
  }
  else{
    setmessageDiv(true)
  }
}
else{
  const errorData=await response.json();
  console.log(errorData)
}
}
catch (error){
  console.log(error)
}
  }
  const [form,setForm]=useState(false)
  const[loading,setLoading]=useState(true)
const [testimonials,setTestimonials]=useState({})
//axios fetch
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/testify');
      // Assuming the API returns an object with user data
      setTestimonials(response.data);
      console.log(testimonials)
      setLoading(false)
      
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  fetchData();
}, []);
const rendercomments=()=>{
  const comments=[];
  for (let i=0;i<testimonials.length;i++){
    comments.push(
      <div className='comment-container bg-light card m-2'>
      <FaQuoteLeft className='text-dark fs-3' />
      <h6  style={{textAlign:'center',color:'black'}}>{testimonials[i].first_name + " " + testimonials[i].last_name
}</h6>
<p className='text-dark'style={{textAlign:'center'}}>{testimonials[i].work_state}</p>
      <p style={{textAlign:'center'}} className='conteiner-fluid text-dark fs-6'>{testimonials[i].testimony_message
}</p>
      </div>
    )
  }
  return(comments)
}

  return (
    <>{ loading ? <h1>Loading</h1> :
    <div className='overall-testimonials-container'>
{/* <header className='header-element'>
    <div className='overall-header-div'>
    <div className='logo-item'>
   <p className='text-light logo-id'>W</p>
    </div>
    <div className='company-name'>
    <p className='text-light name-text'>Winky_web_us</p>
    </div>
    </div>
  </header> */}
      {form && <div className='testimonial-form-div'>
        <div> <FaRegWindowClose className='text-light fs-1' style={{width:"maxcontent"}} onClick={()=>setForm(false)} /></div>
   { messageDiv && <div class="alert alert-info">
  <strong>{serverMessage}</strong>
</div>
}

      <form onSubmit={Handlepost} className='actual-form'>
        <label className='text-light' style={{width:'100%'}}>first Name
<input name='firstName' onChange={updateDataTestimony} type='text'className='form-control'placeholder='First Name'/>
        </label>
        <label className='text-light' style={{width:'100%'}}>first Name
<input name='lastName' onChange={updateDataTestimony} type='text'className='form-control'placeholder='Last Name'/>
        </label>
        <label className='text-light' style={{width:'100%'}}>Email adress
<input name='EmailAdress' onChange={updateDataTestimony} type='email'className='form-control'placeholder='Email '/>
        </label>
        <label className='text-light' style={{width:'100%'}}>Describe what You do
<textarea name='workState' onChange={updateDataTestimony} className='form-control'placeholder='eg CEO Kenya Beauty'/>
        </label>
        <label className='text-light' style={{width:'100%'}}>Comment testimonial
<textarea name='Comment' onChange={updateDataTestimony} className='form-control'placeholder='testify...'/>
        </label>
       <div style={{width:'max-content',margin:'auto'}}>
      <button type='submit' className='btn btn-outline-warning'>Submit</button>
    </div> 
      </form>
    </div>
}
<h5 style={{textAlign:'center'}} className='text-light'>Community love</h5>
    <p style={{textAlign:'center'}} className='text-light'>See what our clients say about us</p>
    <h4 style={{textAlign:'center'}} className='text-light'>{testimonials.length} Testimonials</h4>
    <div  className='overall-specific-testimomial-container'>
      {
       rendercomments()
      }
    </div>
    <div style={{width:'max-content',margin:'auto'}}>
      <button className='btn btn-outline-warning' onClick={()=>setForm(!form)}>Add Testimomial</button>
    </div>
    <div className='text-light fs-1 angled-icon '><Link style={{textDecoration:'none'}} to='/'><FaAnglesUp /></Link></div>
    </div>
    }
    </>
  )
} 
