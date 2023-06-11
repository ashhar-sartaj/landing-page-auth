import { useState } from 'react'
import viteLogo from '/vite.svg'
import Home from './Components/Home'
import {Routes, Route} from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'

function App() {
  

  return (
    <>
      
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>
        
    </>
  )
}

export default App
