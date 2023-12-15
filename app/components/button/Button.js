import React from 'react'

export default function Button(props) {
  return (
    <div><button className='py-2 px-5 rounded-full font-bold border-[#52544B] border-2 hover:bg-[#AD343E] hover:text-white hover:border-0'>{props.title}</button></div>
  )
}
