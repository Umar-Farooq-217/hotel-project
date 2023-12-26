import React from 'react'
import ImageSlider from '../components/imageSlider/ImageSlider';

const images = [
    '/burger.png',
    '/chips.png',
    '/mustafa.jpeg',
    // Add more image paths as needed
  ];

export default function page() {
  
      
  return (
    <div>
    <div>
    <h1>Your Image Slider</h1>
    <ImageSlider images={images} />
  </div>
    
    </div>
  )
}
