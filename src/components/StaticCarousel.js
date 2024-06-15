import Slider from "react-slick";
import banda from '../assets/banda.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../staticcarousel.css"

function Carousel() {

    var settings = {
        className: "center",
        accessibility: true,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay:true,
        autoplaySpeed:2000,
        adaptiveHeight:true,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }
   ;
    return (
      <div className="slider-container carousel">
          <div className="carousel-title"><h1>TESTIMONIALS.</h1></div>

        <div className="carousel-sub">
            <p>Check out what my previous clients have to say</p></div>


        <Slider {...settings}>
          <div>
          <img src={banda} alt="" className="carousel-img"></img>
          

          </div>
          <div>
          <img src={banda} alt="" className="carousel-img"></img>
          </div>
          <div>
          <img src={banda} alt="" className="carousel-img"></img>
          </div>
          <div>
          <img src={banda} alt="" className="carousel-img"></img>
          </div>
          <div>
          <img src={banda} alt="" className="carousel-img"></img>
          </div>
          <div>
          <img src={banda} alt="" className="carousel-img"></img>
          </div>
          <div>
          <img src={banda} alt="" className="carousel-img"></img>
          </div>
          <div>
          <img src={banda} alt="" className="carousel-img"></img>
          </div>
        </Slider>
      </div>
    );
  }



  export default Carousel;