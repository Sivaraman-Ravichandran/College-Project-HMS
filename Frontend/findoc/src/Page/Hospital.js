import React, { useState, useEffect } from "react";
import axios from "axios";
import HospitalCard from "../Component/HospitalCard";
import "./Hospital.css";
import NavBar from "./NavBar";
import Footer from '../Component/Footer';
const Hospital = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/HospitalCardGet"
        );
        const transformedHospitals = response.data.map((hospital) => ({
          id: hospital.id,
          name: hospital.hname,
          address: hospital.hlocation,
          image: hospital.himg,
        }));
        setHospitals(transformedHospitals);
        setLoading(false);
      } catch (error) {
        setError("Error fetching hospitals");
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredHospitals = hospitals.filter(
    (hospital) =>
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div className="hospital-container">
        <h1>Hospitals</h1>
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search hospitals..."
            className="search-input"
          />
        </div>
        <div className="hospital-cards-container">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            filteredHospitals.map((hospital) => (
              <HospitalCard key={hospital.id} {...hospital} />
            ))
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Hospital;
