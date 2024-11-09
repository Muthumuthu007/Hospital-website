import React from 'react';
import './App.css';
import Navbar from './Navbar';
import HomeSection from './Sections/HomeSection';
import ServiceSection from './Sections/ServiceSection';
import ContactSection from './Sections/ContactSection';
import AboutSection from './Sections/AboutSection';
import { Element } from 'react-scroll';
import Footer from './Sections/Footer';

function App() {
  return (
    <div className="App app-background">
      <Navbar title="HR Transport" />
      <div className="content"> {/* New content div */}
        <Element name="home" style={{ height: '100vh' }}>
          <HomeSection />
        </Element>
        <Element name="service">
          <ServiceSection />
        </Element>
        <Element name="about">
          <AboutSection />
        </Element>
        <Element name="contact">
          <ContactSection />
        </Element>
      </div>
      <Footer /> {/* Added Footer component here */}
    </div>
  );
}

export default App;
