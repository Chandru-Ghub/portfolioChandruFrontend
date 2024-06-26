import React from 'react'
import './Project.css'
import { Link } from 'react-router-dom'
import SliderComp from './SliderComp'
import Card from './Card'
const Project = () => {


  return (
    <div className='project'   id='project'>

    <h3 className='myworks'  data-aos="fade-left" data-aos-duration="1500">My works</h3>
    <div className='sliderContainer'>
            <SliderComp/>
            {/* <Card/> */}
    </div> 
      <div className="morepro">
              <h4 className='pro15'>10+ projects</h4>
              <p className='moreWork'>If you have time have a look <span> THE WAY I WALK THROUGH </span></p>
                  <div className='lookup cv'>
          
                      <button className='btncv'>
                          <Link to='/dig' style={{color:'black'}}>More Works</Link>
                      </button>     
                      
                  </div>
      </div>  
        <p className='line1'></p>
    
    </div>
  )
}

export default Project