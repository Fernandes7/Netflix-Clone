import React, { useState } from 'react'
import Authnavbar from './Authnavbar'
import Rowdata from './Rowdata'
import Addtofavorite from './Addtofavorite'
function Account() {
  const [addtofavdata,setaddtofavdata]=useState([{}])
    const addtofav=(data)=>{
    setaddtofavdata([...addtofavdata,{image:data.backdrop_path,title:data.title}])
    console.log(addtofavdata)
    }
  return (
    <div>
    <Authnavbar />
    <Rowdata title={"Top In Place"} fetch={"https://api.themoviedb.org/3/movie/popular?api_key=75a8869c6b1150c34778fef169997cb1&language=en&page=1"} addtofav={addtofav} />
    <Rowdata title={"Popular"} fetch={"https://api.themoviedb.org/3/movie/top_rated?api_key=75a8869c6b1150c34778fef169997cb1&language=en&page=1"} addtofav={addtofav} />
    <Rowdata title={"Latest"} fetch={"https://api.themoviedb.org/3/movie/upcoming?api_key=75a8869c6b1150c34778fef169997cb1&language=en&page=1"} addtofav={addtofav} />
    {addtofavdata.length >1 ? <Addtofavorite data={addtofavdata} />:<h4 className='loadings'>Nothing is Added to Favorite</h4>}
    </div>
  )
}

export default Account