import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Rowdata.css"
function Rowdata({title,fetch,addtofav}) {
    const [rowmovie,setrowmovies]=useState()
    const [fovoritestatus,setfavorite]=useState("Add to Favorite")
    const fav=()=>{
        if(fovoritestatus==="Add to Favorite")
        setfavorite("Added To Favorite")
        else
        setfavorite("Already added to favorite")
    }
    useEffect(()=>{
    axios.get(fetch).then((responce)=>{
       setrowmovies(responce.data.results)
    })
    },[])
  return (
    <div>
        <h2 className='rowtitle'>{title}</h2>
        <div className='rowimagewrap'>
        {rowmovie ?rowmovie.map((item,key)=>{
            if(key>=5&&key<=10)
            {
            return(
                <div className='parent'>
                <div className='rowimage'>
                <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt="images"></img>
                </div>
                <div className='imageback' onClick={()=>{console.log("lookin",item);addtofav(item);fav()}}>
                <p >{fovoritestatus}</p>
                </div>
                </div>
            )}
        }):<h1>helloo</h1>}</div> 
    </div>
  )
}

export default Rowdata