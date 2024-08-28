import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CartContext from '../CartContext'

function Details() {
 
  
    let {state,dispatch}=useContext(CartContext)
    let[single,SetSingle]=useState([])
    let {id}=useParams()
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`).then(a=>a.json()).then(b=>SetSingle(b))
    },[id])
  return (
    <>
      <div className='container'>
            <img src={single.thumbnail} alt="" />
            <p className='fw-bold'>{single.title}</p>
            <p className='fw-bold'>${single.price}</p>
            <p className='fw-bold'>{single.description}</p>
            <button className='btn btn-warning' onClick={()=>dispatch({type:'addtocart',payload:single})}>Add to cart</button>


      </div>
    </>
  )
}

export default Details
