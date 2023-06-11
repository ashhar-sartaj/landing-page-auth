import React, { useState } from 'react'
import CountryData from '../CountryData.json'
import { useFirebase } from '../Firebase/Context'
import { useNavigate } from 'react-router-dom'
import Title from '../assets/Title.png'

const Register = () => {
  

  const firebase = useFirebase()
  console.log(firebase)
  const navigate = useNavigate()

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [country, setCountry] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleCountry = (e) => {
    const countryname = e.target.value
    console.log(countryname)
    setCountry(countryname)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
        await firebase.signupUser(email, password)
        console.log('registered successfully')
        await firebase.addData(fname, lname, country)
        navigate('/login')
    } catch(e) {
        setError(e.message)
        console.log(e.message)
    }
  }


  return (
    <div>
      <main className="min-h-screen bg-gradient-to-r from-[#00df9a] to-[#000300] flex items-center justify-center text-gray-500 text-sm">
            <form
                className="bg-[#000300] text-[#00df9a] font-semibold shadow-lg rounded-md p-5 md:p-10 flex flex-col w-11/12 max-w-lg group"  noValidate
                onSubmit={handleSubmit}
            >
              <div className='flex justify-center items-center'>
                <img src={Title} alt="" className='w-28'/> 
              </div>
                <label for="fname" className="mb-5">
                <span>First Name</span>
                <input
                    type="text"
                    name="fname"
                    id="fname"
                    className=" invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none  text-[#00df9a] font-semibold"
                    placeholder=" "
                    required
                    onChange={(e)=>setFname(e.target.value)}
                    value={fname}
                />
                </label>

                <label for="lname" className="mb-5">
                <span>Last Name</span>
                <input
                    type="text"
                    name="lname"
                    id="lname"
                    className=" invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none  text-[#00df9a] font-semibold"
                    placeholder=" "
                    required
                    onChange={(e)=>setLname(e.target.value)}
                    value={lname}
                />
                </label>

                {/* <label for="country" className="mb-5">
                <span>Country</span>
                <input
                    type="text"
                    name="country"
                    id="country"
                    className=" invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-[#00df9a] font-semibold"
                    placeholder=" "
                    required
                />
                </label> */}
                <label htmlFor="" className='mb-5'><span>Country</span>
                <select name="countryName" id="" className='w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-[#00df9a] font-semibold'  onChange={(e)=>handleCountry(e)}>
                  <option value="" hidden >
                    --Select Country
                  </option>
                  {
                    CountryData.map((item)=> {
                      return (
                        <option  key={item.code} value={item.name} className='bg-black'>
                            {item.name}
                        </option>
                      )
                    })
                  }
                </select>
                </label>

                <label for="email" className="mb-5">
                <span>Email</span>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className=" peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500  w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-[#00df9a] font-semibold"
                    placeholder=" "
                    required
                    pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
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
                    className="... invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none peer text-[#00df9a] font-semibold"
                    placeholder=" "
                    required
                    pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                />
                <span class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                    Password must contain minimum eight characters, at least one letter, one number and one special character
                </span>
                </label>

               

                <button type="submit" className="mt-5  py-3  group-invalid:pointer-events-none group-invalid:opacity-30 bg-[#00df9a] rounded-md font-semibold text-white text-xl hover:text-[#00df9a] hover:transition-all hover:bg-white">Submit</button>
            </form>
        </main>
    </div>
  )
}

export default Register
