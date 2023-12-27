import React from 'react'
import ImageSlider from '../components/imageSlider/ImageSlider';
import FirstNav from '../components/first-nav/First-Nav';
import Navbar from '../components/navbar/Navbar';
import '../globals.css'
const images = [
    '/burger.png',
    '/chips.png',
    '/tika.png',
    '/one.png',
    '/pizza.png',
    '/chicken.avif',
    '/roast.avif',
    '/cheeseburger.avif',
    // Add more image paths as needed
  ];

export default function page() {
  
      
  return (
    <div>
    <FirstNav/>
    <Navbar/>
    <div className='bg-center bg-no-repeat object-cover  menuBack'>
    
    <h1>Your Image Slider</h1>
    <ImageSlider images={images} />
  </div>
    
    </div>
  )
}
