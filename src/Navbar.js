// src/Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll'; // Ensure this is from react-scroll

function Navbar({ title }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">{ 'HR Transport'}</div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70} // Adjust based on navbar height
              duration={500}
              className="navbar-link"
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-link"
            >
              Service
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-link"
            >
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
