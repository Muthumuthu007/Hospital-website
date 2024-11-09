import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion'; // Import framer-motion for animation

function Footer() {
  // Define animation variants
  const footerVariants = {
    initial: { opacity: 0, y: 50 },  // Start from below and invisible
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },  // End in original position
  };

  return (
    <motion.footer
      className="footer"
      initial="initial"
      whileInView="animate"
      variants={footerVariants}  // Apply animation variants
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when the footer is in view
    >
      <p>Proprietor: Selvarani R&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GST Registration Number: 33MBEPS7815Q1ZO</p>
      <p><b>Location:</b> 10/11, Meenakchi Street, Laxmi Amman Nagar, Chennai, Tamil Nadu, 600118</p>
    </motion.footer>
  );
}

export default Footer;
