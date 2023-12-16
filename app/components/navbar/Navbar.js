'use client'
import React, { useState } from 'react'
import Button from '../button/Button'
import Image from 'next/image'
import Link from 'next/link'
import '../../globals.css'
import { HiMenu } from "react-icons/hi";


export default function Navbar() {
  const [show,setShow]=useState(false);
  const toggleMenu = () => {
    setShow(!show);
  };
  return (
    <div className='flex justify-between pt-5 mx-20 navbar-div'>
    <div className='flex  justify-center items-center umar '> 
    <Image src="/Vector.jpg" width={50} height={60} />
    <button><Link href='/home'><h1 className='font-semibold font-serif text-3xl '>Umar Farooq</h1></Link></button>
    

    </div>
    <ul className={`navbar-ul responsive ${show ? 'responsive-show' : 'responsive-hide'}`}>
    <li className='navbar-li'>Home</li>
    <li className='navbar-li'>About</li>
    <li className='navbar-li'>Menu</li>
    <li className='navbar-li'>Pages</li>
    <li className='navbar-li'>Contact</li>
    </ul>
   
    <div className={`navbar-btn responsive ${show ? 'btn-show' : 'btn-hide'}`}>
    <Button title='Book A Table'/>
    </div>
    <button  onClick={toggleMenu}><HiMenu  className='text-3xl  menu'/></button>
    </div>
  )
}
