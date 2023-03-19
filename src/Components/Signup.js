import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Signup.css"
function Signup(props) {
    const [Name,setName]=useState()
    const [Email,setEmail]=useState()
    const [Password,setPass]=useState()
    const history=useNavigate()
    const handle=()=>{
        axios.post("http://localhost:8000/auth/signup",{name:Name,email:Email,password:Password}).then((responce)=>{
            if(responce.data==="success")
            {
            alert("Please Login Now")
            history("/login")
            console.log("name",responce)
            }
            else
            alert("User already Exist")
        })
    }
  return (
    <div className='signwrap'>
        <h3>Signup</h3>
        <input type="text" placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)}></input>
        <input type="text" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}></input>
        <input type="password" placeholder='Enter Your password' onChange={(e)=>setPass(e.target.value)}></input>
        <button onClick={handle}>Signup</button>
        <div className='alter'><p>Already have account ?</p>
        <label onClick={()=>history("/login")}>Login</label></div>
    </div>
  )
}

export default Signup