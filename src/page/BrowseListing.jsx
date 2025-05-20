
import React from 'react'
import { useLoaderData } from 'react-router'
import UserAllData from './UserAllData'

function BrowseListing() {
  const data =useLoaderData()
  console.log(data)
  return (
    <div className='grid md:grid-cols-3   gap-5 max-w-6xl mx-auto'>
      {
        data.map(user=><UserAllData user={user} key={user._id}></UserAllData>)
      }
    </div>
  )
}

export default BrowseListing