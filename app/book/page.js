import React from 'react'
import Navbar from '../components/navbar/Navbar'
import FirstNav from './../components/first-nav/First-Nav';
import Footer from '../components/footer/Footer';

export default function page() {
  return (
    <div className='bg-[#F9F9F7]'>
    <FirstNav/>
    <Navbar/>
    <div>
    <h1 className='text-7xl font-serif  text-center pt-20'>Book A Table</h1>
    <p className='text-center pt-8 pb-[100px]'>We consider all the drivers of change gives you the components <br />  you need to change to create a truly happens.</p>
    </div>
    <div className='bg-white mx-96  px-5 sticky top-10 mb-10 '>
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 py-4 pt-8 '>
    <div>
    <label htmlFor="date" className='text-xl font-bold'>Date</label><br />
    <input type="date" id='date'  className='border-2 border-black w-full py-1 rounded-2xl px-5 mt-1'/>
    </div>
    <div>
    <label htmlFor="time" className='text-xl font-bold'>Time</label><br />
    <select id="time"  className='border-2 border-black w-full py-1 rounded-2xl px-5 mt-1'>
    <option value="usa">6:30 PM</option>
    <option value="uk">7:40 PM </option>
    <option value="canada">8:50 PM </option>
    <option value="canada">10:00 PM</option></select>
    </div>
    <div>
    <label htmlFor="name" className='text-xl font-bold'>Name</label><br />
    <input type="text" id='name' className='border-2 border-black w-full rounded-2xl px-5 py-1 mt-1'/>
    </div>
    <div>
    <label htmlFor="phone" className='text-xl font-bold'>Phone Number</label><br />
    <input type="phone"  id='phone' className='border-2 border-black w-full rounded-2xl px-5 py-1 mt-1'/>
    </div>

    </div>
    <div className=''>
    <label htmlFor="person" className='text-xl font-bold'>Total Person</label><br />
    <select id="person"  className='border-2 border-black w-full rounded-2xl px-5 py-1 mt-1'>
    <option value="usa">1 Person</option>
    <option value="uk">2 Person</option>
    <option value="canada">More Than 5 Persons</option>
    <option value="canada">More Than 10 Persons</option>
  </select>
    </div>

    <button className='w-full  bg-[#AD343E] rounded-3xl py-1 text-white font-bold my-5 mt-10 mb-10 hover:scale-[1.05]'>Book A Table</button>
    
    </div>
    <div className='bg-[url("/Map.png")] h-[500px] w-full'>

    
    </div>
    <Footer/>
    
    </div>
  )
}
