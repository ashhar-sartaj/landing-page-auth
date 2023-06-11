// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from "react";
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const FirebaseContext = createContext(null)
export const useFirebase = () => useContext(FirebaseContext)

const firebaseConfig = {
  apiKey: "AIzaSyAMeS_auJ4zIS6ESGw8TP9ANDSDg8TWUWY",
  authDomain: "landingpage-auth-24508.firebaseapp.com",
  projectId: "landingpage-auth-24508",
  storageBucket: "landingpage-auth-24508.appspot.com",
  messagingSenderId: "963275973378",
  appId: "1:963275973378:web:b6d8064dc7e5ec5f71981b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null)
  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user)=> {
      console.log(user)
      if (user) setUser(user)
      else setUser(null)
    })
    return ()=>{
      unsubscribe()
    }
  }, [])
  //function for signup
  const signupUser =  (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
  }
  //function for login
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
  }
  //function for logout
  const logoutUser = () => {
    return signOut(auth)
  }
  //function to add data in firestore
  const addData = async(first_name, last_name, country) => {
      return await addDoc(collection(firestore, 'users'), {
        first_name, 
        last_name, 
        country
      })
  }
  const isLoggedIn = user ? true : false


  return (
    <FirebaseContext.Provider value={{signupUser, loginUser, addData, isLoggedIn, user, logoutUser}}>
      {props.children}
    </FirebaseContext.Provider>
  )
}