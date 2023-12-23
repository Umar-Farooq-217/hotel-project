import React from 'react'
import Image from 'next/image'
export default function BlogCard(props) {
  return (
    <div className='bg-white rounded-xl hover:bg-black hover:text-white'>
   
    <Image className='object-cover h-[454px] w-[636px] rounded-tl-xl rounded-tr-xl sm:w-full' src={props.src}  width={636} height={486}/>
    <p className='text-gray-500 text-md  pt-7 pl-7'>January 3,2023</p>
<h1 className='text-3xl font-semibold pt-3 px-7'>{props.title}</h1>
<h1 className='pt-4 pb-10 px-7'>{props.pera}</h1>
    
    
    
    
    </div>
  )
}
