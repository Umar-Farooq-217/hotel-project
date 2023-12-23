import React from 'react'
import Image from 'next/image'
export default function BlogSecondCard(props) {
  return (
    <div className='bg-white rounded-xl hover:bg-black hover:text-white'>
   
    <Image className='object-cover h-[200px] w-[306px] rounded-tl-xl rounded-tr-xl sm:object-cover sm:w-full' src={props.src}  width={306} height={200}/>
    <p className='text-gray-500 text-sm  pt-7 pl-5'>January 3,2023</p>
<h1 className='text-2xl font-semibold pt-3 px-5'>{props.title}</h1>

    
    
    
    
    </div>
  )
}
