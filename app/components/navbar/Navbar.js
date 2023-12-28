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
    <div className='flex justify-between pt-5 pl-20 navbar-div'>
    <div className='flex  justify-center items-center umar '> 
    <Image src="/Vector.jpg" width={50} height={60} />
    <button><Link href='/'><h1 className='font-semibold font-serif text-3xl '>Umar Farooq</h1></Link></button>
    

    </div>
    <ul className={`navbar-ul responsive ${show ? 'responsive-show' : 'responsive-hide'}`}>
    <li className='navbar-li'><Link href='/'>Home</Link> </li>
    <li className='navbar-li'><Link href='/about'>About</Link> </li>
    <li className='navbar-li'><Link href='/menu'>Menu</Link> </li>
    <li className='navbar-li'><Link href='/blog'>Pages</Link> </li>
    <li className='navbar-li'><Link href='/contact'>Contact</Link> </li>
    </ul>
   
    <div className={`navbar-btn responsive ${show ? 'btn-show' : 'btn-hide'}`}>
    <Link href='/book'>
    <Button title='Book A Table'/>
    </Link>
    </div>
    <button  onClick={toggleMenu}><HiMenu  className='text-3xl  menu'/></button>
    </div>
  )
}
