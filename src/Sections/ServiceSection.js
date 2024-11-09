// src/Sections/ServiceSection.js
import React from 'react';
import { motion } from 'framer-motion';
import './Sections.css';
import service1 from '../service1.png'; 
import service2 from '../service2.jpg'; 
import service3 from '../service3.jpg'; 
import service4 from '../service4.jpg'; 
import service5 from '../service5.jpg'; 
import service6 from '../service6.jpg'; 

const textVariants = {
  initial: {
    y: 200, // Start slightly below
    opacity: 0,
  },
  animate: {
    y: 0, // Move to default position
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function ServiceSection() {
  return (
    <section id="service" className="section service-section">
      <motion.h1 
        className='sc'
        initial="initial"
        whileInView="animate"
        variants={textVariants}
      >
        Our Services
      </motion.h1>
      <div className="container">
        {[{src: service1, label: 'Long Format Vehicles'},
          {src: service2, label: 'Mini Type Vehicle'},
          {src: service3, label: 'Long Distance vehicle'},
          {src: service4, label: 'Containered Vehicle'},
          {src: service5, label: 'Eicher type Vehicle'},
          {src: service6, label: 'Compact Vehicles'}
        ].map((service, index) => (
          <motion.div 
            className='one' 
            key={index}
            initial="initial"
            whileInView="animate"
            variants={textVariants}
          >
            <img src={service.src} alt={service.label} />
            <p>{service.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
