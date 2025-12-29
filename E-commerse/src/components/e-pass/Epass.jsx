import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Epass = () => {
      const [showPassword, setShowPassword] = useState(false);
      const [Email, setEmail] = useState("")
      const [Password, setPassword] = useState("")
const handleLogin = () => {
  if (!Email || !Password) {
    alert("Enter email and password");
    return;
  }

  const users = JSON.parse(localStorage.getItem("Total_users")) || [];

  const loggedUser = users.find(
    user => user.email === Email && user.password === Password
  );

  if (loggedUser) {
    // store only logged-in user
    localStorage.setItem("Current_User", JSON.stringify(loggedUser));

    alert("Login Successful");
  } else {
    alert("Invalid email or password");
  }
  setEmail("");
  setPassword("");
  window.location.href = "/";
};


  return (
    <>
      <div style={{ padding: "20px" }}>
        {/* EMAIL */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontSize: "14px", fontWeight: 500 }}>EMAIL</label>

          <div style={{ position: "relative" }}>
            <EmailIcon
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",

                color: "#777",
                fontSize: "20px",
              }}
            />

            <input
              type="email"
              placeholder=""
              style={{
                fontSize: "16px",
                width: "100%",
                height: "45px",
                paddingLeft: "40px",
                borderRadius: "10px",
          
                border: "1px solid #ccc",
              }}
                           value={Email}
                  onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontSize: "14px", fontWeight: 500 }}>PASSWORD</label>
          <div style={{ position: "relative" }}>
            <LockIcon
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                color: "#777",
              }}
            />
            {/* TOGGLE ICON */}
  {showPassword ? 
  (
    <VisibilityIcon
      onClick={() => setShowPassword(false)}
      style={{
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        cursor: "pointer",
        color: "#777",
      }}
    />
  ): (
    <VisibilityOffIcon
      onClick={() => setShowPassword(true)}
      style={{
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        cursor: "pointer",
        color: "#777",
      }}
    />
  ) }

            <input
             type={showPassword ? "text" : "password"}
              style={{
                width: "100%",
                height: "45px",
                paddingLeft: "38px",
                paddingRight: "38px",
  borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
                      value={Password}
                  onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="" style={{ marginTop: "15px" }}>
          <div className="form-check ">
            <input
              className="form-check-input"
              type="checkbox"
              id="remember"
              style={{
                fontSize: "13px",
                marginTop: "8px",
                paddingLeft: "5px",
          
                border: "1px solid #000000ff",
                width: "15px",
                height: "15px",
              }}
            />
            <label
              className="form-check-label"
              htmlFor="remember"
              style={{
                fontSize: "12px",
                marginBottom: "5px",
                paddingLeft: "5px",
                paddingTop: "4px",
              }}
            >
              Remember me
            </label>
            <a
              href="/auth/forget-password"
              style={{
                fontSize: "12px",
                paddingLeft: "130px",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Forgot Password
            </a>
          </div>
        </div>

        <div
          className=" w-100 d-flex flex-column align-items-center justify-content-center rounded"
          style={{ height: "60px" ,marginTop:"10px"}}
        >
          <button
            className="btn btn-primary"
            style={{
              height: "32px",
              width: "359px",
              lineHeight: "29px",
              padding: 0,
              textAlign: "center",
              fontSize: "13px",
              fontWeight: "700",
            }}
                onClick={handleLogin}
          >
            Login
          </button>

          <h3 style={{ fontSize: "12px", marginTop: "10px" }}>
            Don't you have an account?
            <a
              href="/auth/register"
              style={{
                fontSize:"12px",
                textDecoration: "none",
                marginLeft: "4px",
                color: "#000000ff",
              }}
            >
              Register
            </a>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Epass;
