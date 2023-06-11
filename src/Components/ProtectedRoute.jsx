import React from 'react'
import { useFirebase } from '../Firebase/Context'
import { useNavigate } from 'react-router-dom'
import {Navigate} from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const {user} = useFirebase()
  if (!user) {
    return <Navigate to='/protected' />
  }
  return children
}

export default ProtectedRoute
