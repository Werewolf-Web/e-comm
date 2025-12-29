import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Track from "../../components/collect/Track";
import ContentCopySharpIcon from "@mui/icons-material/ContentCopySharp";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Warranty from "./Warranty";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import noproduct from "../../assets/noProduct.jpg"
import "./ProductDetail1.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import Buttonback from "../../components/button/Buttonback";
import Quntiti from "../../components/button/Quntiti";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [value, setValue] = useState("1");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // ---- pass product data ---
  // const [prname, setPrname] = useState("");
  // const [quanti, setQuanti] = useState("")
  const [colerr, setColerr] = useState("")
  const [sizee, setSizee] = useState("")
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return<div style={{
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
</div>;
  const finalaprice = product.price - (product.discount * product.price) / 100;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQty = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

function pasArr() {
  if (!colerr) {
    alert("Please select a color !");
    return;
  }
  if(!sizee){
    alert("Please select a size !")
    return;
  }
const Totalprice = (finalaprice * quantity).toFixed(2);
  const cartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    finalaprice: finalaprice,
    size: sizee,
    image: product.images[0],

    color: colerr,
    quantity: quantity,
    Totalprice:Totalprice
  };

  console.log("Added to cart:", cartItem);
}

  return (
    <>
      <div
        style={{
          backgroundColor: "#fffffff5",
          width: "100%",
          paddingBottom: "2rem",
        }}
      >
        {/* TRACK */}
        <div style={{ marginTop: "10px" }}>
          <Track title="Product Detail" name={product.name} />
        </div>
        <Buttonback url="/products" />
        {/* MAIN CARD */}
        <div
          style={{
            backgroundColor: "rgba(240, 240, 240, 0.67)",
            width: "70%",
            margin: "25px auto",
            borderRadius: "10px",
            display: "flex",
            gap: "30px",
            padding: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* SWIPER GALLERY */}
          <div
            style={{
              height: "440px",
              width: "400px",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <div className="product-gallery-container">
              {/* Main Image Slider */}
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}

                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[Navigation, Thumbs]}
                className="main-swiper"
              >
                {product.images?.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="main-slide">
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Thumbnail Slider */}
              {product.images?.length > 1 && (
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={3}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Thumbs]}
                  className="thumb-swiper"
                >
                  {product.images?.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="thumb-slide">
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          loading="lazy"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>

          {/* DETAILS */}
          <div
            style={{
              flex: 1,
              backgroundColor: "#ffffffff",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            {/* TITLE & PRICE */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h4 style={{ fontSize: "20px", width: "100%" }}>
                {product.name}
              </h4>
              <div style={{ textAlign: "right" }}>
                {product.discount > 0 && (
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#888",
                      marginRight: "10px",
                    }}
                  >
                    ${product.price}
                  </span>
                )}
                <h5 style={{ fontSize: "25px", color: "#d32f2f" }}>
                  ${finalaprice.toFixed(2)}
                </h5>
              </div>
            </div>
            <div style={{ padding: "0px", margin: "0px", marginBottom: "5px" }}>
              {/* INFO */}
              <p style={{ marginBottom: "7px" }}>
                <strong>Brand : </strong> {product.brand}
              </p>
              <p style={{ marginBottom: "7px" }}>
                <strong>gender : </strong> {product.category}
              </p>
                 <p style={{ marginBottom: "7px" }}>
                <strong>Category : </strong> {product.pro_category}
              </p>
              <p style={{ marginBottom: "7px" }}>
                <strong>Original Price :</strong> ${product.price}
              </p>
              <p style={{ marginBottom: "7px" }}>
                <strong>Discount : </strong>{" "}
                <span style={{ color: "#2e7d32", fontSize: "14px" }}>
                  Save {product.discount}%
                </span>
              </p>
              <p style={{ marginBottom: "7px" }}>
                <strong>Available : </strong> {product.stock} items in stock
              </p>
            </div>

            {/* COLORS */}
            {product.colors?.length > 0 && (
              <div style={{ marginTop: "10px" }}>
                <strong>Colors : </strong>
                <div className="d-flex gap-2 mt-1">
                  {product.colors?.map((color, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <input
                        type="radio"
                        name="color"
                        value={color}
                        id={`color-${i}`}
                        checked={colerr === color}
            onChange={(e) => setColerr(e.target.value)}
                      />
                      <label htmlFor={`color-${i}`}>{color}</label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SIZES */}
            {product.sizes?.length > 0 && (
              <div style={{ marginTop: "10px" }}>
                <strong>Sizes:</strong>
                <div className="d-flex gap-2 mt-1 flex-wrap">
                  {product.sizes?.map((size, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <input
                        type="radio"
                        name="size"
                        value={size}
                        id={`size-${i}`}
                          checked={sizee === size}
            onChange={(e) => setSizee(e.target.value)}
                      />
                      <label htmlFor={`size-${i}`}>{size}</label>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* -------  Quntities  ---------------- */}
{/* ------- QUANTITY -------- */}

              <Quntiti increaseQty={increaseQty} quantity={quantity} decreaseQty={decreaseQty}/>

            {/* ACTION BUTTONS */}
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <button
                className="btn btn-primary"
                style={{ flex: "1", minWidth: "200px" }}
                onClick={pasArr}
              >
                Add to Cart
              </button>
              <a
                href="/cart"
                style={{ textDecoration: "none", flex: "1", minWidth: "200px" }}
              >
                <button className="btn btn-success" style={{ width: "100%" }}>
                  Buy Now
                </button>
              </a>
            </div>

            {/* SOCIAL SHARE */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <a
                href="https://www.facebook.com/sharer/sharer.php?u="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookSharpIcon
                  style={{ fontSize: "22px", color: "#1877F2" }}
                />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon style={{ fontSize: "22px", color: "#FF0000" }} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon style={{ fontSize: "22px", color: "#E4405F" }} />
              </a>
              <a
                href="https://www.linkedin.com/shareArticle?mini=true&url="
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon style={{ fontSize: "22px", color: "#0A66C2" }} />
              </a>
              <button
                onClick={() =>
                  navigator.clipboard.writeText(window.location.href)
                }
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <ContentCopySharpIcon
                  style={{ fontSize: "22px", color: "#666" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DESCRIPTION & REVIEWS TABS */}
      <div
        className=""
        style={{
          backgroundColor: "rgba(240, 240, 240, 0.67)",
          width: "70%",
          margin: "auto",
          height: "auto",
          borderRadius: "10px",
          display: "flex",
          gap: "30px",
          padding: "30px",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange}>
                <Tab label="Description" value="1" />
                <Tab label="Reviews" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">{product.description}</TabPanel>
            <TabPanel value="2">NO REVIEWS YET..!</TabPanel>
          </TabContext>
        </Box>
      </div>

      {/* WARRANTY */}
      <Warranty />
    </>
  );
};

export default ProductDetail;
