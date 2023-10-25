import React from 'react'
import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Transition from './Transition';
const Container = () => {
  return (
    <div>

              <Transition/>
              <Home/>
              <About/>
              <Project/>
              <Contact/>
           
        
    </div>
  )
}

export default Container