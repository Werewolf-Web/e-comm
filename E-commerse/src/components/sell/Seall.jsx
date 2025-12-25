import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Sell from "./Sell";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Seall = () => {
  const [sell, setSell] = useState([]);

  useEffect(() => {
        // fetch('http://192.168.9.200:3000/products')
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => setSell(data));
  }, []);

  return (
    <>
       <div
                    style={{ height: "auto", width: "800px", alignItems: "center", textAlign: "center", paddingTop: "20px" ,justifyContent:"center",marginRight:"auto",marginLeft:"auto"}}
                >
                    <h1 style={{ fontWeight: "700" }}>Top Seller</h1>
                    <p style={{ fontSize: "13px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
                </div>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={4}
        spaceBetween={5}
        navigation
        // pagination={{ clickable: true }}
        style={{
          
          borderRadius: "10px",
          padding: "20px",
          paddingBottom:"20px",
          height: "auto",
          width: "1180px",
          marginBottom:"20px"
        }}
      >
        {sell.map((item, index) => (
          <SwiperSlide key={index} style={{marginBottom:"10px"}}>
            <Sell item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Seall;
