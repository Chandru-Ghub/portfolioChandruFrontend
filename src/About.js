import React from 'react'
import './About.css'
import Ani from './Ani'
import react from './logos/react.png'
import mongo from './logos/mongodb.png'
import node from './logos/nodejs.png'
import html from './logos/html1.png'
import css from './logos/css1.png'
import javascript from './logos/js.png'
import express from './logos/express.png'
import bootstrap from './logos/bootstrap.png'
const About = () => {
 
  return (
   
    <div className='about' id='about'>
           <div className='cover'>
              <h3 className='abouth3' data-aos = 'fade-left'    data-aos-duration="1500" >About</h3>
                  <h2 className='aboutQuote'>The beautiful thing about learning is that no one can take it away from you!</h2>
                  <p className='aboutme'>As a entry level MERN stack developer have a good knowledge in the Frontend, Backend, DataBase</p>
                    <p className='tec'>Technologies I worked</p>
                      <marquee className='marque' behavior="scroll" scrolldelay ='0' direction="side">
                            <div className='techs'>
                            <p className='begin'>
                                    Begins
                                </p>
                                <img className='marimage html2' src={html} alt="" />
                                <img className='marimage css2' src={css} alt="" />
                                <img className='marimage javascript2' src={javascript} alt="" />
                                <img className='marimage bootstrap2' src={bootstrap} alt="" />
                                <img className='marimage react2' src={react} alt="" />
                                <img className='marimage mongo' src={mongo} alt="" />
                                <img className='marimage node2' src={node} alt="" />
                                <img className='marimage express2' src={express} alt="" />
                                <p className='end'>
                                    learning...
                                </p>
                            </div>

                      </marquee>
                      <p className='certi'>  MERN Stack Certifications</p>
                    
              
                    <a className='cv' target='_blank' href='https://www.guvi.in/verify-certificate?id=65dR8910207b5w27a6' style={{color:'black'}} >
                    <button className='btncv'> Certifications   </button>
                    </a>
            </div>


            <div className="cubeim" >
              <div className="webicons">
                      <div className="threeicon">
                              <div className='inicon'>
                                  <span class="material-symbols-outlined db ">
                                  database
                                  </span>
                                  <span class="material-symbols-outlined eco ">
                                  eco
                                  </span>
                                  DataBase
                              </div>

                              <div className='inicon'>
                                  <span class="material-symbols-outlined turn">
                                  cached
                                  </span>
                              </div>

                              <div className='inicon'>
                                  <span class="material-symbols-outlined bend">
                                  display_settings
                                  </span>
                                  <span class="material-symbols-outlined api">
                                  api
                                  </span>
                                  Backend
                                  
                              </div>

                                  <span class="material-symbols-outlined sett">
                                  settings
                                  </span>
                          
                                  
                      </div>
                      <div className='inicon'>
                        <span class="material-symbols-outlined fend">
                        laptop_chromebook
                        </span>
                        <span class="material-symbols-outlined fe">
                          code
                        </span>
                        Frontend
                      </div>
                      
              </div>
      
          </div>
                  
    <p className='line1'></p>
    </div>
        
   
  )
}

export default About