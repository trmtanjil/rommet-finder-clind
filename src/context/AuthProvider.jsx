import React from 'react'
import { auth } from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { AuthContext } from './AuthContext'
const provider = new GoogleAuthProvider();

function AuthProvider({children}) {
    
   // regiser 
    const creatuser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
    }
    //google register 
        const googleregister =()=>{
        return signInWithPopup(auth,provider);
    }



        const userInfo={
          creatuser, 
          googleregister,   
    }
    console.log(creatuser)


  return (
   <AuthContext.Provider value={userInfo} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider