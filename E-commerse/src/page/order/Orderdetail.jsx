import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Orderdetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3003/order/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <h3>Loading order details...</h3>;
  if (!order) return <h3>Order not found</h3>;

  return (
    <div style={{textAlign:"center",marginTop:"45px",marginBottom:"40px"}}>

        <h3 style={{fontFamily:"serif"}}>
            Thank you for your purchase!
            
        </h3>
        <h4 style={{fontSize:"13px",paddingTop:"5px",fontWeight:"600",fontFamily:"sans-serif"}}>
            Thank you for choosing us! Your purchase is appreciated. We're committed to providing top-notch products and service. Stay tuned for updates on your order. 
        </h4>
            <h3 style={{fontSize:"20px",paddingTop:"10px"}}>
                
Order Number :  {order.id} <br /><br />
order name :
 {order.customer}
 <br />
 {order.orderItems[0].id} 

            </h3>
    </div>
  );
};

export default Orderdetail;
