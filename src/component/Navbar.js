import React, { useState, useEffect } from 'react';
import './Navbar.css'; // You can customize or inline the styles as needed
// Replace with your actual logo path

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(true); // Open on initial load

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Optional: Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById('navMenu');
      const icon = document.getElementById('menuIcon');
      if (menu && !menu.contains(event.target) && icon && !icon.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="https://contrateksa.yatrasaathi.in/Images/logo.png" alt="Logo" />
         
        </div>
        <div
          id="menuIcon"
          className="menu-icon"
          onClick={toggleMenu}
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>

      <div id="navMenu" className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Our Services</a>
        <a href="#">Our Gallery</a>
        <a href="#">Our Clients</a>
        <a href="#">Our Projects</a>
        <a href="#">Quick Quote</a>
        <a href="#">Contact Us</a>
      </div>
    </>
  );
};

export default NavBar;
