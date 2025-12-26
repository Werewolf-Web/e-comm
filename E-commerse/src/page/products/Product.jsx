import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Newsletter from '../../components/news/Newsletter'
import Productdata from '../../components/collect/Productdata'
import Card from '../../components/collect/Card'
import Collection from '../collection/Collection'
import Track from '../../components/collect/Track'
import Filterr from '../../components/collect/Filterr'
import { useSearchParams } from "react-router-dom";
const Product = () => {
  const [searchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("category");

  const [product, setProduct] = useState([]);
  const [brand, setBrand] = useState("");
  const [gender, setGender] = useState(
    categoryFromURL ? [categoryFromURL] : []
  );
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:3001/products?brand=${brand}&category=${gender}&colors=${color}&sizes=${size}`
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [brand, gender, color, size]);

  return (
    <>
      <Track title="Product" />

      <div className="d-flex gap-3">
        <Filterr
          brand={brand}
          gender={gender}
          color={color}
          size={size}
          setBrand={setBrand}
          setGender={setGender}
          setColor={setColor}
          setSize={setSize}
        />

        <Productdata product={product} />
      </div>
    </>
  );
};

export default Product;