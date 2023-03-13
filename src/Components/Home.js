import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import axios from 'axios'
import Navebar from "../Components/Navebar"
import "./Home.css"
import Homedata from './Homedata'
import Signup from './Signup'
import Login from './Login'
import Authavbar from './Authnavbar'
function Home() {
    const [authpopup,setauthpopup]=useState(false)
    const [navbar,setnavbar]=useState(true)
    const [authloginpopup,setauthloginpopup]=useState(false)
    const [movies,setMovies]=useState()
    const popup=(type)=>{
      if(type==="signin")
      {
      setauthpopup(true)
      setauthloginpopup(false)
      }
      else
      {
        setauthloginpopup(true)
        setauthpopup(false)  
      }
    }
    const close=()=>{
    setauthloginpopup(false)
    setauthpopup(false)
    setnavbar(false)
    }
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=75a8869c6b1150c34778fef169997cb1&language=en-US&page=1").then((responce)=>{
            console.log(responce.data.results)
            setMovies(responce.data.results)
        })
    },[])
  return (
    <div>
    {movies ? <Homedata length={movies.length} movies={movies}/>:<h2>loading....</h2>}
    <Router>
      <Routes>
        <Route path="/" element={<Navebar popup={popup} />} />
        <Route path="/signin" element={<Signup popup={popup} />} />
        <Route path="/login" element={<Login popup={popup} />} />
        <Route path="/account" element={<Authavbar />} />
      </Routes>
    </Router>
    </div>
  )
}

export default Home