import React from 'react'
import Image from 'next/image'
export default function MenuCard(props) {
  return (
    <div className='border-[#A23841] border-2 text-center mt-12 rounded-lg h-[375px] hover:scale-110 hover:bg-black hover:text-white'>
    <div className='bg-[#F3F3F0] w-[80px] flex justify-center items-center h-[80px] rounded-full m-auto my-10'>
    <Image  src={props.src} width={40} height={40} />
    </div>
    <h1 className='font-bold text-xl my-1'>{props.title}</h1>
    <p className='my-2 mx-2'>{props.pera}</p>
    <button className='text-[#A23841] font-bold mb-8 pt-5'>Explore Menu</button>
    </div>
  )
}
