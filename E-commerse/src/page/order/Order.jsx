import React, { useEffect, useState } from "react";

const Order = () => {
const [order, setOrder] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3003/order/`)
      .then((res) => res.json())
      .then((data) => setOrder(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
<div>
    {order.map((item,index)=>(
        <h1 key={index}>{item.id}</h1>
    ))}
</div>
    </>
  )
}

export default Order