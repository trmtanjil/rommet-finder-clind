import React from 'react'
import { Slide, Zoom } from 'react-awesome-reveal'
import Marquee from 'react-fast-marquee'

function ExtraCard1() {
  return (
          <div className="bg-gray-900 py-10 px-4 text-white">
      <h2 className="text-3xl font-bold text-center mb-2">Destinations</h2>
       <Marquee direction='right' gradient={false} speed={50}>

        <p className="text-center text-amber-300 mb-10">
        Amazing featured destination package the world
      </p>
       </Marquee>
     

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left 3 Small Cards */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Card 1 */}
           <Zoom direction='center' duration={1200}>
          <div className="relative rounded-lg overflow-hidden shadow-lg group h-48">
            <img
              src="https://i.ibb.co/wmMDdGy/roommates-laying-bed-side-view-23-2149485689.jpg"
              alt="Japan"
              className="w-full h-full object-cover group-hover:opacity-70 transition duration-300  group-hover:scale-110 rounded-lg"
            />
            <div className="absolute top-4 left-4 bg-black bg-opacity-60 px-3 py-2 rounded">
              <h3 className="text-lg font-bold">Japan</h3>
              <p className="text-sm">30 Tours, 10 Hotels</p>
            </div>
          </div>
 </Zoom>

            <div className='flex gap-5 justify-between'>

                   {/* Card 3 */}
           <Zoom direction='center' duration={1200}>
          <div className="relative rounded-lg overflow-hidden shadow-lg group h-48">
            <img
              src="https://i.ibb.co/4Z4nPgWg/hand-drawn-people-working-from-home-23-2148820405.jpg"
              alt="Greek Islands"
              className="w-full h-full object-cover group-hover:opacity-70 transition duration-300  group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-black bg-opacity-60 px-3 py-2 rounded">
              <h3 className="text-lg font-bold">Greek Islands</h3>
              <p className="text-sm">30 Tours, 10 Hotels</p>
            </div>
          </div>
            
 </Zoom>
          {/* Card 2 */}
           <Zoom direction='center' duration={1200}>
          <div className="relative rounded-lg overflow-hidden shadow-lg group h-48">
            <img
              src="https://i.ibb.co/23g8Qz3V/austin.webp"
              alt="Korea"
              className="w-full h-full object-cover group-hover:opacity-70 transition duration-300  group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-black bg-opacity-60 px-3 py-2 rounded">
              <h3 className="text-lg font-bold">Korea</h3>
              <p className="text-sm">30 Tours, 10 Hotels</p>
            </div>
          </div>
 </Zoom>
            </div>
          

        
        </div>

        {/* Right Big Card */}
         <Zoom direction='center' duration={1200}>
        <div className="relative h-[410px]  rounded-lg overflow-hidden shadow-lg group flex-1 lg:flex-[1.4]  ">
          <img
            src="https://i.ibb.co/DmmJtTj/chicago.webp"
            alt="Europe River Cruises"
            className="w-full h-[410px] object-cover group-hover:opacity-70 transition duration-300 group-hover:scale-110 rounded-lg"
          />
          <div className="absolute top-4 left-4 bg-black bg-opacity-60 px-4 py-3 rounded">
            <h3 className="text-2xl font-bold">Europe River Cruises</h3>
            <p className="text-base">30 Tours, 10 Hotels</p>
          </div>
        </div>
 </Zoom>
      </div>
    </div>
  )
}

export default ExtraCard1