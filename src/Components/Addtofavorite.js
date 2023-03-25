import React from 'react'
import "./Addtofavorite.css"
function Addtofavorite(props) {
  console.log("props data",props.data)
  let favdata=props.data.map((item,key)=>{
      if(key>0)
      return(
        <div className='favwrap'>
        <img src={`https://image.tmdb.org/t/p/w500${item.image}`} alt="fav"></img>
        <h4>{item.title}</h4>
        </div>
      )
  })
  return (
    <div className='main'>
        <h3>Your Favorites</h3>
        <div className='wrap'>{favdata}</div>
    </div>
    
  )
}

export default Addtofavorite