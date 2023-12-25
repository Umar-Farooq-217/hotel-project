import React from 'react'

export default function InformationCard(props) {
  return (
    <div className='bg-white border-1 border-[#F9F9F7] py-3 rounded-lg hover:bg-black hover:text-white hover:scale-110'>
    <h1 className='text-5xl font-[Bistro] font-bold text-center'>{props.title}</h1>
    <p className='text-lg font-semibold text-center'>{props.pera}</p>
    </div>
  )
}
