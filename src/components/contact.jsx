import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
      <div className="container m-5 "style={{position:"relative"}}>
        <p className='text-warning m-4 text-start fw-lighter fs-4 display-6'>Inquiry <br></br>
            <strong className='text-white '>Contact Me</strong>
        </p>
        {/* heading end */}

{/* inputs start*/}
<div className="div text-start m-5 p-4 bg-bg-warning bg-gradient w-75 ">
<label htmlFor="" className='text-start text-white border-0'>Enter Your mail</label>
<br></br>
<input className='rounded-pill p-2 'style={{width:"280px"}} type="text"placeholder='Enter your mail' />
<br></br>
<br></br>
<label htmlFor="" className=' text-center text-white'>Enter Your message</label>
<br></br>
<textarea className=' rounded border-0'placeholder='Message...' name="enter your message"cols={45} rows={3} id=""></textarea>
<br></br>
<button type="button" class="btn btn-warning rounded-pill m-3 text-white">Send</button>
      </div>
      {/* yello box */}
      <div className="contact-info bg-warning w-25 h-75 p-4 rounded"style={{position:"absolute",top:"86px",left:"699px"}}>
        <h3 className='text-start  '>Get In Touch</h3>
        {/* icons */}
  <p className="text-start me-4 "><IoLocationSharp className='m-2' />p2,pride city katara hills bhopal</p>
  <p className="text-start me-4 "><MdEmail className='m-2'/>Mahimapatel1509@gmail.com</p>
  <p className="text-start me-4 "><MdAddCall className='m-2'/>8817751318</p> 
  <p className='text-start me-4 '><AiFillInstagram className='m-2'/><FaLinkedin className='m-2'/><FaTwitter className='m-2'/></p>
      </div>
      </div>
    </>
  )
}
