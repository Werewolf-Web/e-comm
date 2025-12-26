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

const Regpass = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [Firstname, setFirstname] = useState([]);
  const [Lastname, setLastname] = useState([]);
  const [gender, setGender] = useState("Select Gender");
  const [Phone, setPhone] = useState([]);
  const [Email, setEmail] = useState([]);
  const [Password, setPassword] = useState([]);
  // const [data, setData] = useState([])

  const handleRegister = () => {
    const payload = {
      firstName: Firstname,
      lastName: Lastname,
      gender: gender,
      phone: Phone,
      email: Email,
      password: Password,
    };

    const existingUsers = JSON.parse(localStorage.getItem("Total_users")) || [];
    const updatedUsers = [...existingUsers, payload];

    localStorage.setItem("Total_users", JSON.stringify(updatedUsers));

    console.log("Saved Users:", updatedUsers);
    setFirstname("");
    setLastname("");
    setGender("select Gender");
    setPhone("");
    setEmail("");
    setPassword("");
    alert("Registration Successful");
    // // basic validation
    // if (
    //   !Firstname ||
    //   !Lastname ||
    //   gender === "Select Gender" ||
    //   !Phone ||
    //   !Email ||
    //   !Password
    // ) {
    //   alert("Please fill all fields");
    //   return;
    // }

    // API call can go here
  };

  return (
    <div
      style={{
        height: "480px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
              FIRST NAME
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
                  border: "1px solid #ccc",
                  fontSize: "15px",
                }}
                value={Firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: "14px", fontWeight: 500 }}>
              LAST NAME
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
                  border: "1px solid #ccc",
                  fontSize: "15px",
                }}
                value={Lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* GENDER + PHONE */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "15px",
            height: "42px",
          }}
        >
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: "15px", fontWeight: 500 }}>GENDER</label>
            <div className="dropdown">
              <button
                style={{ border: "1px solid #ccc" }}
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
          </div>

          <div style={{ flex: 1 }}>
            <label style={{ fontSize: "14px", fontWeight: 500 }} maxLength={9}>
              PHONE
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
                style={{
                  width: "100%",
                  height: "42px",
                  paddingLeft: "38px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  fontSize: "15px",
                }}
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* EMAIL */}
        <div style={{ marginBottom: "15px", paddingTop: "15px" }}>
          <label style={{ fontSize: "14px", fontWeight: 500 }}>EMAIL</label>
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
                border: "1px solid #ccc",
                fontSize: "16px",
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
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* BUTTON */}
        <button
          className="btn btn-primary w-100"
          style={{
            height: "34px",
            fontSize: "12px",
            fontWeight: 700,
            marginTop: "10px",
          }}
          onClick={handleRegister}
        >
          Register
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
