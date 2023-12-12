import React from 'react'
import Image from 'next/image'
export default function FirstNav() {
  return (
    <div className='bg-[#425059] '>
    <div>
    <div>  <Image src="/phone.png" width={15} height={15}  />   <p>03486596201</p>                  </div>
    <div>       <Image src="/Icon.png" width={15} height={15}  />   <p>uf29664@gmail.com</p>              </div>
    </div>
    <div>
    <div><Image src="/twitter.png" width={25} height={25}  />  </div>
    <div><Image src="/fb.png" width={10} height={8}  />  </div>
    <div><Image src="/Group.png" width={15} height={15}  />  </div>
    <div><Image src="/github.png" width={15} height={15}  />  </div>
    </div>
    
    
    
    
    </div>
  )
}
