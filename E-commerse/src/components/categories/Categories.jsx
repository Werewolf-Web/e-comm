import React from 'react'
import cort from '../../assets/cort.webp'
import earring from '../../assets/earring.webp'
import bags from '../../assets/bag.webp'
import shoes1 from '../../assets/shoes1.webp'
import pent from '../../assets/feshion.jpeg'   
import perfume from '../../assets/perfume.webp'
import './Categories.css'
import { Link } from "react-router-dom";
const Categories = () => {  
  return (
    <>
    <div 
    style={{height:"330px"}}
    >
    <div>
        <h2 style={{textAlign:"center", marginTop:"40px" ,fontSize:"50px",fontWeight:"500"}}>Categories</h2>
        <p style={{textAlign:"center"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, dicta reiciendis. Voluptatem quod dicta nesciunt!</p>
    </div>
        <div 
        style={{height:"200px"}}>
          <div className="categories-row">

<Link                 to="/products?category=male" style={{textDecoration:"none", color:"black"}}>
  <div className="category-item">
    <img src={cort} alt="" />
    <h3>Men Clothes</h3>
  </div></Link>

<Link         to="/products?pro_category=accessories" style={{textDecoration:"none", color:"black"}}>
  <div className="category-item">
    <img src={earring} alt="" />
    <h3>Accessories</h3>
  </div></Link>

<Link   to="/products?pro_category=bags" style={{textDecoration:"none", color:"black"}}>
  <div className="category-item">
    <img src={bags} alt="" />
    <h3>bagss</h3>
  </div></Link>

<Link to="/products?pro_category=shoes" style={{textDecoration:"none", color:"black"}}>
  <div className="category-item">
    <img src={shoes1} alt="" />
    <h3>Shoes</h3>
  </div></Link>


<Link to="/products?pro_category=clothing" style={{textDecoration:"none", color:"black"}}>
  <div className="category-item">
    <img src={pent} alt="" />
    <h3>Fashion</h3>
  </div></Link>


<Link to="/products?pro_category=perfume" style={{textDecoration:"none", color:"black"}}>
  <div className="category-item">
    <img src={perfume} alt="" />
    <h3>Perfume</h3>
  </div></Link>
</div>

        </div>
    </div>
    </>
  )
}

export default Categories