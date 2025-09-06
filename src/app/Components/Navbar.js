import React from 'react'
import SquareIcon from '@mui/icons-material/Square';

function Navbar() {
  return (
    <nav className='w-screen fixed top-0 left-0 z-20 overflow-hidden h-10 flex justify-center items-center shrink-0'>
        <div className='left-menu w-full h-full flex justify-evenly items-center'>
            <div className='flex justify-center items-center'><SquareIcon sx={{ fontSize: 14 }} className='rotate-45' />MITRA</div>
            <div className='flex justify-center items-center'><SquareIcon sx={{ fontSize: 14 }} className='rotate-45' />WORKS</div>
            <div className='flex justify-center items-center'><SquareIcon sx={{ fontSize: 14 }} className='rotate-45' />ABOUT</div>
        </div>
        <div className='right-menu w-full h-full flex items-center justify-end pr-15'>
            <div className='flex justify-center items-center'><SquareIcon sx={{ fontSize: 14 }} className='rotate-45' />CONTACT</div>
        </div>
    </nav>
  )
}

export default Navbar