import React from 'react'
import cort from '../../assets/cort.webp'
import earring from '../../assets/earring.webp'
import bag from '../../assets/bag.webp'
import phone1 from '../../assets/phone.jpeg'
import pent from '../../assets/feshion.jpeg'   
import test from '../../assets/test.jpeg'
import './Categories.css'

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
  <div className="category-item">
    <img src={cort} alt="" />
    <h3>Men Clothes</h3>
  </div>

  <div className="category-item">
    <img src={earring} alt="" />
    <h3>Accessories</h3>
  </div>

  <div className="category-item">
    <img src={bag} alt="" />
    <h3>Bags</h3>
  </div>

  <div className="category-item">
    <img src={phone1} alt="" />
    <h3>Phone</h3>
  </div>

  <div className="category-item">
    <img src={pent} alt="" />
    <h3>Fashion</h3>
  </div>

  <div className="category-item">
    <img src={test} alt="" />
    <h3>Test</h3>
  </div>
</div>

        </div>
    </div>
    </>
  )
}

export default Categories