import React from 'react';
import './Footer.css'; // Import a CSS file for styling if needed

const Footer = () => {
  return (
    <footer className="footer"> {/* Footer container */}
      <div className="footer-content"> {/* Content container */}
        <div className="footer-section about"> {/* About section */}
          <h3>About Us</h3>
          <p>AromaLuxe. <br /> A premium perfume store</p>
        </div>
        <div className="footer-section links"> {/* Quick links section */}
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li> {/* Link to Home page */}
            <li><a href="/contact">Contact</a></li> {/* Link to Contact page */}
            <li><a href="/about">About</a></li> {/* Link to About page */}
          </ul>
        </div>
        <div className="footer-section contact"> {/* Contact section */}
          <h3>Contact Us</h3>
          <p>Email: admin@aromaluxe.com</p> {/* Contact email */}
          <p>Phone: +123 456 7890</p> {/* Contact phone number */}
        </div>
      </div>
      <div className="footer-bottom"> {/* Footer bottom */}
        &copy; {new Date().getFullYear()} AromaLuxe. All rights reserved. {/* Copyright */}
      </div>
    </footer>
  );
};

export default Footer; // Export the Footer component
