import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Newsletter from '../../components/news/Newsletter'
import Productdata from '../../components/collect/Productdata'
import Card from '../../components/collect/Card'
import Collection from '../collection/Collection'

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
 
    <div>
    
    </div>
<Productdata product={product}/>
    <Newsletter/>
    </>
  )
}

export default Product