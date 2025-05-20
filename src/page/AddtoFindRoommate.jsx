 import React from 'react'
 
 function AddtoFindRoommate( ) {

   return (
     <div className="border p-4 rounded shadow-md w-full max-w-sm bg-white">
  <h2 className="text-xl font-bold mb-2">Card Title</h2>

  <p className="text-gray-600 mb-1">Location: Your City</p>

  <p className="font-medium">Rent: ৳1234</p>

  <p className="text-sm mb-2">Room Type: Single</p>

  <span className="inline-block px-2 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded">
    Available
  </span>

  <p className="text-sm text-gray-500 mt-2">Posted by: John Doe</p>

  <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
    Contact
  </button>
</div>
   )
 }
 
 export default AddtoFindRoommate