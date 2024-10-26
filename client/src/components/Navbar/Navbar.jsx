import React, { useState } from 'react'; // Import React and useState hook
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom for navigation
import './Navbar.css'; // Import custom CSS for the Navbar

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage whether the navbar is open or closed

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the state to open or close the navbar
  };

  return (
    <nav className="navbar"> {/* Navbar container */}
      <div className="navbar-brand"> {/* Container for the brand name */}
        <NavLink to="/" className="brand-name">AromaLuxe</NavLink> {/* Link to the home page with brand name */}
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}> {/* Links container, add 'active' class if navbar is open */}
        <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink> {/* Link to Home page */}
        <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink> {/* Link to About page */}
        <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink> {/* Link to Contact page */}
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}> {/* Toggle button for mobile view */}
        <span className="navbar-toggle-icon">&#9776;</span> {/* Icon for the toggle button */}
      </div>
    </nav>
  );
};

export default NavigationBar; // Export the NavigationBar component
