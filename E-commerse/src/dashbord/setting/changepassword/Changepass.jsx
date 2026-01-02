import React, { useState } from 'react'
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Changepass = () => {
    const [showPassword, setShowPassword] = useState(false);
      const [Password, setPassword] = useState([]);
            const [NewPassword, setNewPassword] = useState([]);

           const Current_User =
  JSON.parse(localStorage.getItem("Current_User"));

function handleChange(e) {
  e.preventDefault();

  if (!Current_User) {
    alert("No user logged in");
    return;
  }

  if (Password !== NewPassword) {
    alert("Please enter same password");
    setPassword("");
    setNewPassword("");
    return;
  }

  const updatedUser = {
    ...Current_User,
    password: NewPassword,
  };

  localStorage.setItem(
    "Current_User",
    JSON.stringify(updatedUser)
  );

  alert("Your password has been changed successfully");

  setPassword("");
  setNewPassword("");
}


  return (
    <>
    <div
  style={{
    backgroundColor: "#ccc",
    height: "85vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <div
    style={{
      backgroundColor: "white",
      width: "500px",
      padding: "30px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    }}
  >
    {/* HEADER */}
    <div style={{ textAlign: "center", marginBottom: "25px" }}>
      <h4 style={{ marginBottom: "5px" }}>Change Password</h4>
      <p style={{ fontSize: "14px", color: "#666" }}>
        Change your password by logging into your account.
      </p>
    </div>

    {/* NEW PASSWORD */}
    <div style={{ marginBottom: "20px" }}>
      <label style={{ fontSize: "14px", fontWeight: 500 }}>
        NEW PASSWORD
      </label>

      <div style={{ position: "relative", marginTop: "5px" }}>
        <LockIcon
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            color: "#777",
          }}
        />

        {showPassword ? (
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
        ) : (
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
        )}

        <input
          type={showPassword ? "text" : "password"}
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            height: "45px",
            paddingLeft: "38px",
            paddingRight: "38px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        />
      </div>
    </div>

    {/* CONFIRM PASSWORD */}
    <div style={{ marginBottom: "25px" }}>
      <label style={{ fontSize: "14px", fontWeight: 500 }}>
        CONFIRM NEW PASSWORD
      </label>

      <div style={{ position: "relative", marginTop: "5px" }}>
        <LockIcon
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            color: "#777",
          }}
        />
              {showPassword ? (
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
        ) : (
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
        )}
        <input
          type={showPassword ? "text" : "password"}
          value={NewPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={{
            width: "100%",
            height: "45px",
            paddingLeft: "38px",
            paddingRight: "38px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        />
      </div>
    </div>

    {/* BUTTON */}
    <button
      style={{
        width: "100%",
        height: "40px",
        backgroundColor: "#0d6efd",
        color: "white",
        border: "none",
        borderRadius: "5px",
        fontWeight: "600",
        cursor: "pointer",
      }}
  onClick={handleChange}
    >
      Save Password
    </button>
  </div>
</div>

    </>
  )
}

export default Changepass