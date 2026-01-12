import React, { useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import MaleIcon from "@mui/icons-material/Male";
import TransgenderIcon from "@mui/icons-material/Transgender";
import FemaleIcon from "@mui/icons-material/Female";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import './regepass.css'
const Regpass = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [gender, setGender] = useState("Select Gender");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // First name validation
    if (!Firstname.trim()) {
      newErrors.firstname = "First name is required";
    }
    
    // Last name validation
    if (!Lastname.trim()) {
      newErrors.lastname = "Last name is required";
    }
    
    // Gender validation
    if (gender === "Select Gender") {
      newErrors.gender = "Please select a gender";
    }
    
    // Phone validation
    if (!Phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(Phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    
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
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    // Validate form first
    if (!validateForm()) {
      alert("Please fix the errors in the form");
      return;
    }
    
    setLoading(true);
    
    const payload = {
      id: Date.now(), // Add unique ID
      firstName: Firstname.trim(),
      lastName: Lastname.trim(),
      gender: gender,
      phone: Phone.trim(),
      email: Email.trim().toLowerCase(),
      password: Password,
      createdAt: new Date().toISOString()
    };

    try {
      // Try to save to                                                                                                                                            first
      const response = await fetch("http://localhost:3002/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Also save to localStorage as backup
        const localUsers = JSON.parse(localStorage.getItem("Total_users")) || [];
        localUsers.push(payload);
        localStorage.setItem("Total_users", JSON.stringify(localUsers));

        // Reset form and redirect
        setFirstname("");
        setLastname("");
        setGender("Select Gender");
        setPhone("");
        setEmail("");
        setPassword("");
        setErrors({});
        
        alert("Registration Successful! Saved to server.");
        window.location.href = "/auth/login";
      } else {
        throw new Error("Server responded with error");
      }
      
    } catch (error) {
      console.error("Server error:", error);
      
      // Fallback: Save only to localStorage if server fails
      const localUsers = JSON.parse(localStorage.getItem("Total_users")) || [];
      
      // Check email in localStorage too
      const isEmailExists = localUsers.some((user) => user.email === Email.toLowerCase());
      if (isEmailExists) {
        alert("Email already exists in local storage.");
        setLoading(false);
        return;
      }
      
      localUsers.push(payload);
      localStorage.setItem("Total_users", JSON.stringify(localUsers));
      
      alert("Registration saved locally (server not available).");
      window.location.href = "/auth/login";
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
    <div
      style={{
        minHeight: "480px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 0"
      }}
    >
      <div
        className=""
        style={{
          width: "480px",
          padding: "10px",
          paddingBottom: "10px",
        }}
      >
        {/* NAME ROW */}
        <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: "14px", fontWeight: 500 }}>
              FIRST NAME *
            </label>
            <div style={{ position: "relative" }}>
              <PersonIcon
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  color: "#777",
                }}
              />
              <input
                type="text"
                style={{
                  width: "100%",
                  height: "42px",
                  paddingLeft: "38px",
                  borderRadius: "5px",
                  border: errors.firstname ? "1px solid red" : "1px solid #ccc",
                  fontSize: "15px",
                }}
                value={Firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                  clearError("firstname");
                }}
                disabled={loading}
              />
            </div>
            {errors.firstname && (
              <small style={{ color: "red", fontSize: "12px" }}>
                {errors.firstname}
              </small>
            )}
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: "14px", fontWeight: 500 }}>
              LAST NAME *
            </label>
            <div style={{ position: "relative" }}>
              <PersonIcon
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  color: "#777",
                }}
              />
              <input
                type="text"
                style={{
                  width: "100%",
                  height: "42px",
                  paddingLeft: "38px",
                  borderRadius: "5px",
                  border: errors.lastname ? "1px solid red" : "1px solid #ccc",
                  fontSize: "15px",
                }}
                value={Lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                  clearError("lastname");
                }}
                disabled={loading}
              />
            </div>
            {errors.lastname && (
              <small style={{ color: "red", fontSize: "12px" }}>
                {errors.lastname}
              </small>
            )}
          </div>
        </div>

        {/* GENDER + PHONE */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "15px",
          }}
        >
         <div style={{ flex: 1 }}>
            <label style={{ fontSize: "15px", fontWeight: 500 }}>GENDER</label>
            <div className="dropdown">
              <button
                style={{ border: "1px solid #ccc",height:"42px" }}
                className="btn bg-white dropdown-toggle w-100"
                data-bs-toggle="dropdown"
              >
                {gender}
              </button>
              <ul className="dropdown-menu w-100">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setGender("Male")}
                  >
                    <MaleIcon fontSize="small" /> Male
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setGender("Female")}
                  >
                    <FemaleIcon fontSize="small" /> Female
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setGender("Other")}
                  >
                    <TransgenderIcon fontSize="small" /> Other
                  </button>
                </li>
              </ul>
            </div>
                   {errors.gender && (
              <small style={{ color: "red", fontSize: "12px" }}>
                {errors.gender}
              </small>
            )}
