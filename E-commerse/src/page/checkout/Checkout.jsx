import React from "react";
import Track from "../../components/collect/Track";
import Buttonback from "../../components/button/Buttonback";

const Checkout = () => {
  const data = JSON.parse(localStorage.getItem("checkoutData"));
  const Totalcart = JSON.parse(localStorage.getItem("Total_Cart")) || [];

  const CurentUser = JSON.parse(localStorage.getItem("Current_User")) || [];
  if (!data) return <h2>No checkout data found</h2>;

  return (
    <>
    <div>
        <Track title="Checkout" name="Checkout" nameLink="/cart" LName="cart"/>
        <Buttonback url="/cart"/>
    </div>
    <div style={{display:"flex",marginBottom:"30px"}}>
        <div style={{backgroundColor:"#ccc",height:"540px",width:"880px",margin:"auto",marginTop:"25px",marginLeft:"110px"}} >
              <div style={{backgroundColor:"#928f8fff",height:"500px",width:"840px",margin:"auto",marginTop:"20px"}}>
                <h3 style={{fontSize:"29px",fontWeight:"600"}}>User Information</h3><hr />
                
              </div>
        </div>
        <div style={{backgroundColor:"#979191ff",height:"200px" ,width:"430px",margin:"auto",marginTop:"25px",marginLeft:"2px"}}>
            c
        </div>
    </div>
    </>
  );
};

export default Checkout;
