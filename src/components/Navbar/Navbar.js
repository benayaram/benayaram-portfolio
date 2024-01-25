// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="brand-container">
        <span className="angle-brackets">&lt;</span>
        <span className="brand-name">Benayaram</span>
        <span className="angle-brackets">/&gt;</span>
      </a>
      <div className="right">
        <div className='rightinside'>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#certificates">Certificates</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        </div>
    
      </div>
    </nav>
  );
};

export default Navbar;
