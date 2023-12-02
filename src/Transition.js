import React from 'react'
import img1 from './bg1.jpg'
import mern from './m1.png'
import linkedin from './check.png'
import github from './github.png'
import {HashLink as Link} from 'react-router-hash-link'
const Transition = () => {
  return (
    <div className='trs' >
     
       <div className='qts'>

          <p className='quote'>
                Web Development and Design in unique way
            </p>
            <ul className='iconslogom'>
                <li>
                    <a href="https://www.linkedin.com/in/chandrum7/?profileId=ACoAAEhK1z8BD_Z00kPEIPgwVfw3nwsS0sWgYxE" target='_blank'>
                        <img className='in' src={linkedin} alt="linkedin" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Chandru-Ghub"  target='_blank'>
                        <img className='imgicon' src={github} alt="linkedin" />
                    </a>
                </li>
            </ul>
            
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