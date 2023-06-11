import React, { useState } from 'react'
import CountryData from '../CountryData.json'


const Register = () => {
  const [countries, setCountries] = useState(CountryData)
  console.log(countries)
  return (
    <div>
      <main className="min-h-screen bg-gradient-to-r from-[#00df9a] to-[#000300] flex items-center justify-center text-gray-500 text-sm">
            <form
                className="bg-[#000300] text-white shadow-lg rounded-md p-5 md:p-10 flex flex-col w-11/12 max-w-lg group"  noValidate
            >

                <label for="fname" className="mb-5">
                <span>First Name</span>
                <input
                    type="text"
                    name="fname"
                    id="fname"
                    className=" invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none  text-[#00df9a] font-semibold"
                    placeholder=" "
                    required
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
                />
                </label>

                <label for="country" className="mb-5">
                <span>Country</span>
                <input
                    type="text"
                    name="country"
                    id="country"
                    className=" invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-[#00df9a] font-semibold"
                    placeholder=" "
                    required
                />
                </label>

                <select name="countryName" id="" className='w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-[#00df9a] font-semibold'>
                  <option value="" hidden>
                    --Select Country
                  </option>
                  {
                    countries.map((item)=> {
                      return (
                        <option  key={item.code} value={item.name} className='text-white'>
                            {item.name}
                        </option>
                      )
                    })
                  }
                </select>

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
                />
                <span class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                    Please enter a valid password
                </span>
                </label>

                <label for="confirmPassword" className="mb-5">
                <span>Confirm Password</span>
                <input
                    type="password"
                    name="confirmPassword"
                    id="password"
                    className="... invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-[#00df9a] font-semibold"
                    placeholder=" "
                    required
                />
                </label>

                <button type="submit" className="mt-5 bg-blue-500 py-3 rounded-md text-white group-invalid:pointer-events-none group-invalid:opacity-30">Submit</button>
            </form>
        </main>
    </div>
  )
}

export default Register
