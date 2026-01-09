import React from 'react'
import Newsletter from '../../components/news/Newsletter'
import Buttonlogin from '../../components/button/Buttonback'
import Epass from '../../components/e-pass/Epass'
import './loginn.css'
const Login = () => {
  return (
    <>
      <div
        style={{
          height: "521px",
          backgroundColor: "rgba(225, 225, 225, 0.9)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
        className='login-card'
        >
          <h3 style={{ textAlign: "center", paddingTop: "15px", fontSize: "23px", fontWeight: "600" }}>Login</h3>
          <p style={{ textAlign: "center", marginTop: "5px", fontWeight: "200", fontSize: "12px" }}>Login to your account to continue</p>
          <div className=' w-full'
            style={{ height: "180px", marginTop: "7px" }}
          >
            <Epass/>
          </div>

   
          <div className=' w-full'
            style={{ height: "50px" ,marginTop:"5px"}}
          >
            {/* <Buttonlogin/> */}
          </div>
        </div>
      </div>

 
    </>
  )
}

export default Login