import React, { use, useState } from 'react'
 
import { AuthContext } from '../context/AuthContext'
import { useLoaderData } from 'react-router'
import UserDataAdd from '../crudOperation/UserDataAdd'
import Swal from 'sweetalert2'

function EditmyPage() {
    const {user} =use(AuthContext)
    const data = useLoaderData()
    const [title, setTitle] =useState(data?.title)
   const [price, setPrice] =useState(data?.price)
  const [location, setLocation] =useState(data?.location)
    const [image, setImege] =useState(data?.image)
     const [contactInfo, setcontactInfo] =useState(data?.contactInfo)
      const [roomType, setroomType] =useState(data?.roomType)
      const [lifestyle, setlifestyle] =useState(data?.lifestyle)
        const [availabality, setavailabality] =useState(data?.availabality)




   
    
    const handleEditData=e=>{
        e.preventDefault()
        const updateData ={
          title,
          price,
          location,
          image,
          contactInfo,
          roomType,
          lifestyle,
          availabality,
        };
            fetch(`https://assserver-3.onrender.com/uerrooms/${data?._id}`,{
              method:'PUT',
              headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(updateData)
            })
            .then(res=>res.json())
            .then(data=>{

              Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Post Is Updated",
          showConfirmButton: false,
          timer: 1500
        });
              console.log(data)
            })
    }
  return (
    <div>
                <form onSubmit={handleEditData} className="  mx-auto p-4 bg-gray-600 shadow rounded-xl m-4">
      <h2 className="text-2xl font-bold mb-4">Edit listing rommet</h2>
      <div  >
       <div className="space-y-4 grid md:grid-cols-2 gap-4" >
        {/* title  */}
         <div>
          <label>Title :</label>
          <input type="text" name="title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          placeholder=" Title " className="md:w-full w-[90%]  p-2 border rounded" required />
        </div>
    {/* location  */}
         <div>
          <label>Location:</label>
          <input type="text"
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
          name="location" placeholder="Location" className="md:w-full w-[90%]  p-2 border rounded" required />
        </div>
        {/* rent price  */}
         <div>
          <label>Rent Amount :</label>
          <input type="number" name="price"
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
          placeholder="Rent Amount" className="md:w-full w-[90%]  p-2 border rounded" required />
        </div>



     {/* rusere email  */}
         <div>
          <label>User Email:</label>
          <input type="email" name="email"    readOnly
    placeholder="Rent Amount" defaultValue={user.email} className="md:w-full w-[90%]  p-2 border rounded" required />
        </div>



 {/* user name */}
         <div>
          <label>User Name  :</label>
          <input type="text" name="username"  readOnly
           defaultValue={user.displayName}  
    placeholder="User Name " className="md:w-full w-[90%]  p-2 border rounded" required />
        </div>

 <div>
          <label>Product Image URL:</label>
          <input type="text" name="image"
      value={image}
      onChange={(e)=> setImege(e.target.value)}
      
          placeholder="Product Image URL" className="md:w-full w-[90%]  p-2 border rounded" required />
        </div>
        {/* contact info  */}
         <div>
          <label>Contact Info:</label>
          <input type="text"
        onChange={(e)=>setcontactInfo(e.target.value)}
       value={contactInfo}
          name="contactInfo" placeholder="Contact Info" className="md:w-full w-[90%]  p-2 border rounded" required />
        </div>


{/* Room Type */}
        <div>
    <label htmlFor="roomType" className="block mb-1 font-medium">
      Room Type
    </label>
    <select
      id="roomType"
      name="roomType"
        onChange={(e)=>setroomType(e.target.value)}
      value={roomType}
      className="md:w-full w-[90%]  border rounded-md p-2 "
      required
    >
      <option className='text-black'  value="">Select Room Type</option>
      <option className='text-black' value="Single">Single</option>
      <option className='text-black' value="Shared">Shared</option>
      <option className='text-black' value="Studio">Studio</option>
    </select>
  </div>
       {/* Lifestyle Preferences */}

       <div>
  <label htmlFor="lifestyle" className="block mb-1 font-medium">
    Lifestyle Preferences
  </label>
  <select
    id="lifestyle"
    name="lifestyle"
    className="md:w-full w-[90%]  border rounded-md p-2"
    value={lifestyle}
        onChange={(e)=>setlifestyle(e.target.value)}
    required
  >
    <option  className='text-black' value="">Select Lifestyle Preference</option>
    <option  className='text-black' value="Pets Allowed">Pets Allowed</option>
    <option className='text-black'  value="No Pets">No Pets</option>
    <option className='text-black'  value="Smoking">Smoking</option>
    <option className='text-black'  value="Non-Smoking">Non-Smoking</option>
    <option className='text-black'  value="Night Owl">Night Owl</option>
    <option className='text-black'  value="Early Bird">Early Bird</option>
  </select>
</div>

       
    {/* Availability */}
 <div>
          <label> Availabality</label>
          <select name="availabality" 
          value={availabality}
        onChange={(e)=>setavailabality(e.target.value)}
          className="md:w-full w-[90%]  p-2 border rounded">
            <option className='text-black'  value="Available">Available</option>
            <option className='text-black'  value="Not Available">Not Available</option>
          </select>
        </div>
       </div>
<div>
      <label htmlFor="textarea" className="block mb-1 font-medium">
    Textarea 
  </label>
<textarea
className=' border md:w-full w-[90%] '
  placeholder="Write a short description about the room or your preferences "
  rows={4}
   name='textarea'
  cols={50}

/>
</div>
{/* //text area  */}





        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 my-4">Submit</button>
      </div>
    </form>
    </div>
  )
}

export default EditmyPage