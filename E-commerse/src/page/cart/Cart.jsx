import React, { useEffect, useState } from "react";
import Track from "../../components/collect/Track";
import Buttonback from "../../components/button/Buttonback";
import noproduct from "../../assets/noProduct.jpg"
import Checkout from "../checkout/Checkout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // 🔹 Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("Total_Cart")) || [];
    // Ensure all prices are numbers
    const normalizedCart = storedCart.map(item => ({
      ...item,
      Totalprice: typeof item.Totalprice === 'string' ? 
                  parseFloat(item.Totalprice) : 
                  Number(item.Totalprice) || 0
    }));
    setCartItems(normalizedCart);
  }, []);

  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("Total_Cart", JSON.stringify(updatedCart));
  };

  // Calculate totals
  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => {
      return sum + (parseFloat(item.Totalprice) || 0);
    }, 0);
  };

  const calculateShipping = () => {

    return 12
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = [...cartItems];
    const item = updatedCart[index];
    
    // Calculate new total price based on unit price
    const unitPrice = (parseFloat(item.Totalprice) / item.quantity) || parseFloat(item.price) || 0;
    updatedCart[index] = {
      ...item,
      quantity: newQuantity,
      Totalprice: unitPrice * newQuantity
    };
    
    setCartItems(updatedCart);
    localStorage.setItem("Total_Cart", JSON.stringify(updatedCart));
  };
