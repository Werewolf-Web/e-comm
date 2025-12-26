import React, { useEffect, useState } from "react";
import Track from "../../components/collect/Track";
import Buttonback from "../../components/button/Buttonback";
import Card from "../../components/collect/Card";
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];
 
       setWishlist(storedWishlist);

    // ✅ Print all IDs in console
    storedWishlist.forEach((item) => {
      console.log("Wishlist Product ID:", item.id);
    });
  }, []);

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <Track title="Wishlist" name="Wishlist" />
        <Buttonback url="/products" />
      </div>

      <div className="container" style={{marginBottom:"20px"}}>
        <div className="row g-4">
          {wishlist.length === 0 ? (
<div
  style={{
    backgroundColor: "#ccc",
    width: "800px",
    margin: "auto",
    marginBottom: "20px",
    borderRadius: "10px",
    padding: "40px 0",
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      flexDirection: "column",
    }}
  >
    <HeartBrokenIcon
      style={{
        fontSize: "250px",
        opacity: 0.15,
      }}
    />

    <h1
      style={{
        fontSize: "40px",
        fontWeight: "bold",
        opacity: 0.2,
        marginBottom: "20px",
      }}
    >
      Empty Wishlist
    </h1>

    <a href="/products">
      <button
        className="btn btn-primary"
        style={{
          height: "40px",
          width: "140px",
          borderRadius: "7px",
          fontWeight: "600",
        }}
      >
        Shop Now
      </button>
    </a>
  </div>
</div>

           
          ) : (
            wishlist.map((item) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                key={item.id}
              >
                {/* ✅ PASS FULL ITEM */}
                <Card item={item} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
