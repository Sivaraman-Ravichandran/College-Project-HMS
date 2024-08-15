import React, { useState, useEffect } from "react";
import NavBar from "../Page/NavBar";
import "./DoctorPro.css";
import MediAct from "./MedicalAction";
import Exp from "./Experience";
import Dreview from "./Doctorreview";
import axios from "axios";
import { useParams } from "react-router-dom";
const Doctorprofile = () => {
  const [Ddetails, setDdetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `http://localhost:8080/DoctorDetailById/${id}`
      );
      console.log(response.data);
      setDdetails(response.data);
    };

    fetch();
  }, [id]);
  return (
    <>
      <NavBar />
      <div>
        <img
          src={Ddetails.bimg}
          width={"1475px"}
          style={{
            marginLeft: "20px",
            marginTop: "20px",
            borderRadius: "20px",
          }}
          alt="error"
        ></img>
        <img
          src={Ddetails.dimg}
          width={"300px"}
          style={{
            position: "absolute",
            left: "50px",
            top: "530px",
            borderRadius: "5%",
          }}
          alt="error"
        ></img>
        <h1 style={{ marginTop: "140px", marginLeft: "50px", color: "black" }}>
          {Ddetails.dname}
          <span style={{ fontSize: "28px", marginLeft: "20px", color: "grey" }}>
            {Ddetails.speciality}
          </span>
        </h1>
        <h2 style={{ marginLeft: "50px", color: "black" }}>
          {Ddetails.location}
        </h2>
        <h2 style={{ marginTop: "50px", marginLeft: "49px" }}>About</h2>
        <p style={{ marginLeft: "49px", lineHeight: "35px", fontSize: "21px" }}>
         {Ddetails.about}
        </p>
        <h1>
          <span
            style={{
              fontSize: "28px",
              marginLeft: "49px",
              marginTop: "80px",
              color: "grey",
            }}
          >
            🧑‍⚕{Ddetails.status}
          </span>
        </h1>
        <h1>
          <span
            style={{
              fontSize: "28px",
              position: "absolute",
              top: "1244px",
              left: "270px",
              color: "grey",
            }}
          >
            {Ddetails.fees}
          </span>
        </h1>
      </div>
      <MediAct item={Ddetails.actions} />

      <Exp item={Ddetails} />
      <Dreview item={Ddetails} />
    </>
  );
};

export default Doctorprofile;