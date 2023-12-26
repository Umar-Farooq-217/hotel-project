import React from 'react'
import FirstNav from './../components/first-nav/First-Nav';
import Navbar from '../components/navbar/Navbar';
import BlogSecondCard from '../components/blogSecondCard/BlogSecondCard';
import Footer from '../components/footer/Footer';

export default function page() {
  return (
    <div className='bg-[#F9F9F7]'>
    <FirstNav/>
    <Navbar/>
    <div>
    <h1 className='text-7xl font-[Mystical] pt-20 text-center '>Our Blog & Articles</h1>
    <p className='text-center text-sm pt-5'>We consider all the drivers of change gives you the components you need <br /> to change to create a truly happens.</p>
    </div>

    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 gap-y-8 px-20 mt-16 pt-14'>
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
    <Footer/>

    
    </div>
  )
}
