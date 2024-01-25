// Hero.js
import React, { useEffect, useState } from 'react';
import './Hero.css';
import Profilepic from "../../assects/Benayaram Rekha.png";

const Hero = () => {
  const roles = ['Web Developer', 'Android Developer', 'UI Designer', 'Editor', 'Photographer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [roles]);

  return (
    <section className="hero">
      <div className="text-content">
        <h1>I'm Benayaram</h1>
        <p>
          I am a
          <span className="current-role-container">
            <span className="current-role">{roles[currentRoleIndex]}</span>
          </span>
        </p>
        <div className="buttons-container">
          <button className="action-button" onClick={() => window.location.href = 'mailto:benayaramcreations'}>
            Contact
          </button>
          <a href="https://github.com/benayaram" target="_blank" rel="noopener noreferrer">
            <button className="action-button github-button">
              GitHub
            </button>
          </a>
        </div>
      </div>
      <div className="image-content">
        {/* Add your image here */}
        <img src={Profilepic} alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
