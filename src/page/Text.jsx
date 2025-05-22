import React from 'react'

function Text() {
  return (
   <div className="flex justify-center items-center p-4">
  <div className="relative w-full max-w-md">
    {/* Background Image */}
    <img
      className="w-full h-64 object-cover rounded-lg shadow-lg"
      src="https://i.ibb.co/XfGXFXQ6/messy-bedroom-with-playing-kids-107791-14643.jpg"
      alt="Room"
    />

    {/* Card Content */}
    <div className="absolute -bottom-28 left-0 right-3 transform  bg-gray-300 p-5 hover:-translate-y-3.5 transition-all duration-200 hover:shadow-md rounded-lg shadow-lg  ">
      {/* Price */}
      <p className="text-blue-600 font-semibold text-lg mb-1">From $100.00/night</p>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-1">The Marker Dublin Hotel</h2>

      {/* Subtitle Info */}
      <p className="text-gray-600 text-sm mb-1">Hotel 5 star</p>
      <p className="text-gray-500 text-sm mb-4">Dublin, Ireland</p>

      {/* CTA Button */}
      <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center group transition-all">
        Take me there
        <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
      </button>
    </div>
  </div>
</div>
  )
}

export default Text