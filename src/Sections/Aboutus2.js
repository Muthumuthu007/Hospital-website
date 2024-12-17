import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Sections.css';
import video from '../Image/video1.mp4'; 

function AboutSection2() {
    return (
        <>
           <div className='frame2'>
           <section id="about" className="section about-section">
            <div className="static-text-below">
                <h2>New to Our Clinic?</h2>
                <p style={{ textAlign: 'center'}}>
                    Relax and let us guide you through a seamless journey to better oral health. 
                    From your first consultation to personalized treatment plans, 
                    the doctor ensures every detail is tailored just for you. Step in,
                     and discover a dental experience designed to make you smile brighter!.
                     
                </p>
            </div>

            {/* Video Section Below Static Text */}
            <div className="video-below">
                <video className="clinic-video" controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            </section>
        </div>
        </>
    );
}

export default AboutSection2;
