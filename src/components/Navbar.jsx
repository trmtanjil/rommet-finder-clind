import React, { use } from 'react'
import { Link, NavLink } from 'react-router'
import { AuthContext } from '../context/AuthContext'
import ThemeToggle from '../page/ThemeToggle'

function Navbar() {
  const {user,logOutUser}=use(AuthContext)
  return (
    <div>

    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          
          
          <NavLink to="/brouserlisting" className="hover:text-blue-500">Browse Listing</NavLink>
          <NavLink to="/mylisting" className="hover:text-blue-500">My Listings</NavLink>
          <NavLink to='userdataadd'>Add to Find Roommate</NavLink>
       
      </ul>
    </div>
    <div className="text-2xl font-bold">
          <NavLink to="/">Home</NavLink>
        </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
 <div className="hidden sm:flex space-x-4">
        
          <NavLink to="/brouserlisting" className="hover:text-blue-500">Browse Listing</NavLink>
          <NavLink to="/mylisting" className="hover:text-blue-500">My Listings</NavLink>
          <NavLink to='userdataadd'>Add to Find Roommate</NavLink>
        </div>
      
    </ul>
  </div>
  <div className="navbar-end">
          <ThemeToggle></ThemeToggle>

      {/* userNevbar photo  */}
         <div className='pr-3  flex items-center '>
      {user && <>
    
     <div  className="relative group">
     <div   className=' cursor-pointer w-9 mx-2  bg-gray-400 p-[3px] rounded-full flex items-center justify-center ' > 
      <img className='rounded-full'
      
       src={user.photoURL}  
       alt="User Profile" />
       <div className="absolute -bottom-1s2 left-1/2   bg-gray-800 text-white text-sm rounded-lg px-4  opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
       {user.displayName}
      </div>


       </div>
     </div>
      
      </>}
    </div>
 <div>
          {
        user ? <Link
        onClick={logOutUser}
     
        className="btn btn-primary ">LogOut</Link> : <>
                <Link to='/register' className="btn btn-primary mx-3">Register</Link>
        <Link to='/login' className="btn btn-primary">login</Link></>
      }

        </div>
  </div>
</div>
    </div>
  )
}

export default Navbar