import React, { useEffect, useState } from 'react'
import Authnavbar from './Authnavbar'
import Rowdata from './Rowdata'
import Addtofavorite from './Addtofavorite'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
function Account() {
  const datas=useLocation()
  const [addtofavdata,setaddtofavdata]=useState([{}])
  useEffect(()=>{
    axios.post("http://localhost:8000/auth/displayfavorite",{id:datas.state.data.user._id}).then((responce)=>{
    if(responce.data!="Nofavorite")
    setaddtofavdata(responce.data.data)
    console.log(addtofavdata)
    })
    },[])
    const addtofav=(data)=>{
    setaddtofavdata([...addtofavdata,{image:data.backdrop_path,title:data.title}])
    console.log(addtofavdata)
    axios.post(`http://localhost:8000/auth/favorite/${datas.state.data.user._id}`,{data:addtofavdata,userid:datas.state.data.user._id},{headers:{token:datas.state.data.token}}).then((responce)=>{
    console.log(responce)
    })
    console.log("datadssss",datas)
    }
  return (
    <div>
    <Authnavbar data={datas.state.data.user.username}/>
    <Rowdata title={"Top In Place"} fetch={"https://api.themoviedb.org/3/movie/popular?api_key=75a8869c6b1150c34778fef169997cb1&language=en&page=1"} addtofav={addtofav} />
    <Rowdata title={"Popular"} fetch={"https://api.themoviedb.org/3/movie/top_rated?api_key=75a8869c6b1150c34778fef169997cb1&language=en&page=1"} addtofav={addtofav} />
    <Rowdata title={"Latest"} fetch={"https://api.themoviedb.org/3/movie/upcoming?api_key=75a8869c6b1150c34778fef169997cb1&language=en&page=1"} addtofav={addtofav} />
    {addtofavdata  ? <Addtofavorite data={addtofavdata}/>:<h4 className='loadings'>Nothing is Added to Favorite</h4>}
    </div>
  )
}

export default Account