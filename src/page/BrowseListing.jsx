
import React from 'react'
import { useLoaderData } from 'react-router'
import UserAllData from './UserAllData'
import {useTypewriter ,Cursor} from 'react-simple-typewriter'

function BrowseListing() {


  const [text]= useTypewriter({
    words:['showing','Heare'],
    loop:true,
    typeSpeed:100,
    deleteSpeed:100,
    delaySpeed:1000,
  });




  const data =useLoaderData()
  console.log(data)
  return (
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
          <div className='grid md:grid-cols-3   gap-5 max-w-6xl mx-auto'>
      
      {
        data.map(user=><UserAllData user={user} key={user._id}></UserAllData>)
      }
    </div>
    </div>
  )
}

export default BrowseListing