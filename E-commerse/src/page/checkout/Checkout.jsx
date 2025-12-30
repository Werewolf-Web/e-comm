import React, { useState } from "react";
import Track from "../../components/collect/Track";
import Buttonback from "../../components/button/Buttonback";

const Checkout = () => {
  const data = JSON.parse(localStorage.getItem("checkoutData"));
  const Totalcart = JSON.parse(localStorage.getItem("Total_Cart")) || [];
  const CurentUser = JSON.parse(localStorage.getItem("Current_User")) || {};
  const [country, setCountry] = useState("");

  if (!data) return <h2>No checkout data found</h2>;

  return (
    <>
      {/* HEADER */}
      <div>
        <Track title="Checkout" name="Checkout" nameLink="/cart" LName="Cart" />
        <Buttonback url="/cart" />
      </div>

      <div style={{ display: "flex", marginBottom: "30px" }}>
        {/* USER INFO */}
        <div
          style={{

            width: "880px",
            margin: "auto",
            marginTop:"20px",
            marginLeft:"94px",
            padding: "20px",

          }}
        >
          <div
            style={{
              backgroundColor: "#edededff",
              width: "840px",
              margin: "auto",
              padding: "20px",
                          borderRadius:"10px"
            }}
          >
            <h3 style={{ fontSize: "29px", fontWeight: "600" }}>
              User Information
            </h3>
            <hr />

            {/* NAME */}
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ flex: 1 }}>
                <label>FIRST NAME</label>
                <input
                  type="text"
                  value={CurentUser?.firstName || ""}
                  readOnly
                  style={{ height: "43px", width: "100%" ,paddingLeft:"15px" ,borderRadius:"5px" }}
                />
              </div>

              <div style={{ flex: 1 }}>
                <label>LAST NAME</label>
                <input
                  type="text"
                  value={CurentUser?.lastName || ""}
                  readOnly
                  style={{ height: "43px", width: "100%" ,paddingLeft:"15px" ,borderRadius:"5px" }}
                />
              </div>
            </div>

            {/* CONTACT */}
            <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
              <div style={{ flex: 1 }}>
                <label>EMAIL</label>
                <input
                  type="text"
                  value={CurentUser?.email || ""}
                  readOnly
                  style={{ height: "43px", width: "100%", paddingLeft:"15px" , borderRadius:"5px" }}
                />
              </div>

              <div style={{ flex: 1 }}>
                <label>PHONE</label>
                <input
                  type="text"
                  value={CurentUser?.phone || ""}
                  readOnly
                  style={{ height: "43px", width: "100%" ,paddingLeft:"15px" , borderRadius:"5px" }}
                />
              </div>
            </div>

            {/* ADDRESS */}
            <div style={{ marginTop: "15px" }}>
              <label>ADDRESS</label>
              <input
                type="text"
                placeholder="Enter delivery address"
                style={{ height: "43px", width: "100%" ,paddingLeft:"15px" , borderRadius:"5px" }}
              />
            </div>

            {/* CITY / STATE / ZIP */}
            <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
              <div>
                <label>TOWN / CITY</label>
                <input type="text" style={{ height: "43px", width: "200px" ,paddingLeft:"15px" ,borderRadius:"5px" }} />
              </div>

              <div>
                <label>STATE</label>
                <input type="text" style={{ height: "43px", width: "200px" ,paddingLeft:"15px" ,borderRadius:"5px" }} />
              </div>

              <div>
                <label>ZIP / POSTAL CODE</label>
                <input type="text" style={{ height: "43px", width: "200px",paddingLeft:"15px" ,borderRadius:"5px" }} />
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
      paddingLeft:"15px" ,
      borderRadius:"5px"
    }}
  >
    <option value="">Select Country</option>
    <option value="India">India</option>
    <option value="USA">United States</option>
    <option value="Canada">Canada</option>
    <option value="UK">United Kingdom</option>
    <option value="Australia">Australia</option>
  </select>
</div>

          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div
          style={{
            backgroundColor: "#979191ff",
            height: "200px",
            width: "430px",
            margin: "auto",
            marginTop:"20px",
            marginLeft:"10px",
            padding: "20px",
          }}
        >
          <h3>Order Summary</h3>
          <p>Subtotal: ${data.subtotal}</p>
          <p>Shipping: ${data.shipping}</p>
          <h4>Total: ${data.total}</h4>
        </div>
      </div>
    </>
  );
};

export default Checkout;
