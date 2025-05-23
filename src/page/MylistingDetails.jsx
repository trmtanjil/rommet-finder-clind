 import React from 'react'
import { Link } from 'react-router'
 
 function MylistingDetails({user,index,handledelete}) {
  
   return (
     <>
           <tr>
        <th>
          <label>
            {index +1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.title}</div>
              <div className="text-sm opacity-50">{user.location}</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn  mx-2 btn-xs  btn-primary"> <Link to={`/productdetails/${user?._id}`}>   Details</Link></button>
          <button className="btn mx-2  btn-xs btn-primary"> <Link to={`/editmypase/${user?._id}`}>   Edit</Link></button>
          <button onClick={()=>handledelete(user?._id)} className="btn mx-2  btn-xs btn-primary">    Delete</button>
        </th>
      </tr>
     </>
   )
 }
 
 export default MylistingDetails