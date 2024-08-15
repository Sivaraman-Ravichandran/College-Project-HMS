import React from "react";
import "./Lhero.css";
import { useNavigate } from "react-router-dom";
const Lhero = () => {
  const navigate = useNavigate();
  return (
    <>
      <img
        src="https://graph.org/file/c209d993ee26b77797e36.jpg"
        width={"1519px"}
        height={"615px"}
        alt="error"
      ></img>
      <div
        className="LContent"
        style={{ position: "absolute", top: "170px", left: "30px" }}
      >
        <h1 style={{ color: "black", lineHeight: "80px", fontSize: "55px" }}>
          FIND DOCTOR & BOOK <br></br>ONLINE
        </h1>
        <p style={{ color: "black", lineHeight: "35px" }}>
          Join thousands of satisfied users who have found the right doctors
          through our platform.<br></br> Start your journey to better health
          today by searching for the best healthcare professionals<br></br> in
          your area. Contact us for more information or to get started.
        </p>
        <button className="Lbtn" onClick={() => navigate("/login")}>
          Explore
        </button>
      </div>
    </>
  );
};

export default Lhero;
