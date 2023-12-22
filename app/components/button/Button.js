import React from 'react'

export default function Button(props) {
  return (
    <div><button className='py-2 px-5 rounded-full font-bold border-[#A23841] border-2 hover:bg-[#AD343E] hover:text-white hover:border-2 hover:border-black'>{props.title}</button></div>
  )
}
