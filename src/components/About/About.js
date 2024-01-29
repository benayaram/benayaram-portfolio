import React from 'react';
import './About.css';
import Aboutpic from '../../assects/about.png';

const About = () => {
  return (
    <section className="about-section">
      <div className="content-container">
        <div className="text-container">
          <h2>About Me</h2>
          <p>
            Hello! I'm <span className="name">Benayaram</span>, a passionate and creative individual with a background in web development, Android development, UI design, editing, and photography. I love bringing ideas to life through technology and design.
          </p>
        </div>
        <div className="image-container">
          <img src={Aboutpic} alt="GIF" />
        </div>
      </div>
    </section>
  );
};

export default About;