import React from 'react'
import { Link } from 'react-router-dom'
import Login from './login'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Singup() { 
const navigate=useNavigate()
 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

const onSubmit = async (data) => {
  try {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    };

    const res = await axios.post("http://localhost:4007/user/signup", userInfo);

    console.log(res.data);

    if (res.data) {
      alert("Signup successfully");
    }
localStorage.setItem("users",JSON.stringify(res.data.user))
navigate('/Caurse')

  } catch (err) {
if(err.response){
    console.log(err);
    alert("Error: " + err.response.data.message);
}
  }
};

  return (
   <>
<div>
<div className="flex h-screen  items-center justify-center   ">
  <div className="border-[3px ] shadow-md rounded-md">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
<Link to='/'>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-95 ">✕</button>
</Link>
   
    <h3 className="font-bold text-lg mb-3" >Signup</h3>
{/* name */}
 <span className='p-2 mt-3'>fullName</span><br />
<input type="text" placeholder='Enter your full Name' className='mt-4 px-2 py-2 border rounded-md outline-none w-75'  {...register("fullname", { required: true })}/><br />
 {errors.fullname && <span className='text-red-500'>This field is required</span>}
<br />
{/* email */}
    <span className='p-2 mt-3'>Email</span><br />
<input type="email" placeholder='Enter your email' className='mt-4 px-2 py-2 border rounded-md outline-none w-75'  {...register("email", { required: true })}/><br />
 {errors.email && <span className='text-red-500'>This field is required</span>} <br />
{/* password */}
 <span className='p-2 mt-3'>Password</span><br />
<input type="password" placeholder='Enter your password' className='mt-4 px-2 py-2 border rounded-md outline-none w-75'  {...register("password", { required: true })}/> <br />
 {errors.password && <span className='text-red-500'>This field is required</span>} <br />

<div className='flex justify-around'>
<button className='btn bg-pink-500 px-4 py-2 rounded-md text-white text-xl hover:bg-pink-700'>Signup</button>


<p>have account <button className='text-blue-500 underline' onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button>

</p>{ ""}
<Login/>
</div>
 </form>

  </div>

</div>

</div>
</>
  )
}

export default Singup
