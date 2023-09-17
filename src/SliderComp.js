import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SliderCSS.css'
import './Project.css'
import Slider from 'react-slick'
import bulkMail from './thumbnail/bulkmail2.png'
const SliderComp = () => {


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
    <div className="containerdd" >
     
     <div className="cardcontainer">
        <Slider {...settings}>
          <div className="card wrap">
                
              <span class="material-symbols-outlined eye">
                search
                </span>
              <div className="proTitle">
              <h1>  BULK EMAIL application</h1>
              <p>Let's send the mail bulk at once</p>
              </div>
          </div>
          <div className="card wrap">
              <div className="proTitle">
              <h1>  BULK EMAIL application</h1>
              <p>Let's send the mail bulk at once</p>
              </div>
          </div>
          <div className="card wrap">
              <div className="proTitle">
              <h1>  BULK EMAIL application</h1>
              <p>Let's send the mail bulk at once</p>
              </div>
          </div>
          <div className="card wrap">
              <div className="proTitle">
              <h1>  BULK EMAIL application</h1>
              <p>Let's send the mail bulk at once</p>
              </div>
          </div>
          <div className="card wrap">
              <div className="proTitle">
              <h1>  BULK EMAIL application</h1>
              <p>Let's send the mail bulk at once</p>
              </div>
          </div>
          <div className="card wrap">
              <div className="proTitle">
              <h1>  BULK EMAIL application</h1>
              <p>Let's send the mail bulk at once</p>
              </div>
          </div>
         
     
          
        </Slider>
      </div>
    </div>
  );
}

export default SliderComp
