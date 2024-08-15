import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./HospitalCard.css";

const HospitalCard = (item) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/hospital/${item.id}`);
  };

  
  return (
    <div className="hospital-card" onClick={handleCardClick}>
      <img src={item.image} alt="error" className="hospital-image" />
      <div className="hospital-info">
        <h2>{item.name}</h2>
        <p>{item.address}</p>
      </div>
    </div>
  );
};

HospitalCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default HospitalCard;
