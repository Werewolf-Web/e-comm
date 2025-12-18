import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Product from '../products/Product'
import slide1 from '../../assets/slide-1.webp'
import men from '../../assets/men.png'
import women from '../../assets/women.png'
import Categories from '../../components/categories/Categories'
import thum from '../../assets/thum.webp'

import Newsletter from '../../components/news/Newsletter'
import Aboutdetail from '../../components/aboutdetail/Aboutdetail'
import Slidebr from '../../components/brandslide/Slidebr'

const Home = () => {
  return (
    <>
 
<div
  id="carouselExampleControlsNoTouching"
  className="carousel slide"
  data-bs-touch="false"
  data-bs-interval="false"
  style={{backgroundColor:"#29322eff", color:"white", marginTop:"-8px"}}
>
  <div className="carousel-inner" style={{ height: "400px" }}>

    {/* SLIDE 1 */}
    <div className="carousel-item active">
      <div className="d-flex align-items-center h-100 px-5">
        
        {/* LEFT CONTENT */}
        <div className="w-50" style={{marginLeft:"100px"}}>
          <h1>Top product of the <br /> Year!</h1>
          <p>Check out all the top products of the year in our new collection.</p>
          <div className="d-flex gap-3">
            <button className="btn  " style={{backgroundColor:"#4dd2fb77",color:"white"}}>Shop Now</button>
            <button className="btn"  style={{backgroundColor:"#4dd2fb77",color:"white"}}>Explore More</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-50 text-center">
          <img
            src={slide1}
            className="img-fluid"
            alt="slide1"
            style={{ maxHeight: "400px" }}
          />
        </div>

      </div>
    </div>

    {/* SLIDE 2 */}
    <div className="carousel-item">
      <div className="d-flex align-items-center h-100 px-5">

        <div className="w-50" style={{marginLeft:"100px"}}>
          <h1>New Collection <br /> 2025</h1>
          <p>Discover fresh arrivals with premium quality.</p>
          <div className="d-flex gap-3">
            <button className="btn "  style={{backgroundColor:"#4dd2fb77",color:"white"}}>Shop Now</button>
            <button className="btn " style={{backgroundColor:"#4dd2fb77",color:"white"}}>Explore More</button>
          </div>
        </div>

        <div className="w-50 text-center">
          <img
            src={slide1}
            className="img-fluid"
            alt="slide2"
            style={{ maxHeight: "400px" }}
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
  className="d-flex gap-4 justify-content-center"
  style={{ marginTop: "30px",height:"250px" }} 
  >

  {/* CARD 1 */}
  <div
    className="d-flex align-items-center justify-content-between p-4"
    style={{
      height: "250px",
      width: "600px",
      backgroundColor: "#d4d4d4ff",
      borderRadius: "15px"
    }}
  >
    {/* DETAILS */}
    <div style={{ maxWidth: "300px" }}>
      <h3>Men Latest Fashion</h3>
      <h5 className="text-danger">20% Off</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button className="btn btn-dark">Shop Now</button>
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
    className="d-flex align-items-center justify-content-between p-4"
    style={{
      height: "250px",
      width: "600px",
      backgroundColor: "#d4d4d4ff",
      borderRadius: "15px"
    }}
  >
    {/* DETAILS */}
    <div style={{ maxWidth: "300px" }}>
      <h3>Women Latest Fashion</h3>
      <h5 className="text-danger">20% Off</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button className="btn btn-dark">Shop Now</button>
    </div>

    {/* IMAGE */}
    <img
      src={women}
      alt="women fashion"
      style={{ height: "250px", objectFit: "contain" }}
    />
  </div>

</div>

<Categories/>
    
{/* -------------------  thum part */}
<div className=''
style={{height:"490px"}}
>
    <div className='d-flex'
    style={{height:"450px", backgroundColor:"rgba(93, 185, 145, 0.67)"
    }}
    >
<div 
style={{height:"300px" ,width:"250vh",marginTop:"100px",marginLeft:"100px" ,marginRight:"50px"}}
>
<h1 style={{fontSize:"50px",fontWeight:"800"}}>UK Premier Store for<br/> Wrist Watches</h1>
<p style={{fontWeight:"200"}}>Welcome to our world of horological excellence, where timepieces become timeless statements of elegance. Our collection showcases an unparalleled selection of premium watches, curated from renowned luxury brands around the globe.</p>
<button className=''
style={{height:"45px",width:"100px",borderRadius:"7px",backgroundColor:"#7ec276ff",color:"white",border:"none",fontSize:"15px",fontWeight:"700" , }}
>View more</button>
</div>
<div className='' style={{width:"1000px"}}>  

    <img src={thum} alt="" 
    style={{height:"450px",paddingRight:"10px",objectFit:"cover"}}/>
</div>
</div>
</div>
{/* ----------------  slide brand */}
<Slidebr/>
{/* ------------    about detail -------- */}
<Aboutdetail/>
{/* --------------------- newsletter -------------- */}
<Newsletter/>
    </>
  )
}

export default Home