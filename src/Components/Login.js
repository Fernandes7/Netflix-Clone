import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Signup.css"
function Login(props) {
    const [name,setname]=useState()
    const [pass,setPass]=useState()
    const history=useNavigate()
    const handle=()=>{
        axios.post("http://localhost:3001/login",{name:name,pass:pass}).then((responce)=>{
            if(responce.data!=="PI" && responce.data!=="NU")
            {
                console.log("ferno",responce)
                history("/account",{state:{data:responce.data}})
            }
            else
            alert("Invali password or username")
        })
    }
  return (
    <div className='signwrap'>
        <h3>Login</h3>
        <input type="text" placeholder='Enter you email' onChange={(e)=>setname(e.target.value)}></input>
        <input type="password" placeholder='Enter Your password' onChange={(e)=>setPass(e.target.value)}></input>
        <button onClick={handle}>Login</button>
        <div className='alter'><p>New to Netflix ?</p>
        <label onClick={()=>history('/signin')}>Signup</label></div>
    </div>
  )
}

export default Login