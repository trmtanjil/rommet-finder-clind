import React, {  useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { AuthContext } from './AuthContext'
const provider = new GoogleAuthProvider();

function AuthProvider({children}) {
  const [user, setUser] =useState(null)
    
   // regiser 
    const creatuser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
    }
    //google register 
        const googleregister =()=>{
        return signInWithPopup(auth,provider);
    }
    //login 
    const loginuser=(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password)
    }
    //logout
    const logOutUser=()=>{
      return signOut(auth)
    }



        const userInfo={
          creatuser, 
          googleregister,  
          loginuser ,
          logOutUser,
          user
    }
  
//add observer
useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth,currentuser=>{
    setUser(currentuser)
  })
  return()=>{
    unSubscribe();
  }
},[])

  return (
   <AuthContext.Provider value={userInfo} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider