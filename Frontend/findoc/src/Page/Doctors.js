import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Component/DoctorCard.css";
import DoctorCard from "../Component/DoctorCard";
import "./Doctors.css";
import NavBar from "./NavBar";
import Footer from '../Component/Footer';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [doctorsData, setDoctorsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/doctorCardGet")
      .then((response) => {
        setDoctorsData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching doctors data");
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDoctors = doctorsData.filter(
    (doctor) =>
      doctor.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div className="doctors-container">
        <h1>Doctors</h1>
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search doctors..."
            className="search-input"
          />
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="doctor-cards-container">
            {filteredDoctors.map((doctor, index) => (
              <DoctorCard key={index} {...doctor} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Doctors;
