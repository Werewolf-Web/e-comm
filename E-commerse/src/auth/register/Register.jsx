import React from "react";
import Regpass from "../../components/e-pass/Regpass";

const Register = () => {
  return (
    <>
      <div
        className=" w-full"
        style={{
          height: "690px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
                  backgroundColor: "rgba(225, 225, 225, 0.9)",
        }}
      >
        <div
          className="bg-white"
          style={{
            height: "580px",
            width: "500px", borderRadius: "10px"
          }}
        >
          <div>
            <h3 style={{alignItems:"center",textAlign:"center",paddingTop:"4px",fontWeight:"700"}}>Sign up</h3>
            <h6 style={{alignItems:"center",textAlign:"center",paddingTop:"1px",fontWeight:"340"}}>Create your account

</h6>
          </div>
          <Regpass/>
        </div>
      </div>
    </>
  );
};

export default Register;
