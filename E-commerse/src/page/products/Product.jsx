import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Newsletter from '../../components/news/Newsletter'
import Productdata from '../../components/collect/Productdata'
import Card from '../../components/collect/Card'
import Collection from '../collection/Collection'
import Track from '../../components/collect/Track'
import Filterr from '../../components/collect/Filterr'

const Product = () => {
    
  const [product, setProduct] = useState([])
   
const [brand, setBrand] = useState('')
const [gender, setGender] = useState([])
const [color, setColor] = useState([])
const [size, setSize] = useState([])
      useEffect(()=>{
          // fetch('http://192.168.9.200:3000/products?brand='+ brand +'&category=' + gender +'&colors=' + color +'&sizes=' + size)
              fetch('http://localhost:3001/products?brand='+ brand +'&category=' + gender +'&colors=' + color +'&sizes=' + size)
          .then(res=>{
              return res.json();
          })
          .then(data =>{
              // console.log(data[0])
              setProduct(data)
          
          })
       
      },[ brand , gender , color , size])
    
  return (
    <>
 
    <div

    >
    <Track title="Product"/>
    </div>
<div
  className="d-flex"
  style={{
    alignItems: "flex-start", // keeps filter from stretching
    gap: "20px",
  }}
>
  <Filterr brand={brand} gender={gender} color={color} size={size} setBrand={setBrand} setGender={setGender} setColor={setColor} setSize={setSize}/>

  <div style={{ flex: 1 }}>
    <Productdata product={product} />
  </div>
</div>

     
    </>
  )
}

export default Product