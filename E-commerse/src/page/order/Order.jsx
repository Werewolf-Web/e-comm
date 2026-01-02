import React, { useEffect, useState } from "react";
import Track from "../../components/collect/Track";
import { Link } from "react-router-dom";
const Order = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3003/order/`)
      .then((res) => res.json())
      .then((data) => setOrder(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div>
        <Track title="ALL Order" LName="product" name="order" />
      </div>
      <div> 
        <table
  className="table table-hover table-bordered"
  style={{ width: "80%", marginLeft: "130px", marginBottom: "50px" }}
>
  <thead className="table-primary">
    <tr style={{ backgroundColor: "#7e9bb7ff" }}>
      <th style={{ padding: "8px 12px", textAlign: "left" }}>Product</th>
      <th style={{ padding: "4px", textAlign: "center", width: "140px" }}>Total</th>
      <th style={{ padding: "4px", textAlign: "center", width: "140px" }}>Items</th>
      <th style={{ padding: "4px", textAlign: "center", width: "140px" }}>Payment Method</th>
      <th style={{ padding: "4px", textAlign: "center", width: "140px" }}>Status</th>
      <th style={{ padding: "4px", textAlign: "center", width: "140px" }}>Date</th>
      <th style={{ padding: "4px", textAlign: "center", width: "100px" }}>Detail</th>
    </tr>
  </thead>

  <tbody>
    {order.map((item) => (
      <tr key={item.id}>
        <td style={{ padding: "5px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src={item.orderItems[0].image}
              alt=""
              height="60"
              width="50"
              style={{ borderRadius: "8px" }}
            />
            <span style={{ fontSize: "15px", fontWeight: "600" }}>
              {item.orderItems[0].name}
            </span>
          </div>
        </td>

        <td style={{ textAlign: "center" }}>{item.total}</td>
        <td style={{ textAlign: "center" }}>{item.orderItems.length}</td>
        <td style={{ textAlign: "center" }}>{item.paymentMethod}</td>
        <td style={{ textAlign: "center" }}>{item.status}</td>
        <td style={{ textAlign: "center" }}>
          {new Date(item.orderDate).toLocaleDateString()}
        </td>
        <td style={{ textAlign: "center" }}>
          <Link to={`/order/${item.id}`}>
            <button className="btn btn-primary btn-sm">Detail</button>
          </Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </>
  );
};

export default Order;
