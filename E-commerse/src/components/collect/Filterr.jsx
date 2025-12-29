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
  setPro_cate,
  Pro_cate,
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
  const uniqueProcate = [
    ...new Set(product.flatMap((p) => p.pro_category || [])),
  ];
  console.log(color)
  function Clearall() {
    setBrand("");
    setGender([]);
    setColor([]);
    setSize([]);
    setPro_cate([]);
  }

  return (
    <div
      style={{
        marginLeft: "80px",
        marginTop: "30px",
        height: "auto",
        width: "230px",
        padding: "16px",
        background: "#d1d1d1",
        borderRadius: "10px",
        marginBottom:"20px",
      }}
    >
      {/* BRAND */}
      <h4>Brand</h4>
      {uniqueBrands.map((b, i) => (
        <label key={i} style={{ display: "block" }}>
          <input
            type="checkbox"
            name="brand"
            value={b}
            checked={brand.includes(b)}
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

      {/* PRODUCT CATEGORY */}
      <h4>Product Category</h4>
      {uniqueProcate.map((c, i) => (
        <label key={i} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={Pro_cate.includes(c)}
            onChange={(e) => {
              if (e.target.checked) {
                setPro_cate([...Pro_cate, c]);
              } else {
                setPro_cate(Pro_cate.filter((x) => x !== c));
              }
            }}
          />{" "}
          {c}
        </label>
      ))}
      <hr />
      {/* COLORS */}
     <h4>Colors</h4>
<div style={{
  columnCount: 2, /* Creates 2 columns */
  columnGap: '10px'
}}>
  {uniqueColors.map((c, i) => (
    <label key={i} style={{ 
      display: 'block',
      breakInside: 'avoid', /* Prevent items from breaking across columns */
      marginBottom: '4px'
    }}>
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
      /> {" "+ c}
    </label>
  ))}
</div>
      <hr />
      {/* SIZES */}
      <h4>Sizes</h4>
<div style={{
  columnCount: 2, /* Creates 2 columns */
  columnGap: '10px'
}}>
  {uniqueSizes.map((c, i) => (
    <label key={i} style={{ 
      display: 'block',
      breakInside: 'avoid', 
      marginBottom: '4px'
    }}>
      <input

        type="checkbox"
        checked={size.includes(c)}
        onChange={(e) => {
          if (e.target.checked) {
            setColor([...size, c]);
          } else {
            setColor(size.filter((x) => x !== c));
          }
        }}
      /> {" "+ c}
    </label>
  ))}
</div>

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
