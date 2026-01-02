import React from "react";

const Track = (props) => {
  return (
    <>
<div
  className="bg-primary text-white"
  style={{
    margin: "auto",
    marginTop: "20px", 
    width: "85%",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "40px",
    height: "110px",
    marginBottom: "20px",
  }}
>
  <h1>{props.title}</h1>
  <div className="d-flex gap-3" >
    <a href="/" style={{ textDecoration: "none",color:"white" }}>Home</a>
    <span> &gt;  </span>
    <a href={props.nameLink} style={{ textDecoration: "none",color:"white" }}>{props.LName}</a>

    <span> &gt;  </span>
    <p>{props.name}</p>
  </div>
</div>

    </>
  );
};

export default Track;
