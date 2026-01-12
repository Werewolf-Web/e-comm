import React, { useEffect, useState } from 'react'
import Product from '../products/Product'
import Productdata from '../../components/collect/Productdata'
import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min'

import './collect.css'

const Collection = () => {

    const [product, setProduct] = useState([])
 
    useEffect(()=>{
            //    fetch('http://192.168.9.200:3000/products')
        fetch('http://192.168.8.252:3001/products?_limit=8')
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
            <div className='main-collect ' >
            
                    <div >
                        <h2 className='main-text' style={{ textAlign: "center", marginTop: "20px", fontSize: "40px", fontWeight: "500" }}>Top Collections
                        </h2>
                        <p className='main-text' style={{ textAlign: "center" }}>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                    </div>
             

                {/* ------- collection data */}
           <div className='collection-data'>                  <Productdata product={product} /> </div>
  
          
                <div className=''
                 style={{ textAlign: "center", marginBottom: "20px", fontSize: "50px", fontWeight: "500"}}
                >
                    
                    <a href="/products" style={{textDecoration:"none"}}>    <button className="btn " style={{ backgroundColor: "#01020377", color: "white",padding:"10px 20px",borderRadius:"8px" }}> View All</button></a>

                
                </div>
            </div>

        </>
    )
}

export default Collection