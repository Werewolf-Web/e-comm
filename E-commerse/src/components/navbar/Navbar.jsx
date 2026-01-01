import React from "react";
import logo from "../../assets/logo.webp";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";
import Search from "../button/search/Search";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3"
    
    >
      <div className="container-fluid">
        
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" style={{ height: "40px" }} />
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          
          {/* Menu */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-medium">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/products"
                role="button"
                data-bs-toggle="dropdown"
              >
                Categories
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/products?pro_category=accessories">Accessories</Link></li>
                <li><Link className="dropdown-item" to="/products?category=male">Men Clothes</Link></li>
                <li><Link className="dropdown-item" to="/products?pro_category=shoes">Shoes</Link></li>
                <li><Link className="dropdown-item" to="/products?pro_category=bag">Bags</Link></li>
                <li><Link className="dropdown-item" to="/products?pro_category=clothing">Fashion</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products?category=male">Men</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products?category=female">Women</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products?category=kids">Kids</Link>
            </li>
          </ul>

          {/* Icons */}
          <div className="d-flex align-items-center gap-3">
            <Link to="#"><Search style={{color: "#666",  fontSize:"26px" }}/></Link>
            <Link to="/cart"><LocalMallIcon style={{ fontSize:"26px",color:"#3341d9ff"}}/></Link>
            <Link to="/profile/wishlist"><FavoriteBorderIcon style={{color: "#FF0000", fontSize:"26px"}}/></Link>
            <Link to="/auth/login"><AccountCircleSharpIcon style={{fontSize:"38px",color: "#c1c1c1ff"}}/></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
