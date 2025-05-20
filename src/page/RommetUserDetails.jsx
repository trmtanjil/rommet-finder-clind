import React from 'react'
import { AiFillLike } from 'react-icons/ai'
import { useLoaderData } from 'react-router'
 
function RommetUserDetails() {
    const user =useLoaderData()
    const {image,lifestyle,location,availabality,price
,roomType,title}=user
    
    console.log(user)

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
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p class="text-gray-600 mb-2"><span className="font-medium">Location:</span> {location}</p>
      <p class="text-gray-600 mb-2"><span className="font-medium">Room Type:</span> {roomType}</p>
      <p class="text-gray-600 mb-2"><span className="font-medium">Lifestyle:</span>{lifestyle}</p>
      <p class="text-gray-600 mb-2"><span className="font-medium">Availability:</span> {availabality}</p>
      <p class="text-gray-800 font-bold text-lg mt-4">Price: ৳{price}</p>
    </div>
    <button className="mt-6 w-full flex justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition-all">
     <AiFillLike />
    </button>
  </div>
</div>
    </div>
  )
}

export default RommetUserDetails