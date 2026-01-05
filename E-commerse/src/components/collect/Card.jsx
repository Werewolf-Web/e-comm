import React, { useEffect, useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const finalPrice = item.price - item.discount;
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);

  // 🔹 Check wishlist on load
  useEffect(() => {
    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setIsWishlisted(wishlist.some((p) => p.id === item.id));
  }, [item.id]);

  // 🔹 Add / Remove Wishlist
  const updatedWishlists = () => {
  const wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

  if (isWishlisted) {
    // REMOVE from wishlist
    const updated = wishlist.filter((p) => p.id !== item.id);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    setIsWishlisted(false);
  } else {
    // ADD to wishlist
    const payload = {
      id: item.id,
      name: item.name,
      price: item.price,
      discount: item.discount,
      images: item.images,
      quantity: 1,
    };

    localStorage.setItem(
      "wishlist",
      JSON.stringify([...wishlist, payload])
    );
    setIsWishlisted(true);
  }
};

const Gonavigate =()=>{
navigate(`/products/${item.id}`)
}

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "clamp(180px, 85vw, 270px)",
        minHeight: "clamp(300px, 80vw, 355px)",
        backgroundColor: "rgba(193, 190, 190, 0.7)",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="card-body d-flex flex-column p-2" style={{ flex: 1 }}
    
      >
    <div onClick={Gonavigate}>
          <img
            src={item.images[0]}
            alt={item.name}
            style={{
              height: "auto",
              width: "100%",
              maxHeight: "clamp(140px, 50vw, 220px)",
              aspectRatio: "1/1",
              objectFit: "cover",
              backgroundColor: "white",
              borderRadius: "8px",
              marginBottom: "clamp(6px, 1vw, 8px)",
            }}
          />

          <h6 className="card-title mb-1 text-truncate" style={{ fontSize: "clamp(0.875rem, 1vw, 1rem)" }}>
            {item.name}
          </h6>

          <div className="d-flex align-items-center mb-1">
            <StarBorderIcon fontSize="small" />
            <small className="ms-1">(5)</small>
          </div>

          <div className="d-flex align-items-center gap-1 mb-1" style={{ fontSize: "clamp(0.75rem, 1vw, 0.875rem)" }}>
            ${finalPrice}
            <span className="text-success small">
              -{item.discount}%
            </span>
          </div>
    </div>

        {/* ACTION BUTTONS */}
{/* <div className="mt-auto d-flex justify-content-between gap-2">

  <button
    onClick={Gonavigate}
    className="btn btn-outline-primary btn-sm flex-grow-1"
  >
    <VisibilityIcon fontSize="small" />
  </button>


  <button
    onClick={updatedWishlists}
    className="btn btn-outline-danger btn-sm flex-grow-1"
    style={{ backgroundColor: "transparent" }}
  >
    <FavoriteBorderIcon
      style={{
        fontSize: "20px",
        color: isWishlisted ? "#fff" : "#dc3545",
        backgroundColor: isWishlisted ? "#dc3545" : "transparent",
        borderRadius: "10%",

        transition: "0.3s ease",
      }}
    />
  </button>
</div> */}
        <div className="mt-auto d-flex justify-content-between gap-2">
          <div
          onClick={Gonavigate}
            className="btn btn-outline-primary btn-sm flex-grow-1"
          >
            <VisibilityIcon fontSize="small" />
          </div>

          <button
            className={`btn btn-sm flex-grow-1 ${
              isWishlisted ? "btn-danger" : "btn-outline-danger"
            }`}
          
            onClick={updatedWishlists}
          >
            <FavoriteBorderIcon style={{ fontSize: "clamp(16px, 2vw, 20px)" }} />
          </button>
        </div>
            
      </div>
    </div>
  );
};

export default Card;
