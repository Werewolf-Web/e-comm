import React from 'react'
import Card from "./Card";
import './prodata.css'
const Productdata = ({ product }) => {
  return (
    <div className="container py-4" 
    style={{width:"100%"}}
    >
      <div className="row g-4">
        {product.map(item => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productdata;
