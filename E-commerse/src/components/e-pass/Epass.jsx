import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Epass = () => {
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    const newErrors = {};

    // Email validation
    if (!Email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!Password) {
      newErrors.password = "Password is required";
    } else if (Password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Set errors and check if there are any
    setErrors(newErrors);
    
    // If there are errors, don't proceed
    if (Object.keys(newErrors).length > 0) {
      alert("Please fix the errors in the form");
      return;
    }

    setLoading(true);

    try {
      const users = JSON.parse(localStorage.getItem("Total_users")) || [];

      const loggedUser = users.find(
        (user) => user.email.toLowerCase() === Email.toLowerCase() && user.password === Password
      );

      if (loggedUser) {
        // Store only logged-in user
        localStorage.setItem("Current_User", JSON.stringify(loggedUser));
        alert("Login Successful");
        
        // Reset form
        setEmail("");
        setPassword("");
        setErrors({});
        
        // Redirect to home page
        window.location.href = "/";
      } else {
        alert("Invalid email or password");
        // Clear password field on failed login (security)
        setPassword("");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login");
    } finally {
      setLoading(false);
    }
    
  };

  // Helper function to clear error for a specific field
  const clearError = (fieldName) => {
    setErrors(prev => ({
      ...prev,
      [fieldName]: ""
    }));
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
               onChange={(e) => {
                setEmail(e.target.value);
                clearError("email");
              }}
                disabled={loading}
            />
          </div>
           {errors.email && (
            <small style={{ color: "red", fontSize: "12px" }}>
              {errors.email}
            </small>
          )}
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
              style={{
                width: "100%",
                height: "45px",
                paddingLeft: "38px",
                paddingRight: "38px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
        onChange={(e) => {
                setPassword(e.target.value);
                clearError("password");
              }}
                disabled={loading}
            />
          </div>
           {errors.password && (
            <small style={{ color: "red", fontSize: "12px" }}>
              {errors.password}
            </small>
          )}
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
          style={{ height: "60px", marginTop: "10px" }}
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
                fontSize: "12px",
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
