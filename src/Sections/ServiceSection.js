// src/Sections/ServiceSection.js
import React from 'react';
import './Sections.css';
import service1 from '../service1.png'; 
import service2 from '../service2.jpg'; 
import service3 from '../service3.jpg'; 
import service4 from '../service4.jpg'; 
import service5 from '../service5.jpg'; 
import service6 from '../service6.jpg'; 

function ServiceSection() {
  return (
    <section id="service" className="section service-section">
      <h1 className='sc'>Our Services</h1>
      <div className="container">
      <div className='one'>
        <img src={service1} alt="Service 1" />
        <p>Long Format Vehicles</p>
      </div>
      <div className='one'>
        <img src={service2} alt="Service 1" />
        <p>Mini Type Vehicle</p>
      </div>
      <div className='one'>
        <img src={service3} alt="Service 1" />
        <p>Long Distance vehicle</p>
      </div>
      <div className='one'>
        <img src={service4} alt="Service 1" />
        <p>Containered Vehicle</p>
      </div>
      <div className='one'>
        <img src={service5} alt="Service 1" />
        <p>Eicher type Vehicle</p>
      </div>
      <div className='one'>
        <img src={service6} alt="Service 1" />
        <p>Compact Vechicles</p>
      </div>
    </div>

    </section>
  );
}

export default ServiceSection;
