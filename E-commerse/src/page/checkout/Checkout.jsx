import React, { useState } from "react";
import Track from "../../components/collect/Track";
import Buttonback from "../../components/button/Buttonback";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Discount } from "@mui/icons-material";
const Checkout = () => {
  const data = JSON.parse(localStorage.getItem("checkoutData"));
  const Totalcart = JSON.parse(localStorage.getItem("Total_Cart")) || [];
  const CurentUser = JSON.parse(localStorage.getItem("Current_User")) || {};
  const [country, setCountry] = useState("");
    const navigate = useNavigate();
  
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [postcode, setPostcode] = useState("")
    const [town, setTown] = useState("")

  
const [payment, setPayment] = useState("");


  if (!data) return <h2>No checkout data found</h2>;

 async function handleOrder() {

  if (!address || !city || !town || !postcode || !country || !payment) {
    alert("Please fill all details");
    return;
  }

  if (Totalcart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  const Placeorder = {
    id: "ORD-" + Date.now(),
    customer: CurentUser.firstName + " " + CurentUser.lastName,
    phone: CurentUser.phone,
    email: CurentUser.email,

    address: {
      address,
      city,
      state: town,
      postcode,
      country,
    },

    paymentMethod: payment,
    shipping: data.shipping,
    subtotal: data.subtotal,
    total: data.total,
    discount: 0,

    orderItems: Totalcart,
    orderDate: new Date().toLocaleString(),
    status: "Placed",
  };

  try {
    const response = await fetch("http://localhost:3003/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Placeorder),
    });

    if (response.ok) {
      const orders = JSON.parse(localStorage.getItem("Orders")) || [];
      orders.push(Placeorder);
      localStorage.setItem("Orders", JSON.stringify(orders));

      localStorage.removeItem("Total_Cart");
      localStorage.removeItem("checkoutData");

navigate(`/order/${Placeorder.id}`);

    }
  } catch (error) {
    console.error("Order failed:", error);
    alert("Order failed. Please try again.");
  }
}



  return (
    <>
      {/* HEADER */}
      <div>
        <Track title="Checkout" name="Checkout" nameLink="/cart" LName="Cart" />
        <Buttonback url="/cart" />
      </div>

      <div style={{ display: "flex", marginBottom: "30px",gap:"20px" }}>
        {/* USER INFO */}
        <div
          style={{
            backgroundColor: "#ffffffff",
            width: "880px",
            margin: "auto",
            marginTop: "20px",
            marginLeft: "94px",
            padding: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#efefefff",
              width: "840px",
              margin: "auto",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3 style={{ fontSize: "29px", fontWeight: "600" }}>
              User Information
            </h3>
            <hr />

            {/* NAME */}
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontWeight: "600" }}>FIRST NAME</label>
                <input
                  type="text"
                  value={CurentUser?.firstName || ""}
                  readOnly
                  style={{
                    height: "43px",
                    width: "100%",
                    paddingLeft: "15px",
                    borderRadius: "5px",
                    border: "0.5px solid #ccc",
                  }}
                />
              </div>

              <div style={{ flex: 1 }}>
                <label style={{ fontWeight: "600" }}>LAST NAME</label>
                <input
                  type="text"
                  value={CurentUser?.lastName || ""}
                  readOnly
                  style={{
                    height: "43px",
                    width: "100%",
                    paddingLeft: "15px",
                    borderRadius: "5px",
                    border: "0.5px solid #ccc",
                  }}
                />
              </div>
            </div>

            {/* CONTACT */}
            <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontWeight: "600" }}>EMAIL</label>
                <input
                  type="text"
                  value={CurentUser?.email || ""}
                  readOnly
                  style={{
                    height: "43px",
                    width: "100%",
                    paddingLeft: "15px",
                    borderRadius: "5px",
                    border: "0.5px solid #ccc",
                  }}
                />
              </div>

              <div style={{ flex: 1 }}>
                <label style={{ fontWeight: "600" }}>PHONE</label>
                <input
                  type="text"
                  value={CurentUser?.phone || ""}
                  readOnly
                  style={{
                    height: "43px",
                    width: "100%",
                    paddingLeft: "15px",
                    borderRadius: "5px",
                    border: "0.5px solid #ccc",
                  }}
                />
              </div>
            </div>

            {/* ADDRESS */}
            <div style={{ marginTop: "15px" }}>
              <label style={{ fontWeight: "600" }}>ADDRESS</label>
              <input
              value={address}
                type="text"
                placeholder="Enter delivery address"
                style={{
                  height: "43px",
                  width: "100%",
                  paddingLeft: "15px",
                  borderRadius: "5px",
                  border: "0.5px solid #ccc",
                }}
                 onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            {/* CITY / STATE / ZIP */}
            <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
              <div>
                <label style={{ fontWeight: "600" }}>TOWN / CITY</label>
                <input
                value={city}
                  type="text"
                  style={{
                    height: "43px",
                    width: "200px",
                    paddingLeft: "15px",
                    borderRadius: "5px",
                    border: "0.5px solid #ccc",
                  }}
                   onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div>
                <label style={{ fontWeight: "600" }}>STATE</label>
                <input
                value={town}
                  type="text"
                  style={{
                    height: "43px",
                    width: "200px",
                    paddingLeft: "15px",
                    borderRadius: "5px",
                    border: "0.5px solid #ccc",
                  }}
                   onChange={(e) => setTown(e.target.value)}
                />
              </div>

              <div>
                <label style={{ fontWeight: "600" }}>ZIP / POSTAL CODE</label>
                <input
                value={postcode}
             type="text"
  maxLength={6}
                  style={{
                    height: "43px",
                    width: "200px",
                    paddingLeft: "15px",
                    borderRadius: "5px",
                    border: "0.5px solid #ccc",
                  }}
                   onChange={(e) => setPostcode(e.target.value)}
                />
              </div>
            </div>
            <div style={{ marginTop: "15px" }}>
              <label style={{ fontWeight: "600" }}>COUNTRY</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                style={{
                  height: "43px",
                  width: "100%",
                  marginTop: "4px",
                  paddingLeft: "15px",
                  backgroundColor: "white",
                  border: "0.5px solid #ccc",
                  borderRadius: "5px",
                }}
            
              >
                <option value="">Select Country</option>
                <option value="India" >India</option>
                <option value="USA" >United States</option>
                <option value="Canada" >Canada</option>
                <option value="UK" >United Kingdom</option>
                <option value="Australia" >Australia</option>
              </select>
            </div>
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div
          style={{
            backgroundColor: "#ffffffff",
            height: "auto",
            width: "430px",
            marginTop: "20px",
            marginRight: "60px",
          }}
        >
          {/*  -----------    cart item                --------------            */}
   
