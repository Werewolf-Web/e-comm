import React from 'react'

const Order = () => {
      const Checkdata = JSON.parse(localStorage.getItem("checkoutData"));
  const Totalcart = JSON.parse(localStorage.getItem("Total_Cart")) || [];
  const CurentUser = JSON.parse(localStorage.getItem("Current_User")) || {};

  return (
    <>
    <div style={{textAlign:"center",marginTop:"45px",marginBottom:"40px"}}>

        <h3 style={{fontFamily:"serif"}}>
            Thank you for your purchase!
            
        </h3>
        <h4 style={{fontSize:"13px",paddingTop:"5px",fontWeight:"600",fontFamily:"sans-serif"}}>
            Thank you for choosing us! Your purchase is appreciated. We're committed to providing top-notch products and service. Stay tuned for updates on your order. 
        </h4>
            <h3 style={{fontSize:"20px",paddingTop:"10px"}}>
                
Order Number: W630553

            </h3>
    </div>
    <div style={{display:"flex",gap:"40px",marginLeft:"100px",marginBottom:"50px"}}>
        <div style={{backgroundColor:"#ccc",width:"50%"}}>
            <h3></h3>
        </div>
        <div style={{backgroundColor:"#998484ff",width:"30%"}}>
a
        </div>
    </div>
    </>
  )
}

export default Order