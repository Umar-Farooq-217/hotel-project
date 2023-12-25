import React from 'react'
import Image from 'next/image'
export default function AboutCard(props) {
  return (
    <div className='flex pt-14 pb-12'>
    <div className='pl-10'><Image className='' src={props.src} width={40} height={40} /></div>
    <div className='pl-6 '><h1 className='text-xl font-bold'>{props.title}</h1>
    <p className='pt-2'>{props.pera}</p>
    </div>
    </div>
  )
}
