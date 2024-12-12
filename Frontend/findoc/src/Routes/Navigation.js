import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "../Page/Authentication/Auth";
import Home from "../Page/Home";
import Hospital from "../Page/Hospital";
import Doctors from "../Page/Doctors";
import Specialists from "../Page/Specialist";
import Events from "../Page/Events";
import Locations from "../Page/Location";
import Profile from "../Page/Profile";
import HospitalDetail from "../Page/HospitalDetail";
import DoctorDetail from "../Page/DoctorDetail";
import LandingPage from "../Page/Landingpage/LandingPage";
import DoctorPage from "../Page/DoctorPage";
import Dashboard from "../Page/Admin/DashBoard";
import DoctorDashboard from "../Page/Admin/Doctor-Dashboard/DoctorDashboard";
import DoctorProfile from "../Component/DoctorProfile";
function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/specialists" element={<Specialists />} />
        <Route path="/events" element={<Events />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/hospital/:id" element={<HospitalDetail />} />
        <Route path="/doctor/:id" element={<DoctorDetail />} />
        <Route path="/special/:id" element={<DoctorPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-doctor/:id" element={<DoctorDashboard />} />
        <Route path="/doctorProfile" element={<DoctorProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
