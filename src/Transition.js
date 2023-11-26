import React from 'react'
import img1 from './bg1.jpg'
import mern from './m1.png'
const Transition = () => {
  return (
    <div className='trs' >
     
       <div className='qts'>

       <p className='quote'>
            Web Development and Design in unique way
        </p>
        <button className="diginto">
            {/* <img src={img1} alt="" /> */}
            Dig into My universe
        </button>
       </div>
     
         <div className="techbehind">
            <p>TECH behind this work <span>|</span> MERN</p>
            <img src={mern} alt="" />
         </div>
    </div>
  )
}

export default Transition