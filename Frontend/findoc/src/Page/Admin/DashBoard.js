import React, { useState } from "react";
import "./Dashboard.css"; // Import CSS for styling
import DoctorForm from "./AddDoctor/AddDoctor"; // Assuming the form component is named DoctorForm
import DoctorList from "./DoctorList/DoctorList"; // Import the DoctorList component
import HospitalList from "./HospitalList/HospitalList";
import Logo from "../../assets/finddoc.png";
const Dashboard = () => {
  const [isHospitalDropdownOpen, setIsHospitalDropdownOpen] = useState(false);
  const [isDoctorDropdownOpen, setIsDoctorDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track the active section

  const toggleHospitalDropdown = () => {
    setIsHospitalDropdownOpen(!isHospitalDropdownOpen);
  };

  const toggleDoctorDropdown = () => {
    setIsDoctorDropdownOpen(!isDoctorDropdownOpen);
  };

  const handleAddDoctorClick = () => {
    setActiveSection("add-doctor"); // Set the active section to 'add-doctor'
  };

  const handleHospitalListClick = () => {
    setActiveSection("hospital-list"); // Set the active section to 'hospital-list'
  };

  const handleDoctorListClick = () => {
    setActiveSection("doctor-list"); // Set the active section to 'doctor-list'
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="profile">
          <img src={Logo} alt="Profile" />
          <h3>FindDoc</h3>
          <p>Chief-Admin</p>
        </div>
        <nav className="sidebar-nav">
          <div className="dropdown">
            <a href="#hospitals" onClick={toggleHospitalDropdown}>
              Hospitals
            </a>
            {isHospitalDropdownOpen && (
              <div className="dropdown-content">
                <a href="#hospital1" onClick={handleAddDoctorClick}>
                  Add Doctor
                </a>
                <a href="#hospital2" onClick={handleHospitalListClick}>
                  Hospitals List
                </a>
              </div>
            )}
          </div>

          <div className="dropdown">
            <a href="#doctors" onClick={toggleDoctorDropdown}>
              Doctors
            </a>
            {isDoctorDropdownOpen && (
              <div className="dropdown-content">
                <a href="#hospital1" onClick={handleAddDoctorClick}>
                  Add Doctor
                </a>
                <a href="#doctor1">Doctor Clinic</a>
                <a href="#doctor2" onClick={handleDoctorListClick}>
                  Doctors List
                </a>
              </div>
            )}
          </div>

          <a href="#accounts">Accounts</a>
        </nav>
      </aside>

      <main className="main-content">
        {/* Conditional rendering based on the active section */}
        {activeSection === "add-doctor" && <DoctorForm />}
        {activeSection === "hospital-list" && <HospitalList />}
        {activeSection === "doctor-list" && <DoctorList />}
        {/* Other sections can be rendered based on different activeSection values */}
      </main>
    </div>
  );
};

export default Dashboard;
