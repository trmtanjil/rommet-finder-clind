import React from 'react'
import { CiLocationArrow1 } from 'react-icons/ci';

function HomecardData6({home}) {
    console.log(home)
    const {title,lifestyle,location,price,roomType,image,availabality} =home;
  return (
    <div>
        <div className="border rounded-xl shadow p-4 bg-white text-black justify-center  ">
           <div className='bg-amber-100 w-fit mx-auto rounded-xl'>
             <img className='h-[200px] p-2 mx-auto rounded-xl ' src={image} alt="" />
           </div>
  <h2 className="text-xl font-semibold text-center   py-2">{title}</h2>
 <div className='flex justify-between'>
   <div className='flex items-center '>
    <CiLocationArrow1  ></CiLocationArrow1>
      <p className="text-gray-600">Location :{location}</p>
   </div>
  <p className="font-medium">Rent: ৳{price}</p>
 </div>
<div className='flex justify-between py-3'>
      <p>Room Type: {roomType}</p>
   <span className="inline-block px-2 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded">
    {availabality}
  </span>
   
</div>
  {/* <p className="text-sm text-gray-500   ">Posted by:{availabality} </p> */}

  {/* Lifestyle Badges */}
  <div className="flex gap-2 mt-2">
       {lifestyle}
  </div>

  <button className="mt-3 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
    Contact
  </button>
</div>
    </div>
  )
}

export default HomecardData6