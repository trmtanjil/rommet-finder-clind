 import React from 'react'
import { CiLocationArrow1 } from 'react-icons/ci'
import { Link } from 'react-router'
 
 function UserAllData({user}) {
   return (
     <div>
    
         <div className="border rounded-xl shadow p-4 bg-gray-200 text-black justify-center  ">
           <div className='bg-amber-100 w-fit mx-auto rounded-xl'>
             <img className='h-[200px] p-2 mx-auto rounded-xl ' src={user.image}alt="" />
           </div>
  <h2 className="text-xl font-semibold text-center   py-2">{user.title}</h2>
 <div className='flex justify-between'>
   <div className='flex items-center '>
    <CiLocationArrow1  ></CiLocationArrow1>
      <p className="text-gray-600">Location :{user.location} </p>
   </div>
  <p className="font-medium">Rent: ৳{user.price} </p>
 </div>
<div className='flex justify-between py-3'>
      <p>Room Type: {user.roomType }</p>
   <span className="inline-block px-2 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded">
   {user.availabality} 
  </span>
   
</div>
 
  {/* Lifestyle Badges */}
  <div className="flex gap-2 mt-2">
       {user.lifestyle}
  </div>

  <button className="mt-3 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
     <Link to={`/productdetails/${user?._id}`}> Rommet Details</Link>
  </button>
</div>
     </div>
   )
 }
 
 export default UserAllData