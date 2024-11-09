// src/Sections/HomeSection.js
import React from 'react';
import './Sections.css'; // Ensure your CSS file is properly imported
import logo from '../logo.png'; // Adjust path to import the logo
import WhatsappIcon from '../WhatsappIcon.jpg'; 
import {motion} from "framer-motion";
const textVariants={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  },

}

function HomeSection() {
  const handleButtonClick = () => {
    window.open('https://wa.me/6369559660', '_blank'); // Opens the link in a new tab
  };
  
  return (
    <motion.div className="home-section"variants={textVariants} initial="initial" animate="animate">
      <motion.img src={logo} alt='Logo' variants={textVariants} /> {/* Use the imported logo */}
      <motion.h1 variants={textVariants} >Welcome to HR Transport</motion.h1>
      <motion.p variants={textVariants} >Your trusted partner in logistics and transport.</motion.p>
      <motion.button variants={textVariants}  className="cta-button"  onClick={handleButtonClick} aria-label="Get Started">
        <motion.img variants={textVariants} src={WhatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
        Message us
      </motion.button>{/* Call to Action button */}
    </motion.div>
  );
}

export default HomeSection;
