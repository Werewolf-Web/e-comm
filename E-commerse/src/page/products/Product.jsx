import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Newsletter from '../../components/news/Newsletter'
import Productdata from '../../components/collect/Productdata'
import Card from '../../components/collect/Card'
import Collection from '../collection/Collection'
import Track from '../../components/collect/Track'
import Filterr from '../../components/collect/Filterr'
import { useSearchParams } from "react-router-dom";
import noproduct from "../../assets/noProduct.jpg"
const Product = () => {
  const [searchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("category");
  const procategoryFromurl = searchParams.get("pro_category")
  const BrandUrl = searchParams.get("brand");

  const [product, setProduct] = useState([]);
  const [brand, setBrand] = useState(
    BrandUrl ? [BrandUrl] : []
  );
  const [gender, setGender] = useState(
    categoryFromURL ? [categoryFromURL] : []
  );
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [Pro_cate, setPro_cate] = useState(
    procategoryFromurl ? [procategoryFromurl] : []
  )

  useEffect(() => {
    fetch(
      `http://localhost:3001/products?brand=${brand}&category=${gender}&colors=${color}&sizes=${size}&pro_category=${Pro_cate}`
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [brand, gender, color, size,Pro_cate]);
  //  for empty products
if (product.length === 0) {
  return (
    <>
      <Track title="Product" />
      
      <div className="d-flex gap-3">
        <Filterr
          brand={brand}
          gender={gender}
          color={color}
          size={size}
          Pro_cate={Pro_cate} 
          setBrand={setBrand}
          setGender={setGender}
          setColor={setColor}
          setSize={setSize}
          setPro_cate={setPro_cate}
        />
        
        <div style={{
          backgroundColor: "#ffffffff",
          height: "450px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{
            backgroundColor: "white",
            height: "50vh",
            width: "50%",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img 
              src={noproduct} 
              alt="No products found" 
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain"
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

  return (
    <>
      <Track title="Product"  nameLink="/products" LName="Products" />

      <div className="d-flex gap-3">
        <Filterr
          brand={brand}
          gender={gender}
          color={color}
          size={size}
          Pro_cate={Pro_cate} 
          setBrand={setBrand}
          setGender={setGender}
          setColor={setColor}
          setSize={setSize}
          setPro_cate={setPro_cate}
        />

        <Productdata product={product} />
      </div>
    </>
  );
};

export default Product;