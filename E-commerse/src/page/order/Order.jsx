import React, { useEffect, useState } from "react";
import Track from "../../components/collect/Track";
import { Link, useNavigate } from "react-router-dom";
const Order = () => {
  const [order, setOrder] = useState([]);
  const CurentUser = JSON.parse(localStorage.getItem("Current_User")) || null;
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3003/order`)
      .then((res) => res.json())
      .then((data) => setOrder(data))
      .catch((err) => console.error(err));
  }, []);

  // ✅ Filter orders for current user
  let filterData = order.filter((item)=> item.CurentID === CurentUser.id)
  console.log(filterData);
  function GoOrder(id){
    navigate(`/order/${id}`);
  }

  return (
    <>
      <Track title="My Orders" LName="profile" name="orders" />

      {filterData.length > 0 ? (
        <table
          className="table table-hover table-bordered"
          style={{ width: "80%", margin: "50px auto" }}
        >
          <thead className="table-primary">
            <tr>
              <th>Product</th>
              <th className="text-center">Total</th>
              <th className="text-center">Items</th>
              <th className="text-center">Payment</th>
              <th className="text-center">Status</th>
              <th className="text-center">Date</th>
              <th className="text-center">Detail</th>
            </tr>
          </thead>

          <tbody>
            {filterData.map((item) => (
              <tr key={item.id}  onClick={()=>GoOrder(item.id)}>
                     <td style={{ padding: "5px" }}>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <img
                      src={item.orderItems[0].image}
                      alt=""
                      height="60"
                      width="50"
                      style={{ borderRadius: "8px" }}
                    />
                    <strong>{item.orderItems[0].name}</strong>
                  </div>
                </td>

                <td className="text-center">{item.total}</td>
                <td className="text-center">{item.orderItems.length}</td>
                <td className="text-center">{item.paymentMethod}</td>
                <td className="text-center">{item.status}</td>
                <td className="text-center">
                  {new Date(item.orderDate).toLocaleDateString()}
                </td>
                <td className="text-center">
             
                    <button className="btn btn-primary btn-sm"  onClick={()=>GoOrder(item.id)} >
                      Detail
                    </button>
            
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: "center", marginTop: "50px" }}>
          No orders found for this user.
        </p>
      )}
    </>
  );
};

export default Order;


