import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Hero from './components/Hero/Hero.js';
import About from './components/About/About.js'
import Skills from './components/Skills/Skills.js';
import Certificates from './components/Certificates/Certificates.js'
function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Certificates/>
      {/* Other components go here */}
    </div>
  );
}

export default App;
