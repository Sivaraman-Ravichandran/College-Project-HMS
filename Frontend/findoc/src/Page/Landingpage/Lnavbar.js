import React from "react";
import "./Lnavbar.css";
import Logo from '../../assets/finddoc_logo.jpeg'
import Profile from "../../assets/person-circle.svg";

const Navbar = () => {
  return (
    <nav className="navbar-landing">
      <div className="logo">
        <img
          src={Logo}
          alt="error"
        />
      </div>

      <ul className="nav-links">
        <li>
          <a href="#home" className="link1">
            Home
          </a>
        </li>
        <li>
          <a href="#hospital" className="link2">
            Our Doctors
          </a>
        </li>
        <li>
          <a href="#doctors" className="link3">
            Features
          </a>
        </li>
        <li>
          <a href="#specialist" className="link4">
            Review
          </a>
        </li>
        <li>
          <a href="#events" className="link5">
            Contact Us
          </a>
        </li>
        <li>
        <img src={Profile} alt="Profile" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
