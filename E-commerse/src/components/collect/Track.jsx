import React from "react";
import "./tracke.css";

const Track = (props) => {
  return (
    <>
<div
  className="bg-primary text-white"
  style={{
    margin: "auto",
    marginTop: "20px", 
    width: "95%",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px 10px 10px 25px",
    height: "110px",
    marginBottom: "20px",
  }}
>
  <h1 className="main-title">{props.title}</h1>
  <div className="d-flex gap-3" >
    <a href="/" style={{ textDecoration: "none",color:"white" }} className="title-text">Home</a>
    <span> &gt;  </span>
    <a href={props.nameLink} style={{ textDecoration: "none",color:"white",width:"fit-content" }}className="title-text" >{props.LName}</a>

    <span> &gt;  </span>
    <p className="title-text"> {props.name}</p>
  </div>
</div>

    </>
  );
};

export default Track;
