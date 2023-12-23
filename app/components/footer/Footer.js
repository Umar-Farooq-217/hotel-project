import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='bg-[#474747] text-white'>
    <div className='bg-[#474747] text-white px-20 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
    <div>
    <div className='flex items-center pt-24 sm:justify-center'>
    <Image src='/footer.png' className='' width={40} height={40} />
    <p className='text-2xl font-bold pl-2 mt-2'>Umar Farooq</p>
    </div>
    <p className='pt-6 pb-6 text-sm sm:text-center'>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
    <div className='flex justify-around w-36 sm:m-auto'>
    <div className='bg-red-500 rounded-2xl w-6 h-6 flex justify-center items-center text-center'>
    <Image className='mt-1 w-[13px] h-[16px]' src='/twitter.png ' width={20} height={20}/>
    </div>
    <div className='bg-red-500 rounded-2xl w-6 h-6 flex justify-center items-center '>
    <Image className='w-[7.9px] h-[15px]' src='/fb.png ' width={9} height={5}/>
    </div>
    <div className='bg-red-500 rounded-2xl w-6 h-6 flex justify-center items-center text-center'>
    <Image className='w-3' src='/github.png ' width={20} height={20}/>
    </div>
    <div className='bg-red-500 rounded-2xl w-6 h-6 flex justify-center items-center text-center'>
    <Image className=' w-3' src='/Group.png ' width={20} height={20}/>
    </div>
    
    </div>
    </div>

 
    <div className='text-center pt-24'> <h1 className='font-bold'>Pages</h1>
    <p className='py-3'>Home</p>
    <p className='py-3'>About</p>
    <p className='py-3'>Menu</p>
    <p className='py-3'>Pricing</p>
    <p className='py-3'>Blog</p>
    <p className='py-3'>Contact</p>
    <p className='py-3'>Delivery</p></div>
    <div className='text-center pt-24'> 
    <h1 className='font-bold'>Utility Pages</h1>
    <p className='py-3'>StartHere</p>
    <p className='py-3'>StyleGuide</p>
    <p className='py-3'>Password Protected</p>
    <p className='py-3'>404 not found</p>
    <p className='py-3'>Licenses</p>
    <p className='py-3'>Changelog</p>
    <p className='py-3'>View More</p>

    </div>
    <div className='pt-24 '>
    <h1 className='text-xl font-bold sm:text-center'>Follow Us On Instagram</h1>
    <div className='grid lg:grid-cols-2 pt-10 gap-4 '>
    <Image className='sm:ml-[30%]' src='/chipss.png' width={222} height={176}/>
    <Image className='sm:ml-[30%]' src='/egg.png' width={222} height={176}/>
    <Image className='sm:ml-[30%]' src='/dish.png' width={222} height={176}/>
    <Image className='sm:ml-[30%]' src='/nan.png' width={222} height={176}/>
    </div>
    
    </div>
    
    </div>
    <p className='pt-36 text-center'>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
    </div>
  )
}
