import React, { useState } from 'react'
import Addtofavorite from './Addtofavorite'
import "./Homedata.css"
import Rowdata from './Rowdata'
function Homedata(props) {
    const movie=props.movies[Math.floor(Math.random() * props.length)]
    const [addtofavdata,setaddtofavdata]=useState([{}])
    const addtofav=(data)=>{
    setaddtofavdata([...addtofavdata,{image:data.backdrop_path,title:data.title}])
    console.log(addtofavdata)
    }
  return (
    <div>
    <div className='datawrap'>
        <div className='gradient'></div>
        <img src={"https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg"} alt="images"></img>
        <div className='contents'>
            <h3>{movie.title}</h3>
            <button className='play'>PlayNow</button>
            <button className='watch'>Watchlater</button>
            <p>Released Date:{movie.release_date}</p>
            <p>{movie.overview}</p>
        </div>
    </div>
    <Rowdata title={"Top In Place"} fetch={"https://api.themoviedb.org/3/movie/popular?api_key=75a8869c6b1150c34778fef169997cb1&language=en&page=1"} addtofav={addtofav} />
    <Rowdata title={"Popular"} fetch={"https://api.themoviedb.org/3/movie/top_rated?api_key=75a8869c6b1150c34778fef169997cb1&language=en&page=1"} addtofav={addtofav} />
    <Rowdata title={"Latest"} fetch={"https://api.themoviedb.org/3/movie/upcoming?api_key=75a8869c6b1150c34778fef169997cb1&language=en&page=1"} addtofav={addtofav} />
    {addtofavdata.length >1 ? <Addtofavorite data={addtofavdata} />:<h4 className='loadings'>Nothing is Added to Favorite</h4>}
    </div>
  )
}

export default Homedata