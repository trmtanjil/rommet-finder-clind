import React, { use } from 'react'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link,   } from 'react-router'
import Swal from 'sweetalert2'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router'
import { updateProfile } from 'firebase/auth'
import { auth } from '../firebase/firebase.init'


function Register() {
  const [showPass, setShowpass] = useState(false)
  const {creatuser,googleregister} =use(AuthContext)
  const navigate = useNavigate();

      const handleRegister =e=>{
        e.preventDefault()
           e.preventDefault();
    
    const name= e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passUper =/^(?=.*[A-Z]).+$/.test(password);
    const passlower =/^(?=.*[a-z]).+$/.test(password);

    console.log(name, photo, email)
  
    if (password.length<6) {
      alert("Length must be at least 6 characters");
      return;
    } 
    if (!passUper) {
      alert("Must have an Uppercase letter in the password");
      return;
    }  
    if (!passlower) {
       alert("Must have a Lowercase letter in the password");
      return;
    }

    //creat register 
    creatuser(email,password)
     .then((result)=>{
      console.log('user register succesfully', result)
       Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
  // update profile 

    const profile={
        displayName:name,
        photoURL:photo,
      }
      updateProfile(auth.currentUser,profile)


navigate('/')
     })
     .catch(error=>{
      alert('register somthir error', error)
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
 
});
     })
}
//google register 
const handlegogle=()=>{
  googleregister()
  .then(result=>{
    console.log('google register succes',result);
    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});

  })
  .catch(error=>{
        console.log('somthing erro',error)

  }) 

      }


  return (
    <div>
          <div className="card  w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-12 bg-gray-300">
    <div className="card-body">
    <h1 className="text-5xl font-bold">Register now!</h1>
    
      <form onSubmit={handleRegister}  className="fieldset">
        {/* name  */}
      <label className="label">Name</label>
      <input type="text" className="input" placeholder="Name" name='name'/>
      {/* photoURL */}
      <label className="label">Photo Url</label>
      <input type="text" className="input" placeholder="Photo Url " name='photo'/>
        {/* email  */}
        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" name='email'/>
        {/* password  */}
        <label className="label">Password</label>
       <div className='relative'>
       <input type={showPass ? 'text':'password'} 
       className="input" placeholder="Password" name='password' />
       </div>
         <button type='submit' className="btn btn-neutral mt-4">SignIn</button>
      </form>
        <button
         onClick={()=>setShowpass(!showPass)}
         className='absolute right-12 bottom-[180px]  mt-[15px]'>
                    {
                      showPass ? <FaEyeSlash /> : <FaEye />
                    }
          </button>
    <p> Already  Please ? <Link className='text-blue-400 font-semibold' to='/login'>LogIn</Link></p>
    </div>
    <button onClick={handlegogle}  className="btn bg-white text-black border-[#e5e5e5] m-1">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

  </div>
    </div>
  )
}

export default Register