import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
const DeleteStore = () => {
    const [loading,setLoading] =useState(false)
    const navigate=useNavigate();
    const {id} =useParams()

    const handleDeleteStore =()=>{
        setLoading(true)
        axios.delete(`http://localhost:4444/stores/${id}`).then(()=>{
         setLoading(false)
         navigate('/')
        }).catch((error)=>{
            console.log(error)
        })
    }


  return (
     <div className="p-4">
    <h1 className="text-3xl my-4">Delete Book</h1>
    {loading? <Spinner/>:
    <div className="flex flex-col items-center border-2 border-sky rounded-xl w-[600px] p-8 mx-auto">
    <h3 className="text-2xl">Are you sure you want to delete this</h3>
    <button className="p-4 bg-red-500  text-white w-full "
    onClick={handleDeleteStore}>Yes delete it</button>

    </div>} 
      
    </div>
  )
}

export default DeleteStore
