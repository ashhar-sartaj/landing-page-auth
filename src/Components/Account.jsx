import React from 'react'
import { useFirebase } from '../Firebase/Context'
import { useNavigate } from 'react-router-dom'

const Account = () => {
    const firebase = useFirebase()
    // const user = firebase.user
    // console.log(user)

    const {isLoggedIn, user, logoutUser} = useFirebase()

    const navigate = useNavigate()

    const handleClick = async () => {
      if (isLoggedIn) {
        await logoutUser
        navigate('/')
      }
        
    }
  return (
    <>
    <div className='h-screen bg-gradient-to-r from-[#00df9a] to-[#000300]'>
        <div className=' max-w-[1000px] mx-auto'>
        
            <div className='flex flex-col justify-center items-center border border-violet-800 h-screen'>
                <h2 className='text-3xl font-bold font-mono text-white border border-x-violet-50'> {
                  user && `Welcome ${user.email}`
                }
                  
                  </h2>
                <button className='px-3 py-2 font-mono font-semibold text-white bg-[#252725] my-5' onClick={handleClick}> Log Out</button>
            </div>
        

        </div>
      </div>

      
      
    </>
  )
}

export default Account
