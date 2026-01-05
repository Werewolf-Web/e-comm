import React from 'react'
import samsang from '../../assets/samsung.png'
import zara from '../../assets/Zara_Logo.png'
import nikie from '../../assets/Nike.png'
import Hermes from '../../assets/Hermes-Logo_mpfmin.png'
import louis from '../../assets/Louise.webp'
import bags from '../../assets/bag.webp'
import './slider.css'
import { Link } from 'react-router-dom'

const Slidebr = () => {
    return (
        <>
            <div>

                <div
                    style={{ height: "130px", width: "800px", alignItems: "center", textAlign: "center", paddingTop: "20px",justifyContent:"center",marginRight:"auto",marginLeft:"auto" }}
                >
                    <h1 style={{ fontWeight: "700" }}>Brands</h1>
                    <p style={{ fontSize: "13px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
                </div>
     
                
                    <div className='caurosel'>
                        <div className='group'>
                          <Link to="/products?brand=Lululemon">  <div className='card'><img className='set' src={samsang} width="150px" height="100px" alt="" /></div></Link>
                          <Link to="/products?brand=Puma">  <div className='card'><img className='set' src={zara} width="150px" height="100px" alt="" /></div></Link>
                          <Link to="/products?brand=Nike">  <div className='card'><img className='set' src={nikie} width="150px" height="100px" alt="" /></div></Link>
                          <Link to="/products?pro_category=bags">  <div className='card'><img className='set' src={bags} width="150px" height="100px" alt="" /></div></Link>
                          <Link to="/products?brand=Louis Vuitton">  <div className='card'><img className='set' src={louis} width="150px" height="100px" alt="" /></div></Link>
                  </div>
                          <div aria-hidden='true' className='group'>
                          <Link to="/products?brand=Lululemon">   <div className='card'><img className='set' src={zara} width="150px" height="100px" alt="" /></div></Link>
                          <Link to="/products?brand=Puma">  <div className='card'><img className='set' src={samsang} width="150px" height="100px" alt="" /></div></Link>
                          <Link to="/products?pro_category=bags">   <div className='card'><img className='set' src={bags} width="150px" height="100px" alt="" /></div></Link>
                          <Link to="/products?brand=Puma">  <div className='card'><img className='set' src={samsang} width="150px" height="100px" alt="" /></div></Link>
                          <Link to="/products?brand=Louis Vuitton">  <div className='card'><img className='set' src={louis} width="150px" height="100px" alt="" /></div></Link>
                         </div>
                    </div>

            </div>
        </>
    )
}

export default Slidebr