import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-router-dom'

const Animation = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[1000px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            
            <h1 className='md:text-3xl sm:4xl text-3xl font-bold md:py-6 text-[#00df9a]'>Tame your work, Organise your life</h1>
            
            <div className='flex justify-center items-center'>
                <p className='md:text-4xl sm:text-2xl text-xl font-bold py-2'>One stop solution for all your </p>
                <Typed 
                className='md:text-4xl  sm:text-2xl text-xl font-bold pl-1 md:pl-3'
                strings={['notes!', 'tasks!', 'meetings!']} typeSpeed={80} 
                backSpeed={110} 
                loop
                />
                
            </div>

            <p className='md:text-2xl text-xl font-bold text-gray-500'>Calendly is your scheduling automation platform for eliminating the back-and-forth emails for finding the perfect time — and so much more.</p>
            <Link to='/register' className='bg-[#00df9a] w-[275px] rounded-md my-5 mx-auto py-3 px-2  font-semibold text-white text-xl hover:text-[#00df9a] hover:transition-all hover:bg-white'>Sign up for free</Link>
            <p>
                <Link to='/login' className='underline'>Already have an account? Log In</Link>
            </p>
            
      </div>

      {/* Secxtion-2 */}

    </div>
  )
}

export default Animation
