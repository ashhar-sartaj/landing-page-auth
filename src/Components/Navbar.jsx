import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='text-white flex justify-between items-center max-w-[1000px] h-24 mx-auto px-4'>
        <div className='flex justify-center items-center'>
            <img src={Logo} alt="" className='w-16'/>          
            {/* <h1 className='w-full text-4xl font-bold text-[#00df9a]'>Navbar</h1> */}
        </div>

        <div>
            <ul className='hidden md:flex space-x-2'>
                {/* //the above ul className means that initially it is blocked but above medium it is flex */}
                <li className='p-2 text-xl cursor-pointer font-semibold'>Explore</li>
                <li className='p-2 text-xl cursor-pointer font-semibold'>For Individuals</li>
                <li className='p-2 text-xl cursor-pointer font-semibold'>For Teams</li>
                <li className='p-2 text-xl cursor-pointer font-semibold'>
                    <Link to='/login'>Log In</Link>
                </li>
                <button className='px-3 py-2 bg-[#00df9a] text-white font-bold rounded-md hover:bg-white hover:text-[#00df9a] hover:transition-all'>Download</button>
            </ul>
        </div>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>

        {/* //Below is the layout of our mobile menu */}

        <ul className={nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-600' : 'fixed left-[-100%]' }>
        <h1 className='w-full text-center text-4xl font-bold text-[#00df9a]'>Navbar</h1>
                <li className='px-2 py-4  border-b border-gray-600 cursor-pointer hover:text-green-400'>Home</li>
                <li className='px-2 py-4 border-b border-gray-600 cursor-pointer hover:text-green-400'>Company</li>
                <li className='px-2 py-4  border-b border-gray-600 cursor-pointer hover:text-green-400'>Resources</li>
                <li className='px-2 py-4  border-b border-gray-600 cursor-pointer hover:text-green-400'>Reviews</li>
                <li className='px-2 py-4 cursor-pointer hover:text-green-400'>Contact Us</li>
        </ul>

      
    </div>
  )
}

export default Navbar
