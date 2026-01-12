import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Product from "../products/Product";
import slide1 from "../../assets/slide-1.webp";
import men from "../../assets/men.png";
import women from "../../assets/women.png";
import Categories from "../../components/categories/Categories";
import thum from "../../assets/thum.webp";
import { Link } from "react-router-dom";
import "../../index.css"
import Newsletter from "../../components/news/Newsletter";
import Aboutdetail from "../../components/aboutdetail/Aboutdetail";
import Slidebr from "../../components/brandslide/Slidebr";
import Collection from "../collection/Collection";
import "./homee.css";
import Seall from "../../components/sell/Seall";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
        data-bs-interval="false"
        style={{
          backgroundColor: "#29322eff",
          color: "white",
          marginTop: "-8px",
        }}
      >
        <div className="carousel-inner main-slider" >
          {/* SLIDE 1 */}
          <div className="carousel-item active">
            <div className="d-flex align-items-center h-100 px-5">
              {/* LEFT CONTENT */}
              <div className="w-50 slide-1" >
                <h1>
                  Top product of the <br /> Year!
                </h1>
                <p>
                  Check out all the top products of the year in our new
                  collection.
                </p>
                <div className="d-flex gap-3">

                  <button
                    className="btn  "
                    style={{ backgroundColor: "#4dd2fb77", color: "white" }}
                  >
                     <Link
                to="/products"
                style={{ textDecoration: "none", color: "white" }}
              >
                Shop Now
              </Link>
                  </button>
                  <button
                    className="btn"
                    style={{ backgroundColor: "#4dd2fb77", color: "white" }}
                  >
     <Link
                to="/products"
                style={{ textDecoration: "none", color: "white" }}
              >
                Explore More
              </Link>
                  </button>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="w-50 text-center">
                <img
                  src={slide1}
                  className="img-fluid"
                  alt="slide1"
             
                />
              </div>
            </div>
          </div>

          {/* SLIDE 2 */}
          <div className="carousel-item ">
            <div className="d-flex align-items-center h-100 px-5">
              <div className="w-50 slide-1">
                <h1>
                  New Collection <br /> 2025
                </h1>
                <p>Discover fresh arrivals with premium quality.</p>
                <div className="d-flex gap-3">
                  <button
                    className="btn "
                    style={{ backgroundColor: "#4dd2fb77", color: "white" }}
                  >
         <Link
                to="/products"
                style={{ textDecoration: "none", color: "white" }}
              >
                Shop Now
              </Link>
                  </button>
                  <button
                    className="btn "
                    style={{ backgroundColor: "#4dd2fb77", color: "white" }}
                  >
           <Link
                to="/products"
                style={{ textDecoration: "none", color: "white" }}
              >
                Explore More
              </Link>
                  </button>
                </div>
              </div>

              <div className="w-50 text-center">
                <img
                  src={slide1}
                  className="img-fluid"
                  alt="slide2"
         
                />
              </div>
            </div>
          </div>
        </div>

        {/* CONTROLS */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div 
        className="d-flex gap-4 justify-content-center offer-container"
     
      >
        {/* CARD 1 */}
        <div 
          className="d-flex align-items-center justify-content-between p-4 offer-card-1"
    
        >
          {/* DETAILS */}
          <div style={{ maxWidth: "300px" }}>
            <h3>Men Latest Fashion</h3>
            <h5 className="text-danger">20% Off</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button className="btn btn-dark">
              <Link
                to="/products?category=male"
                style={{ textDecoration: "none", color: "white" }}
              >
                Shop Now
              </Link>
            </button>
          </div>

          {/* IMAGE */}
          <img
            src={men}
            alt="men fashion"
            style={{ height: "250px", objectFit: "contain" }}
          />
        </div>

        {/* CARD 2 */}
        <div
          className="d-flex align-items-center justify-content-between p-4 offer-card-1"
  
        >
          {/* DETAILS */}
          <div style={{ maxWidth: "300px" }}>
            <h3>Women Latest Fashion</h3>
            <h5 className="text-danger">20% Off</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="btn btn-dark">
              <Link
                to="/products?category=female"
                style={{ textDecoration: "none", color: "white" }}
              >
                Shop Now
              </Link>
            </button>
          </div>

          {/* IMAGE */}
          <img
            src={women}
            alt="women fashion"
            style={{ height: "250px", objectFit: "contain" }}
          />
        </div>
      </div>

      <Categories />
      {/*--------------       collection -----------  */}
      <Collection />
      {/* -------------------  thum part */}
      <div className="thum-part" style={{ height: "490px" }}>
        <div
          className="d-flex"
          style={{
            height: "450px",
            backgroundColor: "rgba(93, 185, 145, 0.67)",
          }}
        >
          <div
            style={{
     
              marginTop: "100px",
              marginLeft: "100px",
              marginRight: "50px",
            }}
          >
            <h1 style={{ fontSize: "50px", fontWeight: "800" }}>
              UK Premier Store for
              <br /> Wrist Watches
            </h1>
            <p style={{ fontWeight: "200" }}>
              Welcome to our world of horological excellence, where timepieces
              become timeless statements of elegance. Our collection showcases
              an unparalleled selection of premium watches, curated from
              renowned luxury brands around the globe.
            </p>
            <a href="/products">
         
              <button
                className=""
                style={{
                  height: "45px",
                  width: "100px",
                  borderRadius: "7px",
                  backgroundColor: "#7ec276ff",
                  color: "white",
                  border: "none",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                View more
              </button>
            </a>
          </div>
          <div className="" style={{ width: "1000px" }}>
            <img
              src={thum}
              alt=""
              style={{
                height: "450px",
                paddingRight: "10px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      {/* ----------------  slide brand */}
      <Slidebr />

      {/* ----------------------product section---------------- */}
      {/* ------------    about detail -------- */}
      <Aboutdetail />
      {/* -----------------  best deller --------------- */}
      <Seall />

      {/* --------------------- newsletter -------------- */}
    </>
  );
};

export default Home;
