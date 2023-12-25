import React from 'react'
import FirstNav from '../components/first-nav/First-Nav'
import Navbar from '../components/navbar/Navbar'
import Image from 'next/image'
import AboutCard from '../components/aboutCard/AboutCard'
import InformationCard from '../components/informationCard/InformationCard'
import CustomersCard from '../components/customersCard/CustomersCard'
import Footer from '../components/footer/Footer'
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
    <div className='bg-[#342E1F] bg-opacity-70 w-full h-[600px] '>
    <div className='flex justify-center items-center'>
    <button  className='bg-white w-[70px] h-[70px] rounded-full flex justify-center items-center mt-48 hover:scale-110 hover:bg-black '><Image src='/videoicon.png' width={10} height={40}  /></button><br />
    </div>
    <h1 className='text-5xl text-white font-serif font-bold text-center mt-10'>Feel the Authentic & <br />Original taste from us</h1>
    </div>
    </div>




    <div className='grid lg:grid-cols-3 mx-20 md:grid-cols-2 sm:grid-cols-1 bg-white'>
<AboutCard src='/multi.png' title='Multi Cuisine' pera='In the new era of technology we look in the future with certainty life.' />
<AboutCard src='/order.png' title='Easy To Order' pera='In the new era of technology we look in the future with certainty life.' />
<AboutCard src='/timer.png' title='Fast Delivery' pera='In the new era of technology we look in the future with certainty life.' />
    
    </div>



    <div className='grid lg:grid-cols-2 px-20 bg-[#F9F9F7] py-20'>
    <div>
    <h1 className='text-4xl font-serif font-bold mt-10'>A little information about our valuable guest</h1>
    <p className='pt-2 text-sm'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 pt-8 pb-5 '>
    <InformationCard title='3' pera='Locations' />
    <InformationCard title='1995' pera='Founded' />
    <InformationCard title='65+' pera='Members' />
    <InformationCard title='100%' pera='Satisfied Customers' />
    </div>
    </div>
    <div className='pt-5'>
    <Image className='w-[355px] h-[440px] flex m-auto ' src='/aboutchef.png' height={200} width={150}/>
    </div>

    
    </div>



    
    <div>
    <h1 className='text-4xl font-semibold pt-20 text-center font-serif mx-5'>What Our Customers Say</h1>
    <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5 pt-16 mx-5 pb-20'>

      <div><CustomersCard title=' "The Best Rasturant" ' pera=" Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles." first="Umar Farooq" second="Web Developer" src="/umar.jpg" /></div>

      <div><CustomersCard title=' "Simply Delicious" ' pera=" Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented." first="Umar Farooq" second="Batsman" src="/umar.jpg" /></div>

      <div><CustomersCard title=' "The Best Rasturant" ' pera=" Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles." first="Umar Farooq" second="Web Developer" src="/farooq.jpg" /></div>
    </div>

  </div>



  <Footer/>
    </div>
  )
}
