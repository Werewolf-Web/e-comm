import React, { useEffect, useState } from "react";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import TransgenderIcon from "@mui/icons-material/Transgender";
const Filterr = ({
  
  setBrand,
  
  setGender,
  
  setColor,
  color,
  setSize,
}) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://192.168.9.200:3000/products")
        // fetch("http://localhost:3000/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data[0])
        setProduct(data);
      });
  }, []);

  const uniqueBrands = [...new Set(product.map((p) => p.brand))];
  const uniqueCategories = [...new Set(product.map((p) => p.category))];
  const uniqueColors = [...new Set(product.flatMap((item) => item.colors))];

  const uniqueSizes = [...new Set(product.flatMap((item) => item.sizes))];

  function Clearall() {
    setBrand("");
    setGender([]);
    setSize([]);
    setColor([]);
  }
  return (
    <div
      className=""
      style={{
        marginLeft: "70px",
        marginTop: "25px",
        marginBottom: "30px",
        borderRadius: "10px",
        width: "400px",
        padding: "16px",
        backgroundColor: "rgba(209, 209, 209, 0.9)",
      }}
    >
      {/* Brand */}
      <div style={{ marginBottom: "16px" }}>
        <div className="d-flex">
          <h4>Brand</h4>
          <button
            style={{
              height: "25px",
              marginLeft: "33px",
              marginBottom: "19px",
              backgroundColor: "#fff",
              borderRadius: "5px",
            }}
            onClick={Clearall}
          >
            Clear All
          </button>
        </div>

        {uniqueBrands.map((brand, index) => (
          <label key={index} style={{ display: "flex", gap: "8px" }}>
            <input
              type="radio"
              name="brand" // same name = one selection
              value={brand} // value is brand
  
              onChange={(e) => setBrand(e.target.value)}
            />
            {brand}
          </label>
        ))}
      </div>

      {/* Category */}
      <div style={{ marginBottom: "16px" }}>
        <h4>Gender</h4>
        {uniqueCategories.map((category, index) => (
          <label key={index} style={{ display: "flex", gap: "8px" }}>
            <input
              type="checkbox"
              value={category}
              onChange={(e) => setGender(e.target.value)}
            />
            {category}
          </label>
        ))}
      </div>

      {/* Colors */}
      <div style={{ marginBottom: "16px" }}>
        <h4>Colors</h4>
  {uniqueColors.map((colorItem, index) => (
  <label key={index} style={{ display: "flex", gap: "8px" }}>
    <input
      type="checkbox"
      checked={color.includes(colorItem)}
      onChange={(e) => {
        if (e.target.checked) {
          setColor([...color, colorItem]);
        } else {
          setColor(color.filter((c) => c !== colorItem));
        }
      }}
    />
    {colorItem}
  </label>
))}

      </div>

      {/* Sizes */}
      <div>
        <h4>Sizes</h4>
        {uniqueSizes.map((size, index) => (
          <label key={index} style={{ display: "flex", gap: "8px" }}>
            <input
              type="checkbox"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
            {size}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filterr;
