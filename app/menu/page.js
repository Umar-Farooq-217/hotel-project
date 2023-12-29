import React from 'react'
import ImageSlider from '../components/imageSlider/ImageSlider';
import FirstNav from '../components/first-nav/First-Nav';
import Navbar from '../components/navbar/Navbar';
import '../globals.css'
import BlogSecondCard from '../components/blogSecondCard/BlogSecondCard';
import Footer from '../components/footer/Footer';
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
    <div className='bg-center bg-no-repeat  menuBack mt-10'>
    
    <h1 className='text-center text-5xl text-white font-bold font-serif py-8 bg-blue-800 '>Dishes We are Providing our Customers</h1>
    <ImageSlider images={images} />
  </div>
  <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 gap-y-8 px-20 mt-16 pt-14 pb-10'>
  <BlogSecondCard src="/icecup.png" title='7 delicious cheesecake recipes you can prepare'/>
  <BlogSecondCard src="/pizza.png" title='5 great pizza restaurants you should visit this city'/>
  <BlogSecondCard src="/tika.png" title='How to prepare delicious chicken tenders'  />
  <BlogSecondCard src="/icecup.png" title='7 delicious cheesecake recipes you can prepare'/>
  <BlogSecondCard src="/one.png" title='7 delicious cheesecake recipes you can prepare'/>
  <BlogSecondCard src="/two.png" title='7 delicious cheesecake recipes you can prepare'/>
  <BlogSecondCard src="/three.png" title='7 delicious cheesecake recipes you can prepare'/>
  <BlogSecondCard src="/four.png" title='7 delicious cheesecake recipes you can prepare'/>
  <BlogSecondCard src="/icecup.png" title='7 delicious cheesecake recipes you can prepare'/>
  <BlogSecondCard src="/pizza.png" title='5 great pizza restaurants you should visit this city'/>
  <BlogSecondCard src="/tika.png" title='How to prepare delicious chicken tenders'  />
  <BlogSecondCard src="/icecup.png" title='7 delicious cheesecake recipes you can prepare'/>
  <BlogSecondCard src="/one.png" title='7 delicious cheesecake recipes you can prepare'/>
  <BlogSecondCard src="/two.png" title='7 delicious cheesecake recipes you can prepare'/>
  <BlogSecondCard src="/three.png" title='7 delicious cheesecake recipes you can prepare'/>
  <BlogSecondCard src="/four.png" title='7 delicious cheesecake recipes you can prepare'/>
  </div>
  <div></div>
    <Footer/>
    </div>
  )
}
