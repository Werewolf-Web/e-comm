import React, { useEffect, useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const finalPrice = item.price - item.discount;

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

    const isAlreadyAdded = wishlist.some(
      (product) => product.id === item.id
    );

    if (isAlreadyAdded) {
      alert("Already added to wishlist");
      return;
    }

    const payload = {
      id: item.id,
      name: item.name,
      price: item.price,
      discount: item.discount,
      images: item.images,
      quantity: item.quantity,
    };

    const updatedList = [...wishlist, payload];
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
    setIsWishlisted(true);
  };

  return (
    <div
      style={{
        width: "270px",
        height: "355px",
        backgroundColor: "rgba(193, 190, 190, 0.7)",
        borderRadius: "8px",
      }}
    >
      <div className="card-body d-flex flex-column p-2">
        <Link
          to={`/products/${item.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <img
            src={item.images[0]}
            alt={item.name}
            style={{
              height: "220px",
              width: "250px",
              objectFit: "cover",
              margin: "auto",
              backgroundColor: "white",
              borderRadius: "8px",
              marginBottom: "8px",
            }}
          />

          <h6 className="card-title mb-1 text-truncate">
            {item.name}
          </h6>

          <div className="d-flex align-items-center mb-1">
            <StarBorderIcon fontSize="small" />
            <small className="ms-1">(5)</small>
          </div>

          <div className="d-flex align-items-center gap-1 mb-1">
            ${finalPrice}
            <span className="text-success small">
              -{item.discount}%
            </span>
          </div>
        </Link>

        {/* ACTION BUTTONS */}
        <div className="mt-auto d-flex justify-content-between">
          <Link
            to={`/products/${item.id}`}
            className="btn btn-outline-primary btn-sm"
            style={{ width: "40%" }}
          >
            <VisibilityIcon fontSize="small" />
          </Link>

          <button
            className={`btn btn-sm ${
              isWishlisted ? "btn-danger" : "btn-outline-danger"
            }`}
            onClick={updatedWishlists}
            style={{ width: "40%" }}
          >
            <FavoriteBorderIcon style={{ fontSize: "20px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
