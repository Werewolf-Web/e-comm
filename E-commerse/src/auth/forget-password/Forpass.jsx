import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";


const Forpass = () => {
  const navigate = useNavigate();
const [Email, setEmail] = useState("");
const currentUser =
  JSON.parse(localStorage.getItem("Current_User")) || null;


function checkMail() {
  if (!currentUser) {
    alert("No user logged in");
    return;
  }

  if (!Email) {
    alert("Please enter your email");
    return;
  }

  if (currentUser.email.toLowerCase() === Email.toLowerCase()) {
 navigate("/dashboard/settings/change-password")
  } else {
    alert("Invalid email");
 navigate("/auth/login")}
  
}


  return (
    <>
      <div
        className="w-full"
        style={{
          height: "500px",
          backgroundColor: "rgba(225, 225, 225, 0.9)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          className="bg-white text-black"
          style={{
            height: "300px",
            width: "490px",
            borderRadius: "10px"
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "28px",
              fontWeight: "600",
              marginTop: "15px"
            }}
          >
            Forget Password
          </h2>

          <p
            style={{
              textAlign: "center",
              fontSize: "12px",
              padding: "0 20px"
            }}
          >
            Please enter the email address associated with your account and we
            will email you a link to reset your password.
          </p>

          <div style={{ padding: "0 20px" }}>
            <label style={{ fontSize: "15px",fontWeight:500 }}>Email</label>

            <div style={{ position: "relative", marginBottom: "15px" }}>
              <EmailIcon
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  color: "#777",
                  fontSize: "18px"
                }}
              />

              <input
                type="email"
                style={{
                  width: "100%",
                  height: "40px",
                  paddingLeft: "40px",
                  borderRadius: "5px",
                  border: "1px solid #d7d7d7ff"
                }}
                   value={Email}
  onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              className="btn bg-primary"
              style={{
                width: "100%",
                height: "33px",
                color: "white",
                fontSize: "10px",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
                    //  onClick={() => navigate("/dashboard/settings/change-password")}
                          onClick={checkMail}
            >
              Send Email
            </button>

            <button
              className="btn"
              style={{
                width: "100%",
                height: "33px",
                marginTop: "10px",
                backgroundColor: "#ccc",
                fontSize: "10px",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
             onClick={() => navigate("/auth/login")}
      
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forpass;
