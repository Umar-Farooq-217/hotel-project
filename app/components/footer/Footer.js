import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='bg-black text-white '>
    <div>
    <div className='flex justify-center items-center'>
    <Image src='/footer.png' className='' width={40} height={40} />
    <p className='text-2xl font-bold pl-5'>Umar Farooq</p>
    </div>
    <p className='pt-10'>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
    <div>
    <div className='bg-red-500 rounded-2xl w-6 h-6 flex justify-center items-center text-center'>
    <Image src='/twitter.png 'className='' width={20} height={20}/>
    </div>
    
    </div>
    </div>

    <div></div>
    <div></div>
    <div></div>
    
    </div>
  )
}
