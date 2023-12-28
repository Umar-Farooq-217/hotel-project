'use client'
import React, { Component } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class ImageSlider extends Component {
  render() {
    const { images } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img className='w-96 rounded-2xl flex m-auto h-64 my-10' src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    );
  }
}

export default ImageSlider;
