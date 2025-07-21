import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.webp'

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
     <div className="navbar-line">
        Helping you plan a happier life with our personalized solutions.
      </div> 
      <header className="navbar">
        <button className="hamburger" onClick={toggleSidebar}>
          &#9776;
        </button>

        <div className="logo-container">
          <img src={logo} alt="Happiness Logo" className="logo" />
        </div>
      </header>

      <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleSidebar}>Home</Link>
        <Link to="/about" onClick={toggleSidebar}>About</Link>
        <Link to="/services" onClick={toggleSidebar}>Services</Link>
        <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
      </nav>

      {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Navbar;
