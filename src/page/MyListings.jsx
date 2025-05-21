import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import MylistingDetails from './MylistingDetails'
import Swal from 'sweetalert2'
 
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
  const handledelete=(id,)=>{
  
    fetch(`http://localhost:5000/uerrooms/byemail/${id}`,{
      method:'DELETE',
      headers:{
        'content-type':'application/json',
      },
    })
    .then((res)=>res.json())
    .then((data)=>{
      if(data.deletedCount>0){
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
      const  remainingdata =listUser.filter((data)=> data._id !==id);
        setLisUser(remainingdata)
      }
    })
  };



  return (
   <div className="overflow-x-auto bg-gray-800">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
           <p>ID</p>
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
  
    {
      listUser.map((user,index)=><MylistingDetails 
      user={user}
      index={index}
      handledelete={handledelete}
       key={user._id}>

       </MylistingDetails>)
    }
     
    </tbody>
 
  
  </table>
</div>
  )
}

export default MyListings

