import React from 'react'
import FirstNav from '../components/first-nav/First-Nav'
import Navbar from '../components/navbar/Navbar'
import Image from 'next/image'
export default function page() {
  return (
    <div>
    <div className='bg-[#F9F9F7]'>
    <FirstNav/>
    <Navbar/>
    
    <div className='bg-[#F9F9F7] grid lg:grid-cols-2 pt-20 px-20 pb-20'>
    <div className='md:flex md:m-auto'>
      <Image className='w-[599px] h-[556px] rounded-lg' src='/Image.svg' width={100} height={100} />
    </div>
    <div className='ml-32 mt-20 lg:text-start lg:ml-16 md:text-center md:ml-0 sm:text-center sm:ml-1'>
      <h1 className='text-4xl font-bold font-serif  '>We provide healthy food for your family</h1>
      <p className='font-semibold pt-5'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
      <p className='pt-5'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event</p>
   
    </div>

  </div>
    </div>


    <div className='bg-[url("/resturant.avif")] w-full h-[600px] bg-no-repeat bg-center bg-cover'>
    <div className='bg-[#342E1F] bg-opacity-70 w-full h-[600px]'>
    <div className='bg-white w-[60px] h=[60px] rounded-3xl'><Image src='/videoicon.png' width={10} height={40}  /></div>
    
    </div>
    
    </div>
    </div>
  )
}
