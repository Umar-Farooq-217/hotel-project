import Image from 'next/image'
import './globals.css'
import FirstNav from './components/first-nav/First-Nav'
import Navbar from './components/navbar/Navbar'
import Button from './components/button/Button'

export default function Home() {
  return (
  <div>
  <FirstNav/>
  <Navbar/>
  <div className='first flex justify-center items-center '>
  <div>
  <h1 className='text-[96px] font-[300] font-[Charmonman] text-center'>Best Food for <br/> Your Taste</h1>
  
  <p className='text-center'>Discover delectable cuisine and unforgettable moments <br /> in our welcoming, culinary haven.</p>
   
  <div className='flex justify-center items-center mt-8'>
  <div  className='mx-5'><Button title='Book A Table'/></div>
  <div  className='mx-5'><Button title='Explore Menu'/></div>
 
  </div>
  </div>
  </div>
  </div>
  )
}
