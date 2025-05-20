import React, { use } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, useLocation } from 'react-router';

function PrivetRouter({children}) {

    const {user} =use(AuthContext);
    const location =useLocation()

    if(!user){
        return<Navigate state={location?.pathname} to='/login'></Navigate>
    }






  return children;
}

export default PrivetRouter