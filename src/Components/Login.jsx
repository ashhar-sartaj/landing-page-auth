import React, { useState } from 'react'
import { useFirebase } from '../Firebase/Context'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'

const Login = () => {
    const firebase = useFirebase()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await firebase.loginUser(email, password)
            console.log('login success')
            navigate('/account')
        } catch(e) {
            setError(e.message)
            console.log(e.message)

        }
    }
    console.log(error)
  return (
    <div>
        {/* {error && <Modal err={error}/>} */}
      <main className="min-h-screen bg-gradient-to-r from-[#00df9a] to-[#000300] flex items-center justify-center text-gray-500 text-sm">
            <form
                className="bg-[#000300] text-white  shadow-lg rounded-md p-5 md:p-10 flex flex-col w-11/12 max-w-lg group"  noValidate
            >
                <label for="email" className="mb-5">
                <span>Email</span>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className=" peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500  w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-[#00df9a] font-semibold"
                    placeholder=" "
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}

                />
                <span class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                    Please enter a valid email address
                </span>
                </label>

                <label for="password" className="mb-5">
                <span>Set Password</span>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="... invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-[#00df9a] font-semibold peer"
                    placeholder=" "
                    required
                    // pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                />
                <span class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                    Please enter a valid password
                </span>
                </label>

                <button type="submit" className="mt-5 bg-blue-500 py-3 rounded-md text-white group-invalid:pointer-events-none group-invalid:opacity-30" onClick={handleSubmit}>Submit</button>
            </form>
        </main>
    </div>
  )
}

export default Login
