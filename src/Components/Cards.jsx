import React from 'react'
import Free from '../assets/Free.png'
import Personal from '../assets/Personal.png'
import Teams from '../assets/Teams.png'

const Cards = () => {
  return (
    <div className='w-full py-[8rem] px-4 bg-white'>
      <div className='max-w-[840px] mx-auto grid md:grid-cols-3 gap-8'>
        {/* 1st card */}
        <div className='w-full shadow-xl flex flex-col p-5 my-4 rounded-lg hover:scale-105 duration-300'>
            <img src={Free} alt="/" className='w-20 mx-auto mt-[-3rem] bg-white' />
            <h2 className='text-4xl  py-2 text-center'>Free</h2>
            <p className='text-center text-3xl font-bold'>0.00</p>
            <div className='text-center font-medium'>
                <p className='py-1 border-b mx-6 mt-6'>Take great notes</p>
                <p className='py-1 border-b mx-6'>Sync up to 2 devices</p>
                <p className='py-1 border-b mx-6'>60 MB monthly uploads</p>
                <p className='py-1 border-b mx-6'>25 MB max. note size</p>
                <p className='py-1 border-b mx-6'>Attach PDFs, receipts, files, photos, images, and documents</p>
            </div>
            <button className='text-white bg-[#00df9a]  rounded-md font-semibold w-[175px] md:ml-5 my-5 mx-auto md:mx-0 py-2 px-2 hover:text-[#00df9a] hover:transition-all hover:bg-black'>Get Started</button> 
        </div>

        {/* 2nd card */}
        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-5 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
            <img src={Personal} alt="/" className='w-20 mx-auto mt-[-3rem] bg-transparent bg-white' />
            <h2 className=' text-4xl  py-2  text-center'>PERSONAL</h2>
            <p className='text-center text-3xl font-bold'>449.00/month</p>
            <div className='text-center font-medium'>
                <p className='py-1 border-b mx-6 mt-6 font-semibold'>EVERYTHING IN FREE, PLUS:</p>
                <p className='py-1 border-b mx-6'>Sync unlimited devices</p>
                <p className='py-1 border-b mx-6'>10 GB monthly uploads</p>
                <p className='py-1 border-b mx-6'>200 MB max. note size</p>
                <p className='py-1 border-b mx-6'>Search text inside images, docs, and PDFs</p>
            </div>
            <button className='text-white bg-[#00df9a]  rounded-md font-semibold w-[175px] md:ml-5 my-5 mx-auto md:mx-0 py-2 px-2 hover:text-[#00df9a] hover:transition-all hover:bg-black'>Get Started</button> 
        </div>

        {/* 3rd card */}
        <div className='w-full shadow-xl flex flex-col p-5 my-4 rounded-lg hover:scale-105 duration-300'>
            <img src={Teams} alt="/" className='w-20 mx-auto mt-[-3rem] bg-white' />
            <h2 className='text-4xl  py-2  text-center'>PROFESSIONAL</h2>
            <p className='text-center text-3xl font-bold'>835.00/month</p>
            <div className='text-center font-medium'>
                <p className='py-1 border-b mx-6 mt-6 font-semibold'>EVERYTHING IN PERSONAL, PLUS:</p>
                <p className='py-1 border-b mx-6'>Save 2x more content with 20 GB monthly uploads</p>
                <p className='py-1 border-b mx-6'>Access to all widgets and customization for Home</p>
                <p className='py-1 border-b mx-6'>Create, manage, and assign tasks to others, and easily track their progress</p>
                <p className='py-1 border-b mx-6'>Export notebooks as PDF files</p>
            </div>
            <button className='text-white bg-[#00df9a]  rounded-md font-semibold w-[175px] md:ml-5 my-5 mx-auto md:mx-0 py-2 px-2 hover:text-[#00df9a] hover:transition-all hover:bg-black'>Get Started</button> 
        </div>
      </div>
    </div>
  )
}

export default Cards
