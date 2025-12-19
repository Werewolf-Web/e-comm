import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';



const Sell = ({item}) => {
    const finalPrice = item.price - item.discount;
  return (
    <>
    
       <div
      style={{
        width: "250px",
        height: "360px",
        backgroundColor: "rgba(193,190,190,0.7)",
        borderRadius: "8px"
      }}
    >
      <img
        src={item.images[0]}
        alt={item.name}
        style={{
          height: "220px",
          width: "235px",
          objectFit: "cover",
          margin: "8px",
          backgroundColor: "white",
          borderRadius: "8px"
        }}
      />

      <div className="d-flex flex-column p-2">
        <h6 className="text-truncate">{item.name}</h6>

        <div className="d-flex align-items-center mb-1">
          <StarBorderIcon fontSize="small" />
          <small className="ms-1">(5)</small>
        </div>

        <div className="d-flex gap-2 mb-1">
          <strong>${finalPrice}</strong>
          <span className="text-success small">
            -{item.discount}%
          </span>
        </div>

        <div className="mt-auto d-flex justify-content-between">
          <button className="btn btn-outline-primary btn-sm">
            <VisibilityIcon fontSize="small" />
          </button>

          <button className="btn btn-outline-danger btn-sm">
            <FavoriteBorderIcon fontSize="small" />
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sell