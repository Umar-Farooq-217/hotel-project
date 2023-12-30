import React from 'react'
import FirstNav from '../components/first-nav/First-Nav'
import Navbar from './../components/navbar/Navbar';
import Footer from './../components/footer/Footer';

export default function page() {
  return (
    <div className='bg-[#F9F9F7]'>
    <FirstNav/>
    <Navbar/>
    <div>
    <h1 className='text-7xl font-[Mystical] text-center pt-20'>Contact Us</h1>
    <p className='text-center text-sm pt-5'>We consider all the drivers of change gives you the components you need <br /> to change to create a truly happens.</p>
    </div>

    <div className='bg-white lg:mx-92 md:mx-64 mt-10 shadow-xl rounded-xl mb-14'>
    <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-5 px-3 pt-5'>
    <div>
    <label htmlFor="date" className='text-xl font-bold'>Name</label><br />
    <input type="text" id='date' placeholder='Enter Your Name'  className='border-2 border-gray-200 w-full py-2
     rounded-3xl px-5 mt-1'/>
    </div>
    <div>
    <label htmlFor="date" className='text-xl font-bold'>Email</label><br />
    <input type="email" id='date' placeholder='Enter email'  className='border-2 border-gray-200 w-full py-2 rounded-3xl px-5 mt-1'/>
    </div></div>
    <div className='mt-5 px-3'>
    <label htmlFor="date" className='text-xl font-bold '>Subject</label><br />
    <input type="text" id='date' placeholder='Write Subject' className='border-2 border-gray-200 w-full py-2 rounded-3xl px-5 mt-1'/>
    </div>
    <div className='px-3 mt-5'>
    <label  className='text-xl font-bold' htmlFor="message">Message</label><br />
    <textarea className='w-full mb-10 pl-5 pt-3 border-2 border-gray-200 mt-2 rounded-xl' name="" id="message" cols="30" rows="10" placeholder='Write A Message '></textarea>
    </div>

    
    </div>
    <Footer/>





    </div>
  )
}
