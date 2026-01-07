import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./User.css"

const Userdetail = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("Current_User"));

  // 🔒 Guard if user not logged in
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    fetch("http://localhost:3003/order")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch(console.error);
  }, []);

  if (!currentUser) return null;

  const filterData = orders.filter(
    (item) => item.CurentID === currentUser.id
  );

  const goOrder = (id) => navigate(`/order/${id}`);

  return (
  <div className="user-page">
  {/* USER INFO */}
  <div className="user-card">
    <h3 className="user-title">User Info</h3>

    <div className="avatar">
      <AccountCircleIcon />
    </div>

    <div className="user-form">
      <label>User ID</label>
      <input value={currentUser.id} readOnly />

      <label>Name</label>
      <input
        value={`${currentUser.firstName} ${currentUser.lastName}`}
        readOnly
      />

      <label>Email</label>
      <input value={currentUser.email} readOnly />

      <label>Phone</label>
      <input value={currentUser.phone} readOnly />

      <label>Gender</label>
      <input value={currentUser.gender} readOnly />
    </div>
  </div>

  {/* ORDERS */}
  <div className="orders-card">
    {filterData.length ? (
      <table className="orders-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Total</th>
            <th>Items</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Date</th>
            <th>Detail</th>
          </tr>
        </thead>

        <tbody>
          {filterData.map((item) => (
            <tr key={item.id}>
              <td className="product-cell">
                <img src={item.orderItems?.[0]?.image} alt="" />
                <span>{item.orderItems?.[0]?.name}</span>
              </td>

              <td>{item.total}</td>
              <td>{item.orderItems.length}</td>
              <td>{item.paymentMethod}</td>
              <td>
                <span className={`status ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </td>
              <td>{new Date(item.orderDate).toLocaleDateString()}</td>
              <td>
                <button
                  className="detail-btn"
                  onClick={() => goOrder(item.id)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p className="empty">No orders found.</p>
    )}
  </div>
</div>

  );
};

export default Userdetail;
