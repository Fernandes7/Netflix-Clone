import React from 'react'
import {  useNavigate } from 'react-router-dom'
import "./Navbar.css"
function Authnavbar(props) {
    const history=useNavigate()
  return (
        <div className='navbar'>
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix"></img>
            <div className='buttondiv'>
                <label>Welcome {props.data}</label>
                <button onClick={()=>history("/")}>Logout</button>
            </div>
        </div>
  )
}

export default Authnavbar