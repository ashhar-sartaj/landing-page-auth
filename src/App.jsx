import { useState } from 'react'
import viteLogo from '/vite.svg'
import Home from './Components/Home'
import {Routes, Route} from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'
import Account from './Components/Account'
import ProtectedRoute from './Components/ProtectedRoute'
import Modal from './Components/Modal'

function App() {
  

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='account' element={
          <ProtectedRoute>
            <Account/>
          </ProtectedRoute>
        }/>
        <Route path='/modal' element={<Modal/>}/>
      </Routes>
        
    </>
  )
}

export default App
