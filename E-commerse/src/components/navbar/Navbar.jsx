import React, { useEffect, useState } from "react";
import logo from "../../assets/7987590_414.svg";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";
import Search from "../button/search/Search";


const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    try {
      const u = JSON.parse(localStorage.getItem("Current_User"));
      setCurrentUser(u);
    } catch (e) {
      setCurrentUser(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("Current_User");
    setCurrentUser(null);
    window.location.href = "/";
  };
  return (
    <nav className=" navbar navbar-expand-lg navbar-light bg-light px-3" >
      <div className="container-fluid">
        
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" style={{ height: "40px" ,background:"transparent" }} />
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
              <Link className="nav-link" to="/">Home</Link>
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
                <li><Link className="dropdown-item" to="/products?pro_category=accessories"> Accessories</Link></li>
                <li><Link className="dropdown-item" to="/products?category=male">Men Clothes</Link></li>
                <li><Link className="dropdown-item" to="/products?pro_category=shoes">Shoes</Link></li>
                <li><Link className="dropdown-item" to="/products?pro_category=bags">bagss</Link></li>
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

            {/* Profile dropdown: show profile/order when logged in, otherwise show login/register */}
            <div className="nav-item dropdown">
              <button
                className="btn btn-link nav-link dropdown-toggle p-0"
                id="profileDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textDecoration: "none" }}
              >
                <AccountCircleSharpIcon style={{fontSize:"38px",color: "#c1c1c1ff"}}/>
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                {currentUser ? (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/profile">Profile</Link>
                    </li>
                    {/* <li>
                      <Link className="dropdown-item" to="/order">Orders</Link>
                    </li> */}
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/auth/login">Login</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/auth/register">Register</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
