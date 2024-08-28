import React, { useContext, useEffect, useReducer, useState } from 'react'
import Home from '../Pages/Home'
import { Link, Route, Routes } from 'react-router-dom'
import LOGO from "../assets/logo.png"
import { CiHeart } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

import { IoSearch } from "react-icons/io5";
import Category from '../Pages/Category';
import Cart from '../Pages/Cart';
import CartContext from '../CartContext';
import Details from '../Pages/Details';
import SignIn from '../Pages/SignIn';

function Header() {
  let {state,dispatch}=useContext(CartContext)
  let [data, setData] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(b => setData(b));
  })
  return (
    <>
      <div className="container ">
        <div className="row bg-body-secondary">
          <div className="col-lg-3">
            <Link to="/"><img className="w-100" src={LOGO} alt="" /></Link>
          </div>

          <div className="col-lg-4 offset-5 py-3">
            <div className=' '>
              <ul className='d-flex gap-3'>
                <li ><CiHeart /> Wishlist </li>
                <Link className="link-dark text-decoration-none"to="/signin"><li><MdAccountCircle /> Account </li></Link>
                
                <li>
                <Link className='link-dark text-decoration-none' to="/cart"><IoCartOutline /> cart
                  <span className="position-absolute top-1  translate-middle badge rounded-pill bg-danger">
                    {state.cartlist.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                  </Link>
                </li>

              </ul>
            </div>
          </div>

        </div>
      </div >
      <nav className="navbar navbar-expand-lg  bg container subhead">

        <Link className="navbar-brand px-3  text-white" to="/">Home</Link>

        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-white " to="/category" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                Category
              </Link>
              <ul className="dropdown-menu dropdown px-3 scroll ">
                {data.map((a) => (
                  
                 <li className='list-group-item'> <Link className="text-decoration-none text-dark" to={`/cat/${a.slug}`}>{a.name}</Link></li>
                ))}
              </ul>
            </li>

          </ul>
          <form className="d-flex" role="search">
            <input className="form-control ms rounded-start" type="search" placeholder="Search Products......." />
            <button className="btn border-white text-white" type="submit" ><IoSearch /></button>
          </form>


        </div>

      </nav>



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:cid/" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id/" element={<Details/>} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </>
  )
}

export default Header
