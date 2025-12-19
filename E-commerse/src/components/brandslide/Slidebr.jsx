import React from 'react'
import samsang from '../../assets/samsung.png'
import zara from '../../assets/Zara_Logo.png'
import nikie from '../../assets/Nike.png'
import Hermes from '../../assets/Hermes-Logo_mpfmin.png'
import louis from '../../assets/Louise.webp'
import bag from '../../assets/bag.webp'
import './slider.css'

const Slidebr = () => {
    return (
        <>
            <div>

                <div
                    style={{ height: "130px", width: "800px", marginLeft: "250px", alignItems: "center", textAlign: "center", paddingTop: "20px" }}
                >
                    <h1 style={{ fontWeight: "700" }}>Brands</h1>
                    <p style={{ fontSize: "13px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
                </div>
     
                
                    <div className='caurosel'>
                        <div className='group'>
                          <a href="./products">  <div className='card'><img className='set' src={samsang} width="150px" height="100px" alt="" /></div></a>
                          <a href="">  <div className='card'><img className='set' src={zara} width="150px" height="100px" alt="" /></div></a>
                          <a href="">  <div className='card'><img className='set' src={nikie} width="150px" height="100px" alt="" /></div></a>
                          <a href="">  <div className='card'><img className='set' src={bag} width="150px" height="100px" alt="" /></div></a>
                          <a href="">  <div className='card'><img className='set' src={louis} width="150px" height="100px" alt="" /></div></a>
                         </div>
                          <div aria-hidden='true' className='group'>
                          <a href="">  <div className='card'><img className='set' src={zara} width="150px" height="100px" alt="" /></div></a>
                          <a href="./products">  <div className='card'><img className='set' src={samsang} width="150px" height="100px" alt="" /></div></a>
                          <a href="">  <div className='card'><img className='set' src={nikie} width="150px" height="100px" alt="" /></div></a>
                          <a href="">  <div className='card'><img className='set' src={bag} width="150px" height="100px" alt="" /></div></a>
                          <a href="">  <div className='card'><img className='set' src={louis} width="150px" height="100px" alt="" /></div></a>
                         </div>
                    </div>

            </div>
        </>
    )
}

export default Slidebr