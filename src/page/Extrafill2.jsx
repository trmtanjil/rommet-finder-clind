import React from 'react'
import { BiMessageRounded } from 'react-icons/bi'
import { BsFillFilePostFill, BsPostageHeartFill } from 'react-icons/bs'
import { CiStreamOn } from 'react-icons/ci'
import { IoServerOutline } from 'react-icons/io5'
import { MdOutlineAppShortcut } from 'react-icons/md'

function Extrafill2() {
  return (
     <div className="relative w-full overflow-hidden max-w-6xl  mx-auto">
      {/* Background Image Layer */}
      <div className="absolute inset-0   bg-cover bg-center  "
        style={{ backgroundImage: "url('https://i.ibb.co/sxPn4gS/location-symbols-using-map-pointers-d-web-environment-location-symbols-using-map-pointers-d-web-envi.webp')" }}
      ></div>

      {/* Foreground Content */}
      <div className="relative   py-12 px-6 md:px-20 bg-black/10 text-black">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find a Roommate or Room for Rent
        </h1>
        <p className="mb-8 max-w-xl">
          iROOMit makes it easy to find a roommate you can enjoy day-to-day life with.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left  contect*/}
          <div className="flex-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold flex items-center gap-2"><BsPostageHeartFill size={50} /> Post Listing</h3>
              <p className="text-gray-900 md:text-xl">Post and edit your listing digitally via our app.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold flex items-center gap-2"><CiStreamOn size={50} /> Live Streaming</h3>
              <p className="text-gray-900 md:text-xl">Go Live. Show your Room or Apartment. Attract quality roommates.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold flex items-center gap-2"><MdOutlineAppShortcut size={50} /> App Tools</h3>
              <p className="text-gray-900 md:text-xl">Screen tenants, verify ID, credit report, pay rent in the app.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold flex items-center gap-2"><BiMessageRounded size={50} /> Instant App Notifications</h3>
              <p className="text-gray-900 md:text-xl">Conveniently set an alert to get notifications.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold flex items-center gap-2"><IoServerOutline size={50} /> Resources and Links</h3>
              <p className="text-gray-900 md:text-xl">Did you find a room for rent? Awesome! We can help!</p>
            </div>
          </div>

          {/* Right img*/}
          <div className="flex-1">
            <img
              src='https://i.ibb.co/67Y08zJz/3d-app-screenshot.webp'
              alt="App Screenshot"
              className="w-full md:max-w-[400px] mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Extrafill2