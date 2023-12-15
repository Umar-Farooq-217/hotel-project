import React from 'react'
import Button from '../button/Button'
import Image from 'next/image'
import Link from 'next/link'
import '../../globals.css'

export default function Navbar() {
  return (
    <div className='flex justify-between pt-5 mx-14'>
    <div className='flex  justify-center items-center '> 
    <Image src="/Vector.jpg" width={50} height={60} />
    <button><Link href='/home'><h1 className='font-semibold font-serif text-3xl '>Umar Farooq</h1></Link></button>

    </div>
    <ul className='flex justify-center items-center'>
    <li className='navbar-li'>Home</li>
    <li className='navbar-li'>About</li>
    <li className='navbar-li'>Menu</li>
    <li className='navbar-li'>Pages</li>
    <li className='navbar-li'>Contact</li>
    </ul>
    <Button title='Book A Table'/>
    </div>
  )
}
