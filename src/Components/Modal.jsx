import React from 'react'
import { Link } from 'react-router-dom'
const Modal = (props) => {
  return (
    <div>
        <div className='modal-background min-h-screen bg-gradient-to-r from-[#000300] to-[#00df9a] flex justify-center items-center '>
          <div className='modal-container w-[30%] h-96 rounded-md bg-[#000300] text-white drop-shadow-2xl flex flex-col p-[25px] '>
              <div className='flex flex-col md:flex justify-evenly h-[100%] '>
                <div className='title inline-block text-center mt-[10px] mx-3'>
                    <p className='text-sm md:text-xl font-semibold'>Some error occured..</p>
                    <p className='text-sm md:text-base'>Or</p>
                    <p className='text-sm md:text-xl md:text3xl font-semibold'>wrong password/email id combination.</p>
                </div>
                
                <div className='footer flex flex-col mx-3 h-24 justify-evenly items-center md:flex-row  '>
                  <div>
                    <Link to ='/register' className=' md:w-[150px] md:h-[45px] md:m-[10px]  bg-[#00df9a]  rounded-md hover:bg-white  text-white cursor-pointer md:my-5 mx-auto py-1 px-2 md:px-5 font-semibold md:text-xl hover:text-[#00df9a] hover:transition-all text-center'>Sign up</Link>
                    </div>
                    <div>
                    <Link to ='/login' className=' md:w-[150px] md:h-[45px] md:m-[10px]  bg-[#00df9a]  rounded-md hover:bg-white  text-white cursor-pointer md:my-5 mx-auto py-1 px-2 md:px-5 font-semibold md:text-xl hover:text-[#00df9a] hover:transition-all text-center'>Login</Link>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Modal
