import React, { useState } from 'react'
import { AiFillLike } from 'react-icons/ai'
import { useLoaderData } from 'react-router'
 
function RommetUserDetails() {
  
  const [showContact, setShowContact]=useState(false)
  const handleLikeContact=()=>{
    setShowContact(true)
  }

  const user =useLoaderData()
  const {image,lifestyle,location,availabality,price
    ,roomType,title,contactInfo}=user

    const [likeCount,setLikeCount]=useState(user.likecount ||0);
   

const hadleLikeCount = ()=>{
   fetch(`http://localhost:5000/uerrooms/count/${user._id}`,{
    method:'PATCH',
   })
   .then(res=>res.json())
   .then(data=>{

     if (data.modifiedCount > 0) {
        setLikeCount(prev => prev + 1);
      }
    console.log('like count update',data)
   })
}


  return (
    <div>
        <div class="max-w-4xl mx-auto my-6 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
  {/* <!-- Image Left --> */}
  <div className="md:w-1/2">
    <img
      src={image}
      className="w-full h-full object-cover"
    />
  </div>

  {/* <!-- Content Right --> */}
  <div className="md:w-1/2 p-6 flex flex-col justify-between">
{/* like count  */}
  <div>
    <p className='btn btn-primary'>{likeCount}</p>
  </div>
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p class="text-gray-600 mb-2"><span className="font-medium">Location:</span> {location}</p>
      <p class="text-gray-600 mb-2"><span className="font-medium">Room Type:</span> {roomType}</p>
      <p class="text-gray-600 mb-2"><span className="font-medium">Lifestyle:</span>{lifestyle}</p>
      <p class="text-gray-600 mb-2"><span className="font-medium">Availability:</span> {availabality}</p>
      <p class="text-gray-800 font-bold text-lg mt-4">Price: ৳{price}</p>
    </div>
   <div>
     <button 
    onClick={()=>{
        handleLikeContact();
        hadleLikeCount();
     }} 
    className="mt-6 w-full flex justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition-all">
     <AiFillLike />
    </button>
   </div>
    {
      showContact && (
        <div className='btn m-3 btn-primary'>
          contact Number : {contactInfo}
        </div>
      )
    }
  </div>
</div>
    </div>
  )
}

export default RommetUserDetails