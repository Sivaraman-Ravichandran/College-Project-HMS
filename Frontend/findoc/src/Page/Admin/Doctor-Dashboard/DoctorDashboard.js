import React, { useState } from "react";
import "./DoctorDashboard.css"; // Import CSS for styling
import Logo from "../../../assets/finddoc.png";
import DoctorProfile from "./Profile/DoctorProfile";
import { useParams } from "react-router-dom";
import Account from "../../Account";
const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("doctorProfile"); // Track the active section
  const { id } = useParams();
  const toggleDoctorDropdown = () => {
    setActiveSection("doctorProfile");
  };
  const OpenAccount = () => {
    setActiveSection("acountSetting");
  };
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="profile">
          <img src={Logo} alt="Profile" />
          <h3>FindDoc</h3>
          <p>Doctor's-Admin</p>
        </div>
        <nav className="sidebar-nav">
          <div className="dropdown">
            <a href="#doctors" onClick={toggleDoctorDropdown}>
              Doctors
            </a>
          </div>

          <a href="#accounts" onClick={OpenAccount}>
            Accounts
          </a>
        </nav>
      </aside>

      <main className="main-content">
        {/* Conditional rendering based on the active section */}
        {activeSection === "doctorProfile" && <DoctorProfile doctorId={id} />}
        {activeSection === "acountSetting" && <Account />}
        {/* Other sections can be rendered based on different activeSection values */}
      </main>
    </div>
  );
};

export default Dashboard;