const handleCheckout = () => {
  if (cartItems.length === 0) return alert("Cart is empty");

  localStorage.setItem(
    "checkoutData",
    JSON.stringify({
      shipping: calculateShipping(),
      subtotal: calculateSubtotal().toFixed(2),
      total: calculateTotal().toFixed(2),
    })
  );

  navigate("/checkout");
};


  // Helper function to safely format prices
  const formatPrice = (price) => {
    const num = typeof price === 'string' ? parseFloat(price) : Number(price);
    return isNaN(num) ? "0.00" : num.toFixed(2);
  };

  return (
    <>
      <div style={{ marginBottom: "25px" }}>
        <Track title="Cart" name="Cart" nameLink="/products" LName="Products" />
      </div>

      <Buttonback url="/products" />
      
      <div className="d-flex" style={{ flexWrap: "wrap", padding: "0 20px" }}>
        {/* Cart Items Section */}
        <div
          style={{
            backgroundColor: "#f8f9fa",
            width: "100%",
            maxWidth: "800px",
            height: "auto",
            margin: "20px auto 30px",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        >
          <h2 style={{ fontSize: "23px", fontWeight: "700", marginBottom: "20px" }}>
            Shopping Cart{" "}
            <span style={{ fontSize: "15px", fontWeight: "500", color: "#666" }}>
              ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
            </span>
          </h2>

          {cartItems.length === 0 ? (
       <div style={{
         backgroundColor: "#ffffffff",
         height: "450px",
         width: "100%",
         display: "flex",           // Add this
         justifyContent: "center",  // Add this for horizontal centering
         alignItems: "center"       // Add this for vertical centering
       }}>
         <div style={{
           backgroundColor: "white",
           height: "50vh",
           width: "50%",
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center'
         }}>
            <img 
             src={noproduct} 
             alt="No products found" 
             style={{
               width: "100%",
               height: "100%",
               objectFit: "contain"  // Maintain aspect ratio, fit within container
             }}
           />
         </div>
       </div>
          ) : (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                backgroundColor: "#fff",
                borderRadius: "8px",
                overflow: "hidden"
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#e9ecef" }}>
                  <th style={{ padding: "12px", textAlign: "left" }}>Product</th>
                  <th style={{ padding: "12px", textAlign: "center" }}>Price</th>
                  <th style={{ padding: "12px", textAlign: "center" }}>Quantity</th>
                  <th style={{ padding: "12px", textAlign: "center" }}>Total</th>
                  <th style={{ padding: "12px", textAlign: "center" }}>Action</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item, index) => {
                  const totalPrice = parseFloat(item.Totalprice) || 0;
                  const unitPrice = totalPrice / (item.quantity || 1);
                  
                  return (
                    <tr 
                      key={index} 
                      style={{ 
                        borderBottom: "1px solid #dee2e6"
                      }}
                    >
                      {/* Product with Image */}
                      <td style={{ padding: "15px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{ 
                              width: "80px", 
                              height: "80px", 
                              borderRadius: "8px",
                              objectFit: "cover" 
                            }}
                          />
                          <div>
                            <strong style={{ display: "block", marginBottom: "5px" }}>
                              {item.name}
                            </strong>
                            <div style={{ fontSize: "14px", color: "#666" }}>
                              {item.color && <span>Color: {item.color}</span>}
                              {item.size && <span> | Size: {item.size}</span>}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Unit Price */}
                      <td style={{ padding: "15px", textAlign: "center" }}>
                        ${formatPrice(unitPrice)}
                      </td>

                      {/* Quantity Controls */}
                      <td style={{ padding: "15px", textAlign: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                          <button
                            onClick={() => updateQuantity(index, item.quantity - 1)}
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "4px",
                              border: "1px solid #ddd",
                              backgroundColor: "#fff",
                              cursor: "pointer",
                              fontSize: "16px"
                            }}
                          >
                            -
                          </button>
                          <span style={{ minWidth: "30px", textAlign: "center" }}>
                            {item.quantity || 1}
                          </span>
                          <button
                            onClick={() => updateQuantity(index, item.quantity + 1)}
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "4px",
                              border: "1px solid #ddd",
                              backgroundColor: "#fff",
                              cursor: "pointer",
                              fontSize: "16px"
                            }}
                          >
                            +
                          </button>
                        </div>
                      </td>

                      {/* Total Price */}
                      <td style={{ padding: "15px", textAlign: "center", fontWeight: "600" }}>
                        ${formatPrice(totalPrice)}
                      </td>

                      {/* Remove Action */}
                      <td style={{ padding: "15px", textAlign: "center" }}>
                        <button
                          onClick={() => removeItem(index)}
                          style={{
                            backgroundColor: "transparent",
                            color: "#dc3545",
                            border: "1px solid #dc3545",
                            padding: "6px 12px",
                            cursor: "pointer",
                            borderRadius: "4px",
                            fontSize: "14px",
                            transition: "all 0.3s",
                            ":hover": {
                              backgroundColor: "#dc3545",
                              color: "#fff"
                            }
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        {/* Payment Summary */}
        <div style={{
          backgroundColor: "#fff",
          margin: "20px auto",
          height: "auto",
          width: "100%",
          maxWidth: "400px",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          border: "1px solid #dee2e6"
        }}>
          <h3 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "20px" }}>
            Order Summary
          </h3>
          
          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <span style={{ fontSize: "16px", color: "#495057" }}>Subtotal:</span>
              <span style={{ fontSize: "16px", fontWeight: "500" }}>
                ${calculateSubtotal().toFixed(2)}
              </span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <span style={{ fontSize: "16px", color: "#495057" }}>Shipping:</span>
              <span style={{ fontSize: "16px", fontWeight: "500" }}>
                ${calculateShipping().toFixed(2)}
                {calculateShipping() === 0 && " (Free Shipping)"}
              </span>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid #dee2e6", margin: "15px 0" }} />
            
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
              <span style={{ fontSize: "18px", fontWeight: "600" }}>Total:</span>
              <span style={{ fontSize: "20px", fontWeight: "700", color: "#0d6efd" }}>
                ${calculateTotal().toFixed(2)}
              </span>
            </div>
          </div>
          
          <div>      <Link to='/checkout' style={{textDecoration:"none",color:"white"}} className="bg-primary" >
            <button 
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
              style={{
                backgroundColor: cartItems.length === 0 ? "#6c757d" : "#0d6efd",
                color: "#fff",
                border: "none",
                width: "100%",
                height: "48px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: cartItems.length === 0 ? "not-allowed" : "pointer",
                transition: "background-color 0.3s"
              }}
              onMouseOver={(e) => {
                if (cartItems.length > 0) {
                  e.target.style.backgroundColor = "#0b5ed7";
                }
              }}
              onMouseOut={(e) => {
                if (cartItems.length > 0) {
                  e.target.style.backgroundColor = "#0d6efd";
                }
              }}
            >
     {cartItems.length === 0 ? "Cart is Empty" : "Proceed to Checkout"}
</button>           </Link> 
          </div>
          
          <div style={{ marginTop: "15px", fontSize: "14px", color: "#6c757d", textAlign: "center" }}>
            <p>No Free shipping on orders </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;