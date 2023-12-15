import React from 'react'
import Image from 'next/image'
import '../../globals.css'
export default function FirstNav() {
  return (
    <div className='bg-[#474747] flex justify-between text-white text-sm px-[60px] nav'>
    <div className='flex py-1'>
    <div className='flex justify-center items-center '>  <Image className='mr-1' src="/phone.png" width={15} height={0}  />   <p>03486596201</p>                  </div>
    <div className='flex justify-center items-center ml-5 '>       <Image className='mr-1' src="/Icon.png" width={15} height={15}  />   <p>uf29664@gmail.com</p>              </div>
    </div>
    <div className='flex justify-center items-center '>
    <div className='flex justify-center items-center   mx-1 my-1  '><Image className='mr-1 mt-2'  src="/twitter.png" width={20} height={20}  />  </div>
    <div className='flex justify-center items-center     mx-1 my-1 '><Image className='mr-1'  src="/fb.png" width={7} height={7}  />  </div>
    <div className='flex justify-center items-center    mx-1 my-1  '><Image className='mr-1'  src="/github.png" width={12} height={12}  />  </div>
    <div className='flex justify-center items-center     mx-1 my-1 '><Image className='mr-1'  src="/Group.png" width={12} height={12}  />  </div>
  
    </div>
    
    
    
    
    </div>
  )
}
