import React from 'react';
import './Sections.css'; // Ensure your CSS file is properly imported

import Appa4 from '../Image/Appa4.png';
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function HomeSection() {
  const handleButtonClick = () => {
    window.open('https://wa.me/9381993739?text=I%20need%20an%20Appointment%20for%20a%20Dental%20Treatment.%20Can%20I%20have%20your%20Assistance?', '_blank');
  };

  return (
    <motion.div className="home-section" variants={textVariants} initial="initial" animate="animate">
      <div className='frame'>
      <div className="content-wrapper">
        {/* Image at the Top */}

        <motion.img className="hero" src={Appa4} alt="Appa4" variants={textVariants} />

        {/* Below Image: Left Side - Text and Button */}
        <motion.div className="text-wrapper" variants={textVariants}>
          <motion.h1 variants={textVariants} className='title'>Dr Sreekanth's Dental Clinic</motion.h1>
          <motion.p variants={textVariants} className='con'>Your comfort is our priority. Discover a dental experience that feels as good as
 it looks.
           </motion.p>
           
         

          <motion.button
            variants={textVariants}
            className="cta-button"
            onClick={handleButtonClick}
            aria-label="Message us"
          >
            Message us
          </motion.button>
        </motion.div>
      </div></div>
    </motion.div>
  );
}

export default HomeSection;
