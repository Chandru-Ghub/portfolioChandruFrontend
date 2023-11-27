import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
// import {useTypewriter,Cursor} from 'react-simple-typewriter'
import pic from './alenWalker.jpg'
const Home = () => {

    const [state] = useState({
        title: "Hi",
        titleTwo: "I'm",
        titleThree: "Kyochan",
        titleFour: "FullStackDeveloper"

    })
   

  return (
    <div className='homepage' >
    <div id='home' className='home' >
    {/* <div  data-aos="fade-right" data-aos-duration="1000" id='home' className='home' > */}

        <div>
             <p className='pp'>I am Chandru</p>
            <div className='type'>
            <p className='pp'>I'm</p>
                <div>   
                    <h5 className='type'>
                        <Typewriter 
                            options={{
                                autoStart:true,
                                loop:true,
                                delay:40,
                                strings:[
                                    " a FullStack Developer",
                                    " a Traveller",
                                    " a Designer"]

                            }}
                            />
                    </h5>
                    
                </div>
           </div>
          
           <h2 className='build'>I build things for the web</h2>
            <p className='summary'>Passionate job seeker from salem, Tamil Nadu with strong organizational skills eager to secure entry-level position. Ready to help team achieve company goals.
        
           </p>
            </div>
           
                    <a target='_blank' className='cv'style={{color:'black'}} href="https://drive.google.com/file/d/14kn0ndXPKAVhUKKVGG8m4cQ1cC1a3GrD/view?usp=drivesdk">
                    <button className='btncv'>Download CV </button>
                    </a>
            
    </div>
    <div className="awk">
       {/* <img src={pic} alt="" /> */}

    </div>
    {/* <p className='line1'></p> */}
    </div>
  )
}

export default Home