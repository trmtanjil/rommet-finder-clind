import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import MylistingDetails from './MylistingDetails'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet'
 
function MyListings() {
  const {user} = use(AuthContext)
  const [listUser, setLisUser] =useState([])
  console.log(listUser)

  useEffect(()=>{
    if(user?.email){
        fetch(`https://assserver-3.onrender.com/uerrooms/byemail?email=${user.email}`)
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
    Swal.fire({
  title: "Are you sure?",
  text: "You won't  Delet Your Product!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

  fetch(`https://assserver-3.onrender.com/uerrooms/byemail/${id}`,{
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
  title: "Your Product Deleted Succesfully",
  showConfirmButton: false,
  timer: 1500
});
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
  
  
      const  remainingdata =listUser.filter((data)=> data._id !==id);
        setLisUser(remainingdata)
      }
    })
  };



  return (
  <div>
      <Helmet>  <title>Mylist</title></Helmet>
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
        <th>Information</th>
        <th>availabality  </th>
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
  </div>
  )
}

export default MyListings

