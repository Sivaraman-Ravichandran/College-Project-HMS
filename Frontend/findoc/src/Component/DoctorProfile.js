import React from "react";
function DoctorProfile({details}) {
  return (
   
      <div
        className="specialty-card"
      >
        <div className="card-image">
          <img src={details.img} alt={details} />
        </div>
        <div className="card-content">
          <h3>{details.specialist}</h3>
        </div>
      </div>
  );
}

export default DoctorProfile;