<div
  style={{
    backgroundColor: "#efefef",
    width: "400px",
    margin: "20px auto",
    padding: "15px",
    borderRadius: "10px",
  }}
>
  <h3 style={{ fontSize: "18px", fontWeight: "600" }}>
    Cart Items <span style={{ fontSize: "14px" }}>({Totalcart.length})</span>
  </h3>
  <hr />

  {Totalcart.map((item, index) => (
    <div key={index} style={{ display: "flex", marginBottom: "10px" }}>
      <img
        src={item.image}
        alt={item.name}
        style={{ width: "50px", height: "50px", marginRight: "10px" }}
      />

      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "14px", fontWeight: "600" }}>{item.name}</div>
        <div style={{ fontSize: "12px" }}>
         color :  {item.color} | size : {item.size}
        </div>
        <div style={{ fontSize: "12px" }}>
          Qty: {item.quantity}
        </div>
      </div>

      <div style={{ fontSize: "14px", fontWeight: "600" }}>
        ₹{item.Totalprice}
      </div>
    </div>
  ))}
</div>

   

          {/* ---------------------------------------------       order summary         ----------------  */}
          <div
            style={{
              backgroundColor: "#efefefff",
              width: "400px",
              margin: "auto",
              marginTop: "20px",
              marginLeft: "13px",
              padding: "20px",

              borderRadius: "10px",
            }}
          >
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: "600" }}>
                Order Summary
              </h3>
              <hr />
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#495057" }}>
                    Subtotal :
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "500" }}>
                    ${data.subtotal}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#495057" }}>
                    Discount :
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "500" }}>
                    $0
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#495057" }}>
                    Shipping :
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "500" }}>
                    ${data.shipping}
                  </span>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Coupn code Here ..!"
                    style={{
                      height: "38px",
                      paddingLeft: "8px",
                      width: "250px",
                      marginTop: "5px",
                      borderRadius: "5px",
                      marginRight: "8px",
                      border: "0.5px solid #ccc",
                    }}
                  />
                  <button
                    className="bg-primary"
                    style={{
                      height: "35px",
                      borderRadius: "5px",
                      fontWeight: "500",
                      color: "white",
                      border: "0.5px solid #ccc",
                    }}
                  >
                    Apply Code
                  </button>
                </div>

                <hr
                  style={{
                    border: "none",
                    borderTop: "1px solid #303335ff",
                    margin: "15px 0",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: "600" }}>
                    Total:
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#0d6efd",
                    }}
                  >
                    ${data.total}
                  </span>
                </div>
              </div>
            </div>
          </div>
                   <div
            style={{
              backgroundColor: "#efefefff",
              width: "400px",
              margin: "auto",
              marginTop: "20px",
              marginLeft: "13px",
              padding: "20px",
marginBottom:"20px",
              borderRadius: "10px",
            }}
          >
  <h3 style={{ fontSize: "20px", fontWeight: "600" }}>
             Payment Method
              </h3>
<hr /> 
<label>
  <input type="radio" name="payment" value="Cash on Delivery" onChange={(e)=>setPayment(e.target.value)} /> Cash on Delivery
</label>
<br />

<label>
  <input type="radio" name="payment" value="Credit Card" onChange={(e)=>setPayment(e.target.value)} /> Credit Card
</label>
<br />

<label>
  <input type="radio" name="payment" value=" Debit Card" onChange={(e)=>setPayment(e.target.value)}/> Debit Card
</label>
<br />

<label>
  <input type="radio" name="payment" value="pay pal" onChange={(e)=>setPayment(e.target.value)}/> PayPal
</label>

<button className='btn btn-success' style={{width:'100%',marginTop:"20px"}} onClick={handleOrder}>Place Order</button> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
