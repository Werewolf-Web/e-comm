import React from 'react'
import notfount from "../assets/404.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
        <img src={notfount} alt="error"  />
        <Link to='/'><button style={{height:"45px",width:"150px",borderRadius:"9px" ,color:"white",backgroundColor:"#2874F0",fontWeight:"600",border:"0.5px solid #2874F0"}}>Go To Home Page</button></Link>
    </div>
  )
}

export default Error