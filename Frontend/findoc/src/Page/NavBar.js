import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../assets/finddoc_logo.jpeg";
import Profile from "../assets/person-circle.svg";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/hospital">Hospitals</Link>
        </li>
        <li>
          <Link to="/doctors">Doctors</Link>
        </li>
        <li>
          <Link to="/specialists">Specialists</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
      </ul>
      <div className="navbar-profile">
        <Link to="/profile">
          <img src={Profile} alt="Profile" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