</div>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: "14px", fontWeight: 500 }}>
              PHONE *
            </label>
            <div style={{ position: "relative" }}>
              <LocalPhoneIcon
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  color: "#777",
                }}
              />
              <input
                type="tel"
                maxLength="10"
                style={{
                  width: "100%",
                  height: "42px",
                  paddingLeft: "38px",
                  borderRadius: "5px",
                  border: errors.phone ? "1px solid red" : "1px solid #ccc",
                  fontSize: "15px",
                }}
                value={Phone}
                onChange={(e) => {
                  // Allow only numbers
                  const value = e.target.value.replace(/\D/g, '');
                  setPhone(value);
                  clearError("phone");
                }}
                disabled={loading}
                placeholder="10-digit number"
              />
            </div>
            {errors.phone && (
              <small style={{ color: "red", fontSize: "12px" }}>
                {errors.phone}
              </small>
            )}
          </div>
        </div>

        {/* EMAIL */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontSize: "14px", fontWeight: 500 }}>EMAIL *</label>
          <div style={{ position: "relative" }}>
            <EmailIcon
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                color: "#777",
              }}
            />
            <input
              type="email"
              style={{
                width: "100%",
                height: "45px",
                paddingLeft: "38px",
                borderRadius: "5px",
                border: errors.email ? "1px solid red" : "1px solid #ccc",
                fontSize: "16px",
              }}
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
                clearError("email");
              }}
              disabled={loading}
              placeholder="example@email.com"
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
          <label style={{ fontSize: "14px", fontWeight: 500 }}>PASSWORD *</label>
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
                onClick={() => !loading && setShowPassword(false)}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: loading ? "not-allowed" : "pointer",
                  color: "#777",
                }}
              />
            ) : (
              <VisibilityOffIcon
                onClick={() => !loading && setShowPassword(true)}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: loading ? "not-allowed" : "pointer",
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
                borderRadius: "5px",
                border: errors.password ? "1px solid red" : "1px solid #ccc",
                fontSize: "16px",
              }}
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
                clearError("password");
              }}
              disabled={loading}
              placeholder="At least 6 characters"
            />
          </div>
          {errors.password && (
            <small style={{ color: "red", fontSize: "12px" }}>
              {errors.password}
            </small>
          )}
        </div>

        {/* BUTTON */}
        <button
          className="btn btn-primary w-100"
          style={{
            height: "45px",
            fontSize: "16px",
            fontWeight: 700,
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px"
          }}
          onClick={handleRegister}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Registering...
            </>
          ) : (
            "Register"
          )}
        </button>

        <p style={{ fontSize: "14px", textAlign: "center", marginTop: "10px" }}>
          Already have an account?
          <a
            href="/auth/login"
            style={{ marginLeft: "5px", textDecoration: "none" }}
          >
            Login
          </a>
        </p>
        <h6 style={{ fontSize: "10px", textAlign: "center" }}>
          By registering, I agree to Commercehope <a href="">Terms</a> and{" "}
          <a href="">Privacy policy</a>.
        </h6>
      </div>
    </div>
  );
};

export default Regpass;