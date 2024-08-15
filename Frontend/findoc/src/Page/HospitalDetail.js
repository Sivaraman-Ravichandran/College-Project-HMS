import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DoctorProfile from "../Component/DoctorProfile";
import ContactForm from "../Component/ContactForm";
import NavBar from "./NavBar";
import "./HospitalDetail.css";

const HospitalDetail = () => {
  const { id } = useParams();
  const [hospital, setHospital] = useState(null);
  const [searchTerm] = useState("");

  useEffect(() => {
    const fetchHospitalData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/HospitalById/${id}`
        );
        console.log(response);
        setHospital(response.data);
      } catch (error) {
        console.error("Error fetching hospital data:", error);
      }
    };
    fetchHospitalData();
  }, [id]);
  if (!hospital) {
    return <div className="loading-div">Loading hospital details...</div>;
  }

  const filteredDoctors = hospital.doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div className="hospital-detail-container">
        <div className="hospital-about">
          <img
            src={hospital.image}
            alt="Hospital"
            className="hospital-image"
            style={{ filter: "brightness(50%)" }}
          />
          <div className="hosp-head">
            <div className="hosp-detail">
              <h1>{hospital.name}</h1>
              <div className="location">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="white"
                  className="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <p>{hospital.address}</p>
              </div>
              <div className="phone">
                <a className="phone-link" href={`tel:${hospital.phone}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                  <p>{hospital.phone}</p>
                </a>
              </div>
            </div>
            <div className="contact-form">
              <ContactForm name={hospital.name} />
            </div>
          </div>
        </div>
        <div className="about">
          <h1>About the hospital</h1>
          <p>{hospital.about}</p>
        </div>
        <div>
          <h1 style={{ textAlign: "center" }}>Doctors</h1>
          <div className="doctor-cards-container">
            {filteredDoctors.map((doctor, index) => (
              <DoctorProfile key={index} details={doctor} />
            ))}
          </div>
        </div>
        <div className="services">
          <h2>Services</h2>
          <ul>
            {hospital.services.map((service, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div className="news-events-container">
          <div className="news">
            <h2>News</h2>
            <ul>
              {hospital.news.map((newsItem, index) => (
                <li key={index}>{newsItem}</li>
              ))}
            </ul>
          </div>
          <div className="events">
            <h2>Events</h2>
            <ul>
              {hospital.events.map((eventItem, index) => (
                <li key={index}>{eventItem}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalDetail;
