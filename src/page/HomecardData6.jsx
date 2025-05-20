import React from 'react'

function HomecardData6({home}) {
    console.log(home)
    const {title,lifestyle,location,price,roomType} =home;
  return (
    <div>
        <div className="border rounded-xl shadow p-4 bg-white text-black">
  <h2 className="text-xl font-semibold">{title}</h2>
  <p className="text-gray-600">{location}</p>
  <p className="font-medium">Rent: ৳{price}</p>
  <p>Room Type: {roomType}</p>
   
  <p className="text-sm text-gray-500">Posted by: </p>

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