
import React from 'react'
import { Link, useLoaderData } from 'react-router'
 import {useTypewriter ,Cursor} from 'react-simple-typewriter'
import { Helmet } from 'react-helmet';

function BrowseListing() {


  const [text]= useTypewriter({
    words:['showing','Heare'],
    loop:true,
    typeSpeed:100,
    deleteSpeed:100,
    delaySpeed:1000,
  });




  const data =useLoaderData()
  return (
   <div>
    <Helmet>  <title>Browse Listing</title></Helmet>
     <div className='mx-auto m-[50px]'>
        <h1 className='text-2xl md:text-6xl py-10 text-center font-bold max-w-6xl  '>All  <span className=''>Rome {' '}</span>
          <span className='font-bold text-green-400'>
      {text}
          </span>
          <span className='caret-orange-400 text-4xl'>
            <Cursor cursorStyle='/' /> 
          </span>
            </h1>

          <p className="text-center text-gray-200 mb-6">
              Choose from a variety of rooms that suit your comfort and budget. Book your stay today!
          </p>
          <div className='  mx-auto'>
      
      <div className="  mx-auto mt-10 p-5">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300">
          <thead className="bg-green-200 text-gray-800">
            <tr>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Location</th>
              <th className="p-3 border">Rent</th>
              <th className="p-3 border">Availability</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((post) => (
              <tr key={post._id} className="text-center hover:bg-gray-500">
                <td className="px-4 py-4  border">{post.username}</td>
                <td className="p-3 border">{post.location}</td>
                <td className="p-3 border">${post.price}</td>
                <td className="p-3 border">{post.availabality}</td>
                <td className="p-3 border">
             
                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                    <Link to={`/productdetails/${post?._id}`}> Rommet Details</Link>
                    </button>
           
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
   </div>
  )
}

export default BrowseListing