import React, { useEffect, useState } from "react";

const Filterr = ({
  setBrand,
  brand,
  gender,
  setGender,
  color,
  setColor,
  size,
  setSize,
}) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const uniqueBrands = [...new Set(product.map((p) => p.brand))];
  const uniqueCategories = [...new Set(product.map((p) => p.category))];
  const uniqueColors = [...new Set(product.flatMap((p) => p.colors || []))];
  const uniqueSizes = [...new Set(product.flatMap((p) => p.sizes || []))];

  function Clearall() {
    setBrand("");
    setGender([]);
    setColor([]);
    setSize([]);
  }

  return (
    <div
      style={{
        marginLeft:"50px",
        marginTop:"30px",
        width: "230px",
        padding: "16px",
        background: "#d1d1d1",
        borderRadius: "10px",
      }}
    >
      {/* BRAND */}
      <h4>Brand</h4>
      {uniqueBrands.map((b, i) => (
        <label key={i} style={{ display: "block" }}>
          <input
            type="radio"
            name="brand"
            value={b}
            checked={brand === b}
            onChange={(e) => setBrand(e.target.value)}
          />{" "}
          {b}
        </label>
      ))}

      <hr />

      {/* GENDER */}
      <h4>Gender</h4>
      {uniqueCategories.map((cat, i) => (
        <label key={i} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={gender.includes(cat)}
            onChange={(e) => {
              if (e.target.checked) {
                setGender([...gender, cat]);
              } else {
                setGender(gender.filter((g) => g !== cat));
              }
            }}
          />{" "}
          {cat}
        </label>
      ))}

      <hr />

      {/* COLORS */}
      <h4>Colors</h4>
      {uniqueColors.map((c, i) => (
        <label key={i} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={color.includes(c)}
            onChange={(e) => {
              if (e.target.checked) {
                setColor([...color, c]);
              } else {
                setColor(color.filter((x) => x !== c));
              }
            }}
          />{" "}
          {c}
        </label>
      ))}

      <hr />

      {/* SIZES */}
      <h4>Sizes</h4>
      {uniqueSizes.map((s, i) => (
        <label key={i} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={size.includes(s)}
            onChange={(e) => {
              if (e.target.checked) {
                setSize([...size, s]);
              } else {
                setSize(size.filter((x) => x !== s));
              }
            }}
          />{" "}
          {s}
        </label>
      ))}

      <button
        onClick={Clearall}
        style={{
          marginTop: "15px",
          width: "100%",
          padding: "6px",
          background: "#fff",
          borderRadius: "5px",
        }}
      >
        Clear All
      </button>
    </div>
  );
};

export default Filterr;
