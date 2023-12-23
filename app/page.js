import Image from 'next/image'
import './globals.css'
import FirstNav from './components/first-nav/First-Nav'
import Navbar from './components/navbar/Navbar'
import Button from './components/button/Button'
import MenuCard from './components/menuCard/MenuCard'
import ServicesCard from './components/servicesCard/ServicesCard'
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineCreditCard } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import CustomersCard from './components/customersCard/CustomersCard'
import BlogCard from './components/blogCard/BlogCard'
import BlogSecondCard from './components/blogSecondCard/BlogSecondCard'
import Footer from './components/footer/Footer'

export default function Home() {
  return (
    <div>
      <FirstNav />
      <Navbar />

      <div className='first flex justify-center pt-72 m-auto '>
        <div>
          <h1 className='text-[96px] font-[300] font-[Charmonman] text-center'>Best Food for <br /> Your Taste</h1>

          <p className='text-center'>Discover delectable cuisine and unforgettable moments <br /> in our welcoming, culinary haven.</p>

          <div className='flex justify-center items-center mt-8'>
            <div className='mx-5'><Button title='Book A Table' /></div>
            <div className='mx-5'><Button title='Explore Menu' /></div>

          </div>
        </div>
      </div>


      <div>
        <h1 className='text-5xl text-center pt-16 font-semibold font-serif'>Browse Our Menu</h1>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-16 mb-20'>
          <div ><MenuCard src='/tea.png' title='Breakfast' pera='In the new era of technology we look in the future with certainty and pride for our life.' /></div>
          <div ><MenuCard src='/dishes.png' title='Main Dishes' pera='In the new era of technology we look in the future with certainty and pride for our life.' /></div>
          <div ><MenuCard src='/drinks.png' title='Drinks' pera='In the new era of technology we look in the future with certainty and pride for our life.' /></div>
          <div ><MenuCard src='/desserts.png' title='Desserts' pera='In the new era of technology we look in the future with certainty and pride for our life.' /></div>

        </div>
      </div>


      <div className='bg-[#F9F9F7] grid lg:grid-cols-2 pt-20 px-20 pb-20'>
        <div className='md:flex md:m-auto'>
          <Image className='w-[599px] h-[556px] rounded-lg' src='/Image.svg' width={100} height={100} />
        </div>
        <div className='ml-32 mt-20 md:text-center md:ml-0 sm:text-center sm:ml-1'>
          <h1 className='text-4xl font-bold font-serif  '>We provide healthy food for your family</h1>
          <p className='font-semibold pt-5'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
          <p className='pt-5'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event</p>
          <div className='pt-20'>
            <Button title='More About Us' />
          </div>
        </div>

      </div>


      <div className='mx-20'>
        <h1 className='text-4xl font-bold font-serif pt-20'>We also offer unique <br /> services for your events</h1>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 pt-16  sm:m-auto'>
          <div><ServicesCard src='/catering.svg' title='Caterings' pera='In the new era of technology we look in the future with certainty for life.' /></div>
          <div><ServicesCard src='/event.svg' title='Weddings' pera='In the new era of technology we look in the future with certainty for life.' /></div>
          <div><ServicesCard src='/catering.svg' title='Birthdays' pera='In the new era of technology we look in the future with certainty for life.' /></div>
          <div><ServicesCard src='/event.svg' title='Caterings' pera='In the new era of technology we look in the future with certainty for life.' /></div>

        </div>
      </div>



      <div className='grid lg:grid-cols-2 px-20 pb-8 bg-[#F9F9F7] '>
        <div className='flex pt-10'>
          <div><Image className='w-[431px] h-[600px] pr-5' src='/chef.svg' width={60} height={60} /></div>
          <div className='pt-20'>
            <div className='rounded-xl'><Image className='w-[290px] h-[290px]  object-cover rounded-xl mb-5' src='/kabab.svg' width={40} height={40} /></div>
            <div><Image className='w-[290px] h-[190px] object-cover rounded-xl' src='/soop.svg' width={40} height={40} /></div>
          </div>
        </div>
        <div>
          <h1 className='text-4xl pt-48 ml-24  font-serif'>Fastest Food  <br />Delivery in City</h1>
          <p className='ml-24 pt-5 pb-5'>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>

          <div>

            <div className='flex py-3'>
              <div className='bg-[#A23841] flex justify-center items-center rounded-full w-6 ml-24 '><AiOutlineClockCircle className='text-white' />
              </div>
              <p className='pl-6'>Delivery within 30 minutes</p>
            </div>

            <div className='flex py-3'>
              <div className='bg-[#A23841] flex justify-center items-center rounded-full w-6 ml-24 '><AiOutlineCreditCard className='text-white' />
              </div>
              <p className='pl-6'>Best offer & Prices</p>
            </div>

            <div className='flex py-3'>
              <div className='bg-[#A23841] flex justify-center items-center rounded-full w-6 ml-24 '><SlBasket className='text-white' />
              </div>
              <p className='pl-6'>Delivery within 30 minutes</p>
            </div>

          </div>


        </div>

        <div>
        </div>

      </div>



      <div>
        <h1 className='text-4xl font-semibold pt-10 text-center font-serif mx-5'>What Our Customers Say</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5 pt-5 mx-5 pb-20'>

          <div><CustomersCard title=' "The Best Rasturant" ' pera=" Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles." first="Umar Farooq" second="Web Developer" src="/umar.jpg" /></div>

          <div><CustomersCard title=' "Simply Delicious" ' pera=" Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented." first="Umar Farooq" second="Batsman" src="/umar.jpg" /></div>

          <div><CustomersCard title=' "The Best Rasturant" ' pera=" Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles." first="Umar Farooq" second="Web Developer" src="/farooq.jpg" /></div>
        </div>

      </div>


      <div className='bg-[#F9F9F7] px-20'>
        <h1 className='text-4xl font-serif font-semibold pt-20'>Our Blog & Articles</h1>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5'>
        <div>
        <BlogCard src="/burger.png" title='The secret tips & tricks to prepare a perfect burger & pizza for our customers'
        pera='Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.'
        
        />
        </div>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 '>
        <div className='rounded-xl'>
        <BlogSecondCard src="/chips.png" title='How to prepare the perfect french fries in an air fryer'
        
        />
        </div>  <div>
        <BlogSecondCard src="/tika.png" title='How to prepare delicious chicken tenders'
       
        />
        </div>  <div>
        <BlogSecondCard src="/icecup.png" title='7 delicious cheesecake recipes you can prepare'
      
        />
        </div>  <div>
        <BlogSecondCard src="/pizza.png" title='5 great pizza restaurants you should visit this city'
      
        />
        </div>
        </div>

        </div>
      </div>


      <Footer/>






    </div>
  )
}
