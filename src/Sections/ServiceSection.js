import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Sections.css';

const textVariants = {
  initial: { y: 200, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
};

function ServiceSection() {
  const navigate = useNavigate();

  const services = [
    { id: 1, title: 'Gum Health',  path: '/service1' },
    { id: 2, title: 'Tooth Conservation',  path: '/service2' },
    { id: 3, title: 'Dental and Jaw Surgeries', path: '/service3' },
    { id: 4, title: 'Artificial Teeth',  path: '/service4' },
    { id: 5, title: 'Cosmetic Dentistry', path: '/service5' },
    { id: 6, title: 'Pedodontics',  path: '/service6' },
    { id: 7, title: 'Full Mouth Rehabilitation',  path: '/service7' },
  ];

  return (
    <div className='frame1'>
    <section id="service" className="section service-section">
   
      <h1
        className="sc"
        initial="initial"
        whileInView="animate"
        variants={textVariants}
      >
        Our Services
      </h1>

      <motion.div initial="initial" whileInView="animate" variants={textVariants} className="box-container">
        {services.map((service) => (
          <div
            key={service.id}
            className="one"
            onClick={() => navigate(service.path)} // Navigate to the service's page
          >
            <span className="service-title">{service.title}</span>
            <span className="service-more">{service.more}</span>
          </div>
        ))}
      </motion.div>
     
    </section> </div>
  );
}

export default ServiceSection;
