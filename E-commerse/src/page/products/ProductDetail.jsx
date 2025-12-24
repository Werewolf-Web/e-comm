import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Track from "../../components/collect/Track";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://192.168.9.200:3000/products/${id}`)
      // fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;
  const finalaprice = product.price - product.discount * product.price / 100
  return (
    <div
      style={{
        backgroundColor: "#c5c5c5f5",
        width: "100%",
        paddingBottom: "2rem",
      }}
    >
      {/* TRACK */}
      <div style={{ marginTop: "10px" }}>
        <Track name={product.name} />
      </div>

      {/* MAIN CARD */}
      <div
        style={{
          backgroundColor: "#fabebeff",
          width: "70%",
          margin: "25px auto",
          borderRadius: "10px",
          display: "flex",
          gap: "30px",
          padding: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* IMAGE */}
        <div
          style={{
            height: "440px",
            width: "400px",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <img
            src={product.images?.[0]}
            alt={product.name}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* DETAILS */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#d6d6d6",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          {/* TITLE & PRICE */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <h4 style={{ fontSize: "20px", width: "100%" }}>
              {product.name}
            </h4>
            <h5 style={{ fontSize: "25px" }}>${finalaprice}</h5>
          </div>

          {/* INFO */}
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Price :</strong> ${product.price}</p>
          <p><strong>Discount:</strong> {product.discount}%</p>
          <p><strong>Stock:</strong> {product.stock} items</p>

          {/* COLORS */}
          <div style={{ marginTop: "10px" }}>
            <strong>Colors:</strong>
            <div className="d-flex gap-2 mt-1">
              {product.colors?.map((color, i) => (
                <label key={i}>
                  <input type="checkbox" /> {color}
                </label>
              ))}
            </div>
          </div>

          {/* SIZES */}
          <div style={{ marginTop: "10px" }}>
            <strong>Sizes:</strong>
            <div className="d-flex gap-2 mt-1">
              {product.sizes?.map((size, i) => (
                <label key={i}>
                  <input type="checkbox" /> {size}
                </label>
              ))}
            </div>
          </div>
              <div style={{marginTop:"20px"}}>
        <button className='btn btn-primary' style={{width:"250px"}}>Add to Cart</button>
        <button className='btn btn-success ms-2' style={{width:"250px"}}>Buy Now</button>
      </div>
        </div>
  
      </div>
    </div>
  );
};

export default ProductDetail;
