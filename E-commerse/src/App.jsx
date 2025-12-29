import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./page/home/Home";
import Product from "./page/products/Product";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";
import Newsletter from "./components/news/Newsletter";
import Forpass from "./auth/forget-password/Forpass";
import ProductDetail from "./page/products/ProductDetail";
import Cart from "./page/cart/Cart";
import Wishlist from "./profile/whise/Wishlist";
import Changepass from "./dashbord/setting/changepassword/Changepass";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forget-password" element={<Forpass />} />
        <Route path="/dashboard/settings/change-password" element={<Changepass/>}/>
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/profile/wishlist" element={<Wishlist/>} />
      </Routes>
      <Newsletter />
    </>
  );
};

export default App;
