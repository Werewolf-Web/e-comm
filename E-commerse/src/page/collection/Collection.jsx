import React, { useEffect, useState } from 'react'
import Product from '../products/Product'
import Productdata from '../../components/collect/Productdata'
import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min'



const Collection = () => {

    const [product, setProduct] = useState([])
 
    useEffect(()=>{
        fetch('http://192.168.9.200:3000/products')
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
            <div className=''>
                <div>
                    <div>
                        <h2 style={{ textAlign: "center", marginTop: "20px", fontSize: "40px", fontWeight: "500" }}>Top Collections
                        </h2>
                        <p style={{ textAlign: "center" }}>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                    </div>
                </div>

                {/* ------- collection data */}
           
                <div className=''
                    style={{ height: "755px" }}
                >
                    <Productdata product={product} />
                </div>
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