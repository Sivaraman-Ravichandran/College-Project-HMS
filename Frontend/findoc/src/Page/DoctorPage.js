import React from "react";
import DoctorCard from "../Component/SpecialListDoctorCard";
import doctorData from "../Component/doctorData";
import "./DoctorPage.css";

const DoctorPage = () => {
  return (
    <div className="doctor-page">
      <div className="doctor-search-container">
        <center></center>
      </div>
      <div className="doctor-cards-container">
        {doctorData.map((doctor, index) => (
          <DoctorCard
            key={index}
            name={doctor.name}
            specialty={doctor.specialty}
            hospital={doctor.hospital}
            image={doctor.image}
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorPage;
