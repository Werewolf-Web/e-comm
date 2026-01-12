import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import "./orderdetail.css"
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
    <>
      <div
        style={{ textAlign: "center", marginTop: "45px", marginBottom: "40px" }}
      >
        <h3 style={{ fontFamily: "serif" }}>Thank you for purchase product Mr/Ms {order.customer} !</h3>
        <h4
          style={{
            fontSize: "13px",
            paddingTop: "5px",
            fontWeight: "600",
            fontFamily: "sans-serif",
          }}
        >
          Thank you for choosing us! Your purchase is appreciated. We're
          committed to providing top-notch products and service. Stay tuned for
          updates on your order.
        </h4>
        <h4
          style={{
            fontSize: "16px",
            paddingTop: "5px",
            fontWeight: "600",
            fontFamily: "sans-serif",
          }}
        >
          Order id : {order.id}{" "}
        </h4>
         <h4
          style={{
            fontSize: "16px",
            paddingTop: "5px",
            fontWeight: "600",
            fontFamily: "sans-serif",
          }}
        >
          User id : {order.CurentID}{" "}
        </h4>
      </div>
      <div  className="order-wrapper"
        style={{
       
        }}
      >
        <div
          style={{
            backgroundColor: "#ccc",
            width: "55%",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              backgroundColor: "#ccc",
              width: "98%",
              margin: "auto",
              marginBottom: "15px",
              marginLeft: "10px",
              marginRight: "5px",
              marginTop: "10px",
            }}
          >
            <h4 style={{paddingLeft:"10px",fontSize:"26px",fontWeight:"700"}}>{order.orderItems.length} items </h4>

            <div>
              <table
                style={{
                  width: "99%",
                  borderCollapse: "collapse",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#e9ecef" }}>
                    <th style={{ padding: "8px 12px", textAlign: "left" }}>
                      Product
                    </th>

                    <th
                      style={{
                        padding: "4px",
                        textAlign: "center",
                        width: "70px",
                      }}
                    >
                      Color
                    </th>

                    <th
                      style={{
                        padding: "4px",
                        textAlign: "center",
                        width: "80px",
                      }}
                    >
                      Size
                    </th>

                    <th
                      style={{
                        padding: "4px",
                        textAlign: "center",
                        width: "80px",
                      }}
                    >
                      Qty
                    </th>

                    <th
                      style={{
                        padding: "4px",
                        textAlign: "center",
                        width: "80px",
                      }}
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                        {order.orderItems.map((item)=>(
                            <tr key={item._id}>
                                <td style={{padding:"5px"}}>
                                    <img src={item.image} alt="" height={"60px"} width={"50px"} style={{borderRadius:"10px"}}/> <label style={{paddingLeft:"5px",fontSize:"16px",fontWeight:"600"}}>{item.name}</label>
                                </td>
                                <td style={{textAlign:"center"}}>{item.color}</td>
                                <td style={{textAlign:"center"}}>{item.size}</td>
                                <td style={{textAlign:"center"}}>{item.quantity}</td>
                                <td style={{textAlign:"center"}}>${item.price}</td>
                            </tr> 
                        ))} 

                </tbody>
              </table>
            </div>
          </div>
          <div
           className="total-table"
          >
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">Subtotal</th>
                  <td>${order.subtotal}</td>
                </tr>

                <tr>
                  <th scope="row">Shipping Fee</th>
                  <td>${order.shipping}</td>
                </tr>

                <tr>
                  <th scope="row">Coupn Discount</th>
                  <td>${order.discount}</td>
                </tr>

                <tr>
                  <th scope="row">Total</th>
                  <td style={{ fontWeight: "700" }}>${order.total}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ backgroundColor: "rgba(255, 255, 255, 1)", width: "100%" }}>
          <div
            style={{
              backgroundColor: "#ccc",
              width: "95%",
              margin: "auto",
              marginBottom: "10px",
              marginLeft: "10px",
              marginTop: "10px",
              borderRadius: "10px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "23px",
                  paddingLeft: "10px",
                  paddingTop: "4px",
                  fontWeight: "700",
                }}
              >
                <PersonIcon style={{ fontSize: "60px" }} /> Customor Details{" "}
              </h2>
            </div>
            <div
              style={{
                paddingLeft: "20px",
                marginBottom: "10px",
                paddingBottom: "20px",
              }}
            >
              <h5 style={{ fontSize: "14px", fontWeight: "600" }}>
                Name :{" "}
                <label style={{ fontSize: "14px", fontWeight: "500" }}>
                  {order.customer}
                </label>
              </h5>
              <h5 style={{ fontSize: "14px", fontWeight: "600" }}>
                Phone :{" "}
                <label style={{ fontSize: "14px", fontWeight: "500" }}>
                  {order.phone}
                </label>
              </h5>
              <h5 style={{ fontSize: "14px", fontWeight: "600" }}>
                Email :{" "}
                <label style={{ fontSize: "14px", fontWeight: "500" }}>
                  {order.email}
                </label>
              </h5>
              <h5 style={{ fontSize: "14px", fontWeight: "600" }}>
                Address:{" "}
                <label style={{ fontSize: "14px", fontWeight: "500" }}>
                  {order.address.address} , {order.address.city}{" "}
                  {order.address.state} {order.address.country}{" "}
                  {order.address.postcode}{" "}
                </label>
              </h5>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#ccc",
              width: "95%",
              margin: "auto",
              marginBottom: "10px",
              marginLeft: "10px",
              marginTop: "10px",
              borderRadius: "10px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "23px",
                  paddingLeft: "10px",
                  paddingTop: "3px",
                  fontWeight: "700",
                }}
              >
                <MonetizationOnIcon style={{ fontSize: "60px" }} /> Payment
                Method{" "}
              </h2>
            </div>
            <div
              style={{
                paddingLeft: "20px",
                marginBottom: "10px",
                paddingBottom: "20px",
              }}
            >
              <h5 style={{ fontSize: "14px", fontWeight: "600" }}>
                Method :{" "}
                <label style={{ fontSize: "14px", fontWeight: "500" }}>
                  {" "}
                  {order.paymentMethod}
                </label>
              </h5>
              <h5 style={{ fontSize: "14px", fontWeight: "600" }}>
                Status :{" "}
                <label style={{ fontSize: "14px", fontWeight: "500" }}>
                  {" "}
                  {order.status}
                </label>
              </h5>
              <h5 style={{ fontSize: "14px", fontWeight: "600" }}>
                Shipping Fee : $
                <label style={{ fontSize: "14px", fontWeight: "500" }}>
                  {" "}
                  {order.shipping}
                </label>
              </h5>
              <h5 style={{ fontSize: "14px", fontWeight: "600" }}>
                Order Date :{" "}
                <label style={{ fontSize: "14px", fontWeight: "500" }}>
                  {" "}
                  {order.orderDate}
                </label>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orderdetail;
