import React from 'react'
import Image from 'next/image'
export default function ServicesCard(props) {
  return (
    <div className='hover:text-white hover:rounded-xl hover:bg-blue-400 hover:scale-105 mb-16  '>
    <Image className='w-[306px] h-[360px] object-cover rounded-xl md:flex md:m-auto sm:flex sm:m-auto lg:m-0' src={props.src} width={120}  height={120}   />
    <h1 className='font-2xl font-bold pt-5 ml-1 lg:text-start md:text-center  sm:text-center'>{props.title}</h1>
    <p className='pt-2 ml-2 pb-3 sm:flex sm:m-auto  lg:text-start  sm:text-center'>{props.pera}</p>
    </div>
  )
}
