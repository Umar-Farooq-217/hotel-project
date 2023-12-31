import React from 'react'
import Image from 'next/image'
export default function CustomersCard(props) {
  return (
    <div className='bg-[#F9F9F7] hover:bg-black hover:text-white rounded-lg'>
    <h1 className='text-xl font-bold text-red-600 pl-5 pt-7 '>{props.title}</h1>
    <p className='text-md pt-2 pl-5'>{props.pera}</p>
    <p className='bg-black h-[1px] mx-10 my-4 hover:bg-white'></p>
    <div className='flex pt-3 pl-5 pb-16'>
    <div><Image className='rounded-full object-cover ' src={props.src} width={70} height={70} /></div>
    <div className='ml-7'>
    <p className='font-bold font-serif mt-5'>{props.first}</p>
    <p>{props.second}</p>
    
    </div>
    </div>
    </div>
  )
}
