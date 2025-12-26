import React from "react";
import logo from "../../assets/logo.webp";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3"
    
    >
      <div className="container-fluid">
        
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" style={{ height: "40px" }} />
        </a>

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
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Men Clothes</a></li>
                <li><a className="dropdown-item" href="#">Accessories</a></li>
                <li><a className="dropdown-item" href="#">Bags</a></li>
                <li><a className="dropdown-item" href="#">Phone</a></li>
                <li><a className="dropdown-item" href="#">Fashion</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/products">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Men</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Women</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Kids</a>
            </li>
          </ul>

          {/* Icons */}
          <div className="d-flex align-items-center gap-3">
            <a href="#"><SearchIcon style={{color: "#666",  fontSize:"26px" }}/></a>
            <a href="/cart"><LocalMallIcon style={{ fontSize:"26px",color:"#3341d9ff"}}/></a>
            <a href="/profile/wishlist"><FavoriteBorderIcon style={{color: "#FF0000", fontSize:"26px"}}/></a>
            <a href="/auth/login"><AccountCircleSharpIcon style={{fontSize:"38px",color: "#c1c1c1ff"}}/></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
