import React from 'react'

const Modal = (props) => {
  return (
    <div>
        <div className='modal-background w-screen h-screen bg-[ rgba(200, 200, 200)] fixed flex justify-center items-center '>
          <div className='modal-container w-[500px] h-[500px] rounded-md bg-white drop-shadow-2xl flex flex-col p-[25px]'>
              <div className='titleCloseBtn flex justify-end'>
                  <button  className='bg-gray-300'>X</button>
              </div>
              <div className='title inline-block text-center mt-[10px]'>
                  <h2>Some error occured</h2>
              </div>
              <div className='body flex justify-center items-center text-3xl text-center'>
                  <p>{props.err}</p>
              </div>
              <div className='footer flex justify-center items-center'>
                  <button  className='w-[150px] h-[45px] m-[10px]  bg-red-400 text-white cursor-pointer   '>Cancel</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Modal
