import React from 'react'
import img1 from './bg1.jpg'
import mern from './m1.png'
import {HashLink as Link} from 'react-router-hash-link'
const Transition = () => {
  return (
    <div className='trs' >
     
       <div className='qts'>

       <p className='quote'>
            Web Development and Design in unique way
        </p>
       
        
        <Link style={{color:'inherit'}} to={'/#project'} smooth>
        <button className="diginto">Dig into My universe</button></Link>

       </div>
     
         <div className="techbehind">
            <p>TECH behind this work <span>|</span> MERN</p>
            <img src={mern} alt="" />
         </div>
    </div>
  )
}

export default Transition