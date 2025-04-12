import React from 'react';
import { useState } from 'react';


export default function About() {
  const [Education,seteducation] = useState("")

  const ChangeEducation =()=>{
  seteducation(
    <> 
    <h3 className='p-3 text-warning display-6'>Personal Detail</h3>
    <p className='fs-6 font-monospace '><strong className='blockquote'>Full Name: </strong>Mahima Patel</p>
    <p className='fs-6 font-monospace '><strong className='blockquote'>Age: </strong>20</p>
    <p className='fs-6 font-monospace '><strong className='blockquote'>Address: </strong>p2, pride city katara hills bhopal.</p>
    <p className='fs-6 font-monospace '><strong className='blockquote'>E-mail: </strong>Mahimapatel1509@gmail.com</p>
    <h3 className='p-3 display-6 text-warning'>Education</h3>
    <p className='fs-6 font-monospace'>pursuing B.com(computers) from sage university bhopal.</p>
    </>
  )
  } 
  const RemoveEducation = () =>{
    seteducation("")
  }
  return (
    <>
      <div className="about-main text-white m-5">
        <p className='h1 text-center'>About  <strong className='text-warning'>Me</strong></p>
        <p className='m-3'>Hello,I am <strong>Mahima frontend developer</strong></p>
        <p className='text-center'> I'm a passionate frontend developer with a strong focus on JavaScript, react js and modern front-end frameworks. With experience in Bootstrap and other libraries, <br></br>
         I create responsive, user-friendly web applications that bring ideas to life.
I enjoy solving complex problems through clean, efficient code and continuously learning new technologies to stay ahead in the ever-evolving web landscape. Whether it’s optimizing a website for performance or designing an intuitive UI, I strive to build experiences that engage and inspire users.
Let’s connect and bring your next project to life!</p>

{/* education details  button */}
<button type='button'onClick={ChangeEducation}onDoubleClick={RemoveEducation} style={{
          padding: "10px 20px", 
          fontSize: "16px",  
          color: "white", 
          border: "none", 
          borderRadius: "5px", 
          cursor: "pointer",
          position:"relative",
          left:"640px"
        }} className=' text-center ps-2 btn btn-warning btn-lg border'>About Educatiom</button>
      <div className="schl-inm-3 ms-5   w-100 text-center">
      <div className='m-3 rounded-pill bg-gradient'>{Education}</div>
    </div>
    
     
    
</div>
    </>
  )
}
