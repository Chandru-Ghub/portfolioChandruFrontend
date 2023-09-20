import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import cart from './thumbnail/cart.png'
import emoji from './thumbnail/emoji.png'
import burger from './thumbnail/burger.png'
import meal from './thumbnail/mealdb.png'
import guvi from './thumbnail/guvi.png'
import engine from './thumbnail/imageSearch.png'
import './Top.css'
const FrontEndProjects = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    const navigate = useNavigate()
  return (
    <div  className='projects' >

       
        <p >
       
                <button  className='back' onClick={()=> navigate('/#project')}>
                {/* <Link className='ftnav' to='/#project' smooth >Go back </Link> */}
                <span class="material-symbols-outlined">
                    keyboard_backspace
                    </span>Go back 
                </button>
        </p>
        
       <p className='way'>The Way i walk through <span className='path'>__</span> <span class="material-symbols-outlined walk">
hiking
</span>  <span className='to'>___</span> </p>
        <div className='thumbnailContainer' >

            <div className='imgcontainer' data-aos="fade-right" data-aos-duration="1000">
            <img className='thumbnail' src={cart} alt="" />
                <p className='view'>
                <a href="https://startling-longma-20942a.netlify.app/" target='blank'>ViewProject</a></p>
            </div>
            <div className='imgcontainer' data-aos="fade-right"  data-aos-duration="1000">
            <img className='thumbnail' src={emoji} alt="" />
                <p className='view'>
                <a href="https://chandru-ghub.github.io/Front-end-TASK-D20-/API%20-2%20Emojhub/index.html#bottom" target='blank'>ViewProject</a></p>
            </div>
            
            <div className='imgcontainer' data-aos="fade-right"  data-aos-duration="1000">
            <img className='thumbnail' src={meal} alt="" />
                <p className='view'>
                <a href="https://chandru-ghub.github.io/Front-end-TASK-D20-/API%20-%201%20The%20meal%20DB/index.html" target='blank'>ViewProject</a></p>
            </div>
            <div className='imgcontainer' data-aos="fade-right" data-aos-duration="1000">
            <img className='thumbnail' src={burger} alt="" />
                <p className='view'>
                <a href="https://chandru-ghub.github.io/Front-end-TASK-D20-/API%20-3%20Bob's%20burger/index.html" target='blank'>ViewProject</a></p>
            </div>
            <div className='imgcontainer' data-aos="fade-up" data-aos-duration="1000">
            <img className='thumbnail' src={guvi} alt="" />
                <p className='view'>
                <a href="https://comforting-horse-824c25.netlify.app/All" target='blank'>ViewProject</a></p>
            </div>
            <div className='imgcontainer' data-aos="fade-right"  data-aos-duration="1000">
            <img className='thumbnail' src={engine} alt="" />
                <p className='view'>
                <a href="https://startling-longma-20942a.netlify.app/" target='blank'>ViewProject</a></p>
            </div>
           

        </div>
    </div>
  )
}

export default FrontEndProjects