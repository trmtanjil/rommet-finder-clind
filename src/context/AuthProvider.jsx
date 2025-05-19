import React from 'react'

function AuthProvider({children}) {
    

        const userInfo={
         
    }


  return (
   <AuthContext.Provider value={userInfo} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider