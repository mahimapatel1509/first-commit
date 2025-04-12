import React from 'react'
import { Link } from 'react-router'
import Resume from './resume'

export default function Navbar() {
  return (
    <>
   
    <div className="container row">
      <div className="nav-bar d-flex justify-content-between ">
        <div className="left-nav p-3 w-50">
          <p className='d-flex h4 fst-italic'><strong>Portfolio</strong></p>
        </div>
        
        <div className="right-nav w-50  p-3">
          <div className="nav-links d-flex justify-content-evenly">
          <Link to="/"className='link-secondary fw-medium link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline'>Home</Link>
          <Link to="/about"className='link-secondary fw-medium link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline'>About me</Link>
          <Link to="/skill"className='link-secondary fw-medium link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline'>My skills</Link>
          <Link to="/projects"className='link-secondary fw-medium link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline'>My Projects</Link>
          <Link to="/contact"className='link-secondary fw-medium link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline'>Contact me</Link>
          </div>
          <div className="text m-5 position-relative">
        <p className='position-absolute start-0 top-0 link-secondary'>welcome to my website</p>
        <h1 class="display-6 p-5  ">Hello,I am <strong>Mahima frontend developer</strong> currently based in Bhopal.</h1>
        <p className='link-secondary'>I am pursuing B.com(computers) from sage university bhopal!</p>
        <button type="button" class="btn btn-outline-primary "><Resume/> Get Resume</button>
      </div>
           {/* nav link end */}
        </div>
       
      </div>

    </div>


 
    </>
  )
}
