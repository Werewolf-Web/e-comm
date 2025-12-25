import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ProductDetail from "../../page/products/ProductDetail";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const finalPrice = item.price - item.discount;




  return (
    
    <>     
    <Link to={`/products/${item.id}`} style={{textDecoration:"none",color:"black"}}>
    
       <div style={{ width: "270px" ,height:"355px",backgroundColor:"rgba(193, 190, 190, 0.7)",borderRadius:"8px"}}>
      {/* IMAGE */}
      <img
        src={item.images[0]}
        className=""
        alt={item.name}
        style={{ height: "220px",width:"255px", objectFit: "cover",marginTop:"8px" ,marginLeft:"8px",backgroundColor:"white",borderRadius:"8px" }}
      />

      {/* BODY */}
      <div className="card-body d-flex flex-column p-2">

        {/* NAME */}
        <h6 className="card-title mb-1 text-truncate">
          {item.name}
        </h6>

        {/* RATING */}
        <div className="d-flex align-items-center mb-1">
          <StarBorderIcon fontSize="small" />
          <small className="ms-1">(5)</small>
        </div>

        {/* PRICE LINE */}
        <div className="d-flex align-items-center gap-1 mb-1">
        
          ${finalPrice}

          <span className="text-success small">
            -{item.discount}%
          </span>

         
        </div>

        {/* ACTION BUTTONS */}
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
    </Link>

    </>

  );
};

export default Card;
