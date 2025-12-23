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
   
const [Brand, setBrand] = useState('')
const [Gender, setGender] = useState('')
const [Color, setColor] = useState('')
const [Size, setSize] = useState('')
      useEffect(()=>{
          fetch('http://192.168.9.200:3000/products?brand='+ Brand +'&category=' + Gender +'&colors=' + Color +'&sizes=' + Size+'')
          .then(res=>{
              return res.json();
          })
          .then(data =>{
              // console.log(data[0])
              setProduct(data)
          
          })
       
      },[ Brand , Gender , Color , Size])
  return (
    <>
 
    <div
    style={{height:"110px",marginTop:"20px"}}
    >
    <Track/>
    </div>
<div
  className="d-flex"
  style={{
    alignItems: "flex-start", // keeps filter from stretching
    gap: "20px",
  }}
>
  <Filterr setBrand={setBrand} setGender={setGender} setColor={setColor} setSize={setSize}/>

  <div style={{ flex: 1 }}>
    <Productdata product={product} />
  </div>
</div>

     
    </>
  )
}

export default Product