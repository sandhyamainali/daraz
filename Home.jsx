import React, { useContext, useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import CartContext from '../CartContext';
import { Link } from 'react-router-dom';
import Products from './Products';


function Home() {
  let { state, dispatch } = useContext(CartContext)
  let [product, setProduct] = useState([])
  useEffect(() => {

    fetch(`https://dummyjson.com/products`).then(a => a.json()).
      then(b => setProduct(b.products))

  })
  return (
    <>
      <div className="container py-3">
        <div className="row">


          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper">
            <SwiperSlide>
              <img className="w" src="https://img.lazcdn.com/us/domino/ad885ed9-215b-4ef0-9c2e-0955a3f238cd_NP-1976-688.jpg_2200x2200q80.jpg_.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w" src="https://img.lazcdn.com/us/domino/ce9e8cac-0b4d-497c-b52f-1ba22d6c52c6_NP-1976-688.png_2200x2200q80.png_.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide><img className="w" src="https://img.lazcdn.com/us/domino/ad097cb1-c695-4368-93d6-f86aa333d2c0_NP-1976-688.jpg_2200x2200q80.jpg_.webp" alt="" /></SwiperSlide>
            <SwiperSlide>
              <img className="w" src="https://img.lazcdn.com/us/domino/591fb54192a6e0e151c106c5838ebf9f.jpg_2200x2200q80.jpg_.webp" alt="" />
            </SwiperSlide>

          </Swiper>


        </div>
      </div>
      <Products name="beauty"/>
      <Products name="fragrances"/>
      <Products name="laptops"/>
      
      
      
      
    
    </>
    
  )
}

export default Home
