import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-10 text-white px-4'>
      <div className='max-w-[840px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-3'>
            <h1 className=' md:text-3xl sm:text-2xl text-1xl font-bold py-1 '>Subscribe to our newsletter that will help you in organising your schedule.</h1>
            
        </div>

        <div className='my-3'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input type="email" placeholder='Enter email' className='p-2 flex w-full rounded-md text-black'/>
            
            <button className=' text-white bg-[#00df9a] rounded-md font-semibold w-[175px] md:ml-5 my-5 mx-auto md:mx-0 py-2 px-2 hover:text-[#00df9a] hover:transition-all hover:bg-white'>Subscribe</button>
            </div>
            <p>We care about protection of your data. Read about our privacy policy <span className='text-[#00df9a] underline'><a href="/">here</a></span></p>
        </div>

        

      </div>
    </div>
  )
}

export default Newsletter
