import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import HomeSection from './Sections/HomeSection';
import ServiceSection from './Sections/ServiceSection';
import ContactSection from './Sections/ContactSection';
import AboutSection from './Sections/AboutSection';
import Aboutus2 from './Sections/Aboutus2';

import Rateus from './Sections/Rateus';
import Footer from './Sections/Footer';
import Service1 from './Sections/Service/Service1';
import Service2 from './Sections/Service/Service2';
import Service3 from './Sections/Service/Service3';
import Service4 from './Sections/Service/Service4';
import Service5 from './Sections/Service/Service5';
import Service6 from './Sections/Service/Service6';
import Service7 from './Sections/Service/Service7';
import logo from './Image/Sreekanth’s Dental clinic.png';


import { Element } from 'react-scroll';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashScreenVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isSplashScreenVisible) {
    return (
      <div className="splash-screen">
        <img src={logo} alt="Logo" className="splash-logo" />
      </div>
    );
  }

  return (
    <Router>
      <div className="App app-background">
        <Navbar title="HR Transport" />

        <Routes>
          {/* Main Landing Page */}
          <Route
            path="/"
            element={
              <div className="content">
                <Element name="home" style={{ height: '100vh' }}>
                  <HomeSection />
                </Element>
                <Element name="service">
                  <ServiceSection />
                </Element>
                <Element name="about">
                  <AboutSection />
                </Element>
                <Element >
                  <Aboutus2/>
                </Element>
                <Element name="contact">
                  <ContactSection />
                </Element>
                <Element name="rateus">
                  <Rateus />
                </Element>
                <Footer />
              </div>
            }
          />

          {/* Individual Service Pages */}
          <Route path="/service1" element={<Service1 />} />
          <Route path="/service2" element={<Service2 />} />
          <Route path="/service3" element={<Service3 />} />
          <Route path="/service4" element={<Service4 />} />
          <Route path="/service5" element={<Service5 />} />
          <Route path="/service6" element={<Service6 />} />
          <Route path="/service7" element={<Service7 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
