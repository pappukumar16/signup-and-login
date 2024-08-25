import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom"
import {toast} from "react-hot-toast"
import axios from "axios"


function LoginForm({}) {
    const [formData,setformData] = useState( {email:"",password:""})
    const [showPass,setshowPass] = useState(false);
    const navigate = useNavigate();



    function changeHandler(event){
        setformData( (prev)=>(
        {
            ...prev,
            [event.target.name] : event.target.value
        }
    ))}

   
    
 const submitHandler = async(e)=>{
    e.preventDefault();
    
    try {
        const response = await axios.post('http://localhost:4000/api/auth/login', formData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        // console.log(response.data);
        toast.success("User Logged in successfully")
        navigate("/dashboard")
    } catch (error) {
        toast.error("Email and password incorrect !")
        // console.error('Error during login:', error);
    }
    
    
 }

    

    


  return (
    <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm w-full'>

<h1 class="text-2xl font-bold mb-6 text-gray-800">Login</h1>

   <form onSubmit={submitHandler}>
       
       <label className='block text-sm font-medium text-gray-700'>
        <p>Enter Email<sup className='mt-1 text-red-500 font-bold'>*</sup> </p>
        <input type='email'
          required className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          onChange={changeHandler}
          value={formData.email}
          name="email" placeholder='Enter email id'
        />
       </label>

       <label>
        <p className='block text-sm font-medium text-gray-700'> Enter Password<sup className='mt-1 text-red-500 font-bold'>*</sup> </p>
        <input type= {showPass ? ("text") : ("password")}
        required className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
        onChange={changeHandler}
        value={formData.password}
        name="password" placeholder='Enter password'
        />
        <span onClick={ ()=> setshowPass( (prev)=> !prev)}>
            {
                showPass ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
            }
        </span>
        <Link to='/'>
        <p>forgot  password</p>
        </Link>
       </label>

       <button className='w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
       >Sign In</button>
   </form>

   </div>
  )
}

export default LoginForm