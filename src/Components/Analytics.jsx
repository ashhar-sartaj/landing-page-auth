import React from 'react'
import Notes from '../assets/Notes.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-10 px-4 h-screen'>
      <div className="max-w-[1000px] mx-auto grid md:grid-cols-3 ">
        <img src={Notes} alt="image" className='w-[600px]mx-auto my-3 col-span-2'/>
        <div className='flex flex-col justify-between '>

            <div>
                <h1 className='md:text-3xl sm:text2xl text-1xl font-bold py-1 text-[#00df9a]'>WORK ANYWHERE</h1>
                <p>Keep important info handy- your notes sync automatically to all your devices.</p>
            </div>
            
            {/* <button className='bg-black text-[#00df9a] w-[175px rounded-md font-medium my-5 mx-auto md:mx-0 py-2 px-2 '>Get Started</button> */}
            <div>
            <h1 className='md:text-3xl sm:text2xl text-1xl font-bold py-1 text-[#00df9a]'>REMEMBER EVERYTHING</h1>
                <p>Makes notes more useful by adding text, images, audio, PDFs and documents.</p>
            </div>

            <div>
            <h1 className='md:text-3xl sm:text2xl text-1xl font-bold py-1 text-[#00df9a]'>TURN TO-DO INTO DONE</h1>
                <p>Bring your notes, tasks and schedules together to get things done more easily.</p>
            </div>

            <div>
            <h1 className='md:text-3xl sm:text2xl text-1xl font-bold py-1 text-[#00df9a]'>FIND THINGS FAST</h1>
                <p>Get what you need, when you need it with powerful, flexible search capabilities.</p>
            </div>
            
            
        </div>
      </div>
    </div>
  )
}

export default Analytics
