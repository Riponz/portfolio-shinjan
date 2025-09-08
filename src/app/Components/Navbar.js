"use client"

import Link from 'next/link';
import React from 'react'
import SquareIcon from '@mui/icons-material/Square';

function Navbar() {
  return (
    <nav className='w-screen fixed top-0 left-0 z-20 overflow-hidden h-10 flex justify-center items-center shrink-0'>
        <div className='left-menu w-full h-full flex justify-evenly items-center'>
            <div className='flex justify-center items-center gap-0.5'><SquareIcon sx={{ fontSize: 10 }} className='rotate-45' /><Link href="/">MITRA</Link></div>
            <div className='flex justify-center items-center gap-0.5'><SquareIcon sx={{ fontSize: 10 }} className='rotate-45' /><Link href="/works">WORKS</Link></div>
            <div className='flex justify-center items-center gap-0.5'><SquareIcon sx={{ fontSize: 10 }} className='rotate-45' /><Link href="/about">ABOUT</Link></div>
        </div>
        <div className='right-menu w-full h-full flex items-center justify-end pr-15'>
            <div className='flex justify-center items-center gap-0.5'><SquareIcon sx={{ fontSize: 10 }} className='rotate-45' /><Link href="#">CONTACT</Link></div>
        </div>
    </nav>
  )
}



export default Navbar