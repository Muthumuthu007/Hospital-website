import React from 'react';
import { Facebook, Linkedin, MapPin, Phone } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contentt}>
          <div className={styles.clinicInfo}>
            <h3 className={styles.clinicName}>Dr Sreekanth's Dental Clinic</h3>
            <p className={styles.clinicTagline}>Providing Quality Dental Care</p>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/dr-sreekanth-krishnamurthy-9a447033"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.linkedin}`}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.facebook.com/DrSKSDentalClinic"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.facebook}`}
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://maps.app.goo.gl/PzebSirijcnS4dsc7"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.maps}`}
              aria-label="Google Maps"
            >
              <MapPin size={24} />
            </a>
            <a
              href="tel:9381993739"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.phone}`}
              aria-label="Call"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Dr Sreekanth's Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
