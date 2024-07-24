import React from 'react';
import Slider from 'react-slick';
import './Banner.css'; // Make sure to create a corresponding CSS file

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="banner-container">
      <Slider {...settings}>
        <div >
          <img style={{width:'100%',height:'500px'}} src="/Images/Img 1.jpg" alt='Fashion 1' />
        </div>
        <div>
          <img style={{width:'100%',height:'500px'}} src="/Images/Banner 1.jpg"  alt='Fashion 2' />
        </div>
        <div>
          <img style={{width:'100%',height:'500px'}} src="/Images/Banner 2.jpg"  alt='Fashion 3' />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;