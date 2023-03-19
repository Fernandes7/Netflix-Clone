import React from 'react'
import "./Homedata.css"
function Homedata(props) {
    const movie=props.movies[Math.floor(Math.random() * props.length)]
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
    </div>
  )
}

export default Homedata