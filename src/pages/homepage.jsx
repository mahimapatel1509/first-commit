import React from 'react'
import Navbar from '../components/navbar'
import About from '../components/about'
import Skills from '../components/skill'
import Projects from '../components/projects'
import Contact from '../components/contact'

export default function Homepage() {
  return (
    <>
     <Navbar/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/> 
    </>
  )
}
