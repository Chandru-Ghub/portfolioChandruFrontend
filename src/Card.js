import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SliderCSS.css'
import './Project.css'
import './Card.css'
import Slider from 'react-slick'
import bulkMail from './thumbnail/e1.png'
import shopy from './thumbnail/s8.png'
import getfit from './thumbnail/g1.png'
import chat from './thumbnail/c3.png'

const Card = () => {


  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  function ArrowB(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <ArrowB />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
       
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,

        }
      }
    ]
  };
  return (
    <div>
              <p className="projectdesc" >Following projects showcases my skills and experience through some examples of my work. Each projects reflects my ability to solve problems, work with different technologies.</p>
    <div className="projectContainer pc1">
        
      <div className="promern">

        <div className="clst">Technologies behind the projects <span>MERN</span></div>
        <ul>
          <li className="cp3"># Mongo DB</li>
          <li className="cp4"># Express JS</li>
          <li className="cp1"># React JS</li>
          <li className="cp2"># Node JS</li>
          <li className="cp5"># Redux</li>
        </ul>
        </div>
    <div className="containerdd cdd" >
     
     <div className="cardcontainer card1">
          <div className="cardslider wrap cd2">
               <a target="_blank" href="https://shopy-client-side-ssza.vercel.app/" >
                <span class="material-symbols-outlined eye">
                language
                </span>
                </a>
               <a target="_blank" href="https://github.com/Chandru-Ghub/ShopyClientSide" >
                <span class="material-symbols-outlined code1">
                code
                </span>
                </a>
             
              <div className="proTitle">
              <h1>SHOPY NOW</h1>
              <p>A complete Ecommerce application </p>
              </div>
              <img src={shopy} alt="" />
          </div>

            <div className="cardslider wrap cd2">

                    <a target="_blank" href="https://harmonious-gaufre-34e64e.netlify.app/" >
                    <span class="material-symbols-outlined eye">
                    language
                    </span>
                    </a>
                    <a target="_blank" href="https://github.com/Chandru-Ghub/chatAppfrontend" >
                    <span class="material-symbols-outlined code1">
                    code
                    </span>
                    </a>

                    <div className="proTitle">
                    <h1> FUN CHAT</h1>
                    <p>Fun with private room chats with your friends</p>
                    </div>
                    <img src={chat} alt="" />
            </div>
        
          <div className="cardslider wrap cd2">

                    <a target="_blank" href="https://startling-dolphin-d7e7f5.netlify.app/" >
                    <span class="material-symbols-outlined eye">
                    language
                    </span>
                    </a>
                  <a target="_blank" href="https://github.com/Chandru-Ghub/bulkemailfrontend" >
                    <span class="material-symbols-outlined code1">
                    code
                    </span>
                    </a>

              <div className="proTitle">
              <h1>  BULK EMAIL TOOL</h1>
              <p>Let's send the mail bulk at once</p>
              </div>
              <img src={bulkMail} alt="" />
          </div>
          <div className="cardslider wrap cd2">
                <a target="_blank" href="https://get-fitnow.vercel.app/" >
                      <span class="material-symbols-outlined eye">
                      language
                      </span>
                      </a>
                    <a target="_blank" href="https://github.com/Chandru-Ghub/GetFitnow" >
                      <span class="material-symbols-outlined code1">
                      code
                      </span>
                  </a>
              <div className="proTitle">
              <h1>  GET FIT</h1>
              <p>A Fitness Web application with admin panel</p>
              </div>
                <img src={getfit} alt="" />
          </div>
          
      </div>
    </div>
    </div>
    </div>
  );
}

export default Card