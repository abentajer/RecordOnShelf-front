/* eslint-disable no-unused-vars */
// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/music (1).png';
import profilePic from '../assets/account.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon">&#9776;</span>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/collections" onClick={() => setIsOpen(false)}>Collections</Link>
        <Link to="/categories" onClick={() => setIsOpen(false)}>Categories</Link>
      </div>
      <div className="navbar-profile">
        <Link to="/profile" onClick={() => setIsOpen(false)}>
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
