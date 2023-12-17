import Image from 'next/image'
import './globals.css'
import FirstNav from './components/first-nav/First-Nav'
import Navbar from './components/navbar/Navbar'
import Button from './components/button/Button'
import MenuCard from './components/menuCard/MenuCard'

export default function Home() {
  return (
  <div>
  <FirstNav/>
  <Navbar/>

  <div className='first flex justify-center pt-72 m-auto '>
  <div>
  <h1 className='text-[96px] font-[300] font-[Charmonman] text-center'>Best Food for <br/> Your Taste</h1>
  
  <p className='text-center'>Discover delectable cuisine and unforgettable moments <br /> in our welcoming, culinary haven.</p>
   
  <div className='flex justify-center items-center mt-8'>
  <div  className='mx-5'><Button title='Book A Table'/></div>
  <div  className='mx-5'><Button title='Explore Menu'/></div>
 
  </div>
  </div>
  </div>


<div>
<h1 className='text-5xl text-center pt-16 font-semibold font-serif'>Browse Our Menu</h1>

<div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-16'>
<div ><MenuCard src='/tea.png' title='Breakfast' pera='In the new era of technology we look in the future with certainty and pride for our life.'  /></div>
<div ><MenuCard src='/dishes.png' title='Main Dishes' pera='In the new era of technology we look in the future with certainty and pride for our life.'  /></div>
<div ><MenuCard src='/drinks.png' title='Drinks' pera='In the new era of technology we look in the future with certainty and pride for our life.'  /></div>
<div ><MenuCard src='/desserts.png' title='Desserts' pera='In the new era of technology we look in the future with certainty and pride for our life.'  /></div>




</div>



</div>


  </div>
  )
}
