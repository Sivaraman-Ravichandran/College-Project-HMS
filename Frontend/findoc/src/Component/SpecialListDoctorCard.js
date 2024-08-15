import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({ name, image }) => {
  return (
    <div className="doctor-card">
      <div className="card-icon">
        <img src={image} alt={name} className="icon-image" />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default DoctorCard;
