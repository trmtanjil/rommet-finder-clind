
import React from 'react'
import { useLoaderData } from 'react-router'
import UserAllData from './UserAllData'

function BrowseListing() {
  const data =useLoaderData()
  console.log(data)
  return (
    <div>
        <h1 className='text-6xl py-10 text-center font-bold max-w-6xl  '>All Rome showing Heare </h1>
          <p className="text-center text-gray-200 mb-6">
              Choose from a variety of rooms that suit your comfort and budget. Book your stay today!
          </p>
          <div className='grid md:grid-cols-3   gap-5 max-w-6xl mx-auto'>
      
      {
        data.map(user=><UserAllData user={user} key={user._id}></UserAllData>)
      }
    </div>
    </div>
  )
}

export default BrowseListing