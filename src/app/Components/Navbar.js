"use client"

import Link from 'next/link';
import React, { useRef, useState } from 'react'
import SquareIcon from '@mui/icons-material/Square';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ClearIcon from '@mui/icons-material/Clear';

function Navbar() {

  const floatMenuRef = useRef(null)
  const floatMenu = useRef(null)
  const menuIconRef = useRef(null)
  const menuIcon = useRef(null)
  const [play, setPlay] = useState(false)
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {

    floatMenuRef.current = gsap.to(floatMenu.current, {
      height: "100vh",
      opacity: 1,
      duration: 0.6,
      paused: true
    })

    menuIconRef.current = gsap.to(menuIcon.current,{
      justifyContent: "end",
      duration: 0.6,
      paused: true
    })


  })


  const handleFloatingMenu = () => {

    console.log("prssed")

    // setPlay(!play)

    if (!play) {
      floatMenuRef.current.play()
      menuIconRef.current.play()
    } else {
      floatMenuRef.current.reverse()
      menuIconRef.current.reverse()
    }

    setPlay(!play)

  }

  return (
    <>
      <nav className='hidden mix-blend-difference text-white w-screen fixed top-0 left-0 z-20 overflow-hidden h-12 md:flex justify-center items-center shrink-0'>
        <div className='left-menu w-full h-full flex justify-evenly items-center'>
          <div className='flex justify-center items-center gap-0.5'><SquareIcon sx={{ fontSize: 10 }} className='rotate-45' /><Link href="/">MITRA</Link></div>
          <div className='flex justify-center items-center gap-0.5'><SquareIcon sx={{ fontSize: 10 }} className='rotate-45' /><Link href="/works">WORKS</Link></div>
          <div className='flex justify-center items-center gap-0.5'><SquareIcon sx={{ fontSize: 10 }} className='rotate-45' /><Link href="/about">ABOUT</Link></div>
        </div>
        <div className='right-menu w-full h-full flex items-center justify-end pr-15'>
          <div className='flex justify-center items-center gap-0.5'><SquareIcon sx={{ fontSize: 10 }} className='rotate-45' /><Link href="#">CONTACT</Link></div>
        </div>
      </nav>

      {/* mobile navbar */}
      <nav className='md:hidden mix-blend-difference text-white w-screen fixed top-0 left-0 z-20 overflow-x-hidden h-12 flex justify-center items-center shrink-0 px-8'>
        <div className='left-menu w-full h-full flex flex-1/2 justify-start items-center'>
          <div className='flex justify-center items-center gap-0.5'><SquareIcon sx={{ fontSize: 10 }} className='rotate-45' /><Link href="/">MITRA</Link></div>
        </div>
        <div className='flex text-white flex-1/2 justify-end items-center' onClick={handleFloatingMenu}>
          <div ref={menuIcon} className='border-1 w-6 h-6 flex flex-col justify-start items-center overflow-hidden'>
            <DragHandleIcon />
            <ClearIcon />
          </div>
        </div>
      </nav>
      <div ref={floatMenu} className='floating-menu flex flex-col items-center w-screen h-0 opacity-0 bg-black text-[#ECDCC3] justify-center text-4xl font-semibold'>
        <div className='flex justify-center items-center gap-0.5'><SquareIcon sx={{ fontSize: 10 }} className='rotate-45' /><Link href="/works">WORKS</Link></div>
        <div className='flex justify-center items-center gap-0.5'><SquareIcon sx={{ fontSize: 10 }} className='rotate-45' /><Link href="/about">ABOUT</Link></div>
        <div className='flex justify-center items-center gap-0.5'><SquareIcon sx={{ fontSize: 10 }} className='rotate-45' /><Link href="#">CONTACT</Link></div>
      </div>
    </>
  )
}



export default Navbar