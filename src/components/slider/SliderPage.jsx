import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import "./Slider.css";


const SliderPage = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='slider slider-home'>
        <Slider {...settings}>
          <div className='item'>
            <img src={require("../../assetc/images/p1.jpg")} alt="P1" />
          </div>
          <div className='item'>
            <img src={require("../../assetc/images/p2.jpg")} alt="P2" />
          </div>
        </Slider>
      </div>
  )
}

export default SliderPage;