import React, { use } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, useLocation } from 'react-router';
import Lading from '../page/Lading';

function PrivetRouter({children}) {

    const {user,loading} =use(AuthContext);
    const location =useLocation()

    if(loading){
      return <Lading></Lading>
    }

    if(!user){
        return<Navigate state={location?.pathname} to='/login'></Navigate>
    }






  return children;
}

export default PrivetRouter