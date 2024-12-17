import React, { useState, useEffect } from 'react';     
import { motion, AnimatePresence } from 'framer-motion';      
import './Sections.css';    
import Clinic from '../Image/Clinic.jpg';    
import Clinic1 from '../Image/Clinic1.jpg';   
import Clinic2 from '../Image/Clinic2.jpg';  
import Clinic3 from '../Image/Clinic4.jpg';   
import Clinic4 from '../Image/Clinic5.jpg';  
import video from '../Image/video1.mp4';





function AboutSection() {
  const slides = [
    {
      image: Clinic,
      text: `At Dr. Sreekanth's Dental Clinic, we bring over 30 years of expertise in providing painless and premium dental experiences. With a personalized approach, Dr. Sreekanth ensures every patient receives the best care, offering tailored solutions without intermediaries. Beyond the clinic, Dr. Sreekanth is a dedicated member of the Lions Club, actively helping underprivileged patients access world-class treatment, embodying our commitment to compassionate and quality dental care for all.`,
    },
    {
      image: Clinic1,
      text: `At Dr. Sreekanth's Dental Clinic, we bring over 30 years of expertise in providing painless and premium dental experiences. With a personalized approach, Dr. Sreekanth ensures every patient receives the best care, offering tailored solutions without intermediaries. Beyond the clinic, Dr. Sreekanth is a dedicated member of the Lions Club, actively helping underprivileged patients access world-class treatment, embodying our commitment to compassionate and quality dental care for all.`,
    },
    {
      image: Clinic2,
      text: `At Dr. Sreekanth's Dental Clinic, we bring over 30 years of expertise in providing painless and premium dental experiences. With a personalized approach, Dr. Sreekanth ensures every patient receives the best care, offering tailored solutions without intermediaries. Beyond the clinic, Dr. Sreekanth is a dedicated member of the Lions Club, actively helping underprivileged patients access world-class treatment, embodying our commitment to compassionate and quality dental care for all.`,
    },
    {
      image: Clinic3,
      text: `At Dr. Sreekanth's Dental Clinic, we bring over 30 years of expertise in providing painless and premium dental experiences. With a personalized approach, Dr. Sreekanth ensures every patient receives the best care, offering tailored solutions without intermediaries. Beyond the clinic, Dr. Sreekanth is a dedicated member of the Lions Club, actively helping underprivileged patients access world-class treatment, embodying our commitment to compassionate and quality dental care for all.`,
    },
    {
      image: Clinic4,
      text: `At Dr. Sreekanth's Dental Clinic, we bring over 30 years of expertise in providing painless and premium dental experiences. With a personalized approach, Dr. Sreekanth ensures every patient receives the best care, offering tailored solutions without intermediaries. Beyond the clinic, Dr. Sreekanth is a dedicated member of the Lions Club, actively helping underprivileged patients access world-class treatment, embodying our commitment to compassionate and quality dental care for all.`,
    },
  ];



  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const slideVariants = {
    initial: { opacity: 0, x: 0 }, 
    animate: { opacity: 1, x: 0, transition: { duration: 1 } }, 
    exit: { opacity: 0, x: 0, transition: { duration: 1 } }, 
  };

  return (
    <div className='frame2'>
      <section id="about" className="section about-section">
        <h1 className="ab">About Us</h1>

        <div className="about-content-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].text}
              className="about-text"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <p>{slides[currentSlide].text}</p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].image}
              className="about-image"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <img src={slides[currentSlide].image} alt={`Slide ${currentSlide}`} />
            </motion.div>
          </AnimatePresence>
        </div>      
      </section>
    </div>
  );
}

export default AboutSection;
