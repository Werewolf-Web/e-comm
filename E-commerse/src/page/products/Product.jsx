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
   
      useEffect(()=>{
          fetch('http://localhost:3000/products')
          .then(res=>{
              return res.json();
          })
          .then(data =>{
              // console.log(data[0])
              setProduct(data)
          
          })
       
      },[])
  return (
    <>
 
    <div
    style={{height:"110px",marginTop:"20px"}}
    >
    <Track/>
    </div>

        <Filterr/>
    
<Productdata product={product}/>

    </>
  )
}

export default Product