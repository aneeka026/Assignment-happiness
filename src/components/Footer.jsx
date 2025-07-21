import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Happiness Plans. All rights reserved.</p>
        <p>Contact: info@happinessplans.com | +91-9876543210</p>

        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:info@happinessplans.com"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
