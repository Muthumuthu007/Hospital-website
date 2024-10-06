// src/Sections/AboutSection.js
import React from 'react';
import './Sections.css';


function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <br></br>
      <br></br>
      <h1 className='ab'>About Us</h1>
      <div className='about'>
      <p>Hasini Roadways is a trusted transportation service provider based in Chennai,</p>
      <p> Tamil Nadu. Established with the mission to offer reliable and efficient logistics solutions</p>
      <p> we specialize in transporting goods and providing relocation services for both residential and commercial clients..</p>
      <br>
      </br>
      </div>
      <div className='val'>
      <p>Our commitment to customer satisfaction and timely delivery makes us a preferred choice in the region.</p>
      <p> Whether it's local transportation within Chennai or long-distance logistics across Tamil Nadu, </p>
      <p>Hasini Roadways ensures your belongings are handled with utmost care.</p>
      <br>
      </br>
      </div>
      <div className='va'>
      <p><strong>Proprietor:</strong> Selvarani R</p>
      <br>
      </br>
      <p><b>GST Registration Number: </b>33MBEPS7815Q1ZO</p><br>
      </br>
      <p>Location: 10/11, Meenakchi Street, Laxmi Amman Nagar, Chennai, Tamil Nadu, 600118</p>
      </div>
    </section>
  );
}

export default AboutSection;
