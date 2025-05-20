 import React from 'react'
import Swal from 'sweetalert2';
 
 function UserDataAdd() {

      const handleAddProduct=e=>{
    e.preventDefault();
    const form =e.target;
    const formData = new FormData(form)
    const newFromData=Object.fromEntries(formData.entries());
    console.log(newFromData)

    // add product server 
    fetch('http://localhost:5000/uerrooms',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(newFromData)
    })
    .then(res=>res.json())
    .then(data=>{
      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
      console.log(data)
    })
  }


   return (
     <div>
            <div className="  mx-auto p-4 bg-gray-600 shadow rounded-xl m-4">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleAddProduct}>
       <div className="space-y-4 grid md:grid-cols-2 gap-4" >
        {/* title  */}
         <div>
          <label>Title :</label>
          <input type="text" name="title" placeholder=" Title " className="w-full p-2 border rounded" required />
        </div>
    {/* location  */}
         <div>
          <label>Location:</label>
          <input type="text" name="location" placeholder="Location" className="w-full p-2 border rounded" required />
        </div>
        {/* rent price  */}
         <div>
          <label>Rent Amount :</label>
          <input type="number" name="price" placeholder="Rent Amount" className="w-full p-2 border rounded" required />
        </div>



     {/* rusere email  */}
         <div>
          <label>User Email:</label>
          <input type="email" name="email"  readOnly
  disabled placeholder="Rent Amount" className="w-full p-2 border rounded" required />
        </div>



 {/* user name */}
         <div>
          <label>User Name  :</label>
          <input type="text" name="username"  readOnly
  disabled placeholder="User Name " className="w-full p-2 border rounded" required />
        </div>




{/* Room Type */}
        <div>
    <label htmlFor="roomType" className="block mb-1 font-medium">
      Room Type
    </label>
    <select
      id="roomType"
      name="roomType"
      className="w-full border rounded-md p-2 "
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
    className="w-full border rounded-md p-2"
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
          <select name="availabality" className="w-full p-2 border rounded">
            <option className='text-black'  value="Available">Available</option>
            <option className='text-black'  value="Not Available">Not Available</option>
          </select>
        </div>
       </div>

{/* //text area  */}
  <label htmlFor="textarea" className="block mb-1 font-medium">
    Textarea 
  </label>
<textarea
className='border'
  placeholder="Write a short description about the room or your preferences "
   name='textarea'
  rows={4}
  cols={50}

/>




        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 my-4">Submit</button>
      </form>
    </div>
     </div>
   )
 }
 
 export default UserDataAdd