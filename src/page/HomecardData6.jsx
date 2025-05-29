import React from 'react'
import { CiLocationArrow1 } from 'react-icons/ci';
import { Link } from 'react-router';

function HomecardData6({home}) {
  
 
    
  const {title,lifestyle,location,price,roomType,image,availabality} =home;
  console.log(title)
  return (
    <div   className='h-[400px] mx-auto'>
       <div className="flex justify-center items-center p-4">
  <div className="relative w-full max-w-md">
    {/* Background Image */}
    <img
      className="w-[300px] h-52 object-cover rounded-lg shadow-lg"
      src={image}
      alt="Room"
    />

    {/* Card Content */}
    <div className="absolute w-[320px] -bottom-[200px] left-0 right-3 transform  bg-gray-600 p-5 hover:-translate-y-3.5 transition-all duration-200 hover:shadow-md rounded-lg shadow-lg   border-b-4  hover:border-b-amber-300 ">
      {/* Price */}
     <h2 className="text-xl py-4   font-bold text-center hover:text-amber-300 transition duration-150  ">{title}</h2>
 <div className='flex justify-between'>
   <div className='flex items-center '>
    <CiLocationArrow1 ></CiLocationArrow1>
      <p className="text-gray-300">Location :{location}</p>
   </div>
 <span className="inline-block px-2 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded">
    {availabality}
  </span>

 </div>
<div className='flex justify-between py-3'>
      <p>Room Type: {roomType}</p>
       <p className="font-medium">Rent: $ {price}</p>
   
   
</div>
  {/* <p className="text-sm text-gray-500   ">Posted by:{availabality} </p> */}

  {/* Lifestyle Badges */}
  <div className="flex gap-2 mt-2">
       {lifestyle}
  </div>

  <button className="mt-3 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
     <Link to={`/productdetails/${home?._id}`}> Rommet Details</Link>
  </button>
    </div>
  </div>
</div>
 
</div>
 
  )
}

export default HomecardData6