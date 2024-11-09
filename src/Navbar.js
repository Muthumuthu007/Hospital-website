// src/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">HR Transport</div>
        
        {/* Hamburger Icon */}
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-link"
              onClick={() => setMenuOpen(false)} // Close menu on click
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
              onClick={() => setMenuOpen(false)}
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
              onClick={() => setMenuOpen(false)}
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
              onClick={() => setMenuOpen(false)}
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
