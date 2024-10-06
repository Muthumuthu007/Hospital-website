// src/Sections/HomeSection.js
import React from 'react';
import './Sections.css'; // Ensure your CSS file is properly imported
import logo from '../logo.png'; // Adjust path to import the logo
import WhatsappIcon from '../WhatsappIcon.jpg'; 

function HomeSection() {
  const handleButtonClick = () => {
    window.open('https://wa.me/6369559660', '_blank'); // Opens the link in a new tab
  };
  
  return (
    <div className="home-section">
      <img src={logo} alt='Logo' /> {/* Use the imported logo */}
      <h1>Welcome to HR Transport</h1>
      <p>Your trusted partner in logistics and transport.</p>
      <button className="cta-button" onClick={handleButtonClick} aria-label="Get Started">
        <img src={WhatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
        Message us
      </button>{/* Call to Action button */}
    </div>
  );
}

export default HomeSection;
