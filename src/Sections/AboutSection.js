// src/Sections/AboutSection.js
import React from 'react';
import { motion } from 'framer-motion';
import './Sections.css';

function AboutSection() {
  // Define animation variants for the elements
  const aboutVariants = {
    initial: { x: '100%', opacity: 0 },  // Start from the right
    animate: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 1 }
    },
  };

  const valVariants = {
    initial: { x: '-100%', opacity: 0 },  // Start from the left
    animate: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 1 }
    },
  };

  return (
    <section id="about" className="section about-section">
      <br />
      <br />
      <h1 className="ab">About Us</h1>

      {/* Use whileInView to trigger the animation on scroll */}
      <motion.div 
        className="about" 
        initial="initial" 
        whileInView="animate" 
        variants={aboutVariants}
        viewport={{ once: false, amount: 0.2 }}  // Trigger whenever 20% of the element is in view
      >
        <p>Hasini Roadways is a trusted transportation service provider based in Chennai,</p>
        <p>Tamil Nadu. Established with the mission to offer reliable and efficient logistics solutions,</p>
        <p>we specialize in transporting goods and providing relocation services for both residential and commercial clients.</p>
      </motion.div>

      <motion.div 
        className="val" 
        initial="initial" 
        whileInView="animate" 
        variants={valVariants}
        viewport={{ once: false, amount: 0.2 }}  // Trigger whenever 20% of the element is in view
      >
        <p>Our commitment to customer satisfaction and timely delivery makes us a preferred choice in the region.</p>
        <p>Whether it's local transportation within Chennai or long-distance logistics across Tamil Nadu,</p>
        <p>Hasini Roadways ensures your belongings are handled with utmost care.</p>
      </motion.div>
    </section>
  );
}

export default AboutSection;
