import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

function MyListings() {
  const {user} = use(AuthContext)
  const [listUser, setLisUser] =useState([])
  console.log(listUser)

  useEffect(()=>{
    if(user?.email){
        fetch(`http://localhost:5000/uerrooms/byemail?email=${user.email}`)
       .then(res=>res.json())
       .then(data=>{
        console.log('my listing data add ', data)
        setLisUser(data)
       })
        .catch(error=>{
          console.log('somthing error your fetching ', error)
        })
    }
  },[user])

  return (
    <div>
    {
      listUser.map(data=><p>{data.title}</p>)
    }

    </div>
  )
}

export default MyListings