import './index.css'; // This brings in the Tailwind 'engine'
import './App.css';   // This brings in any extra custom styles
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
// We will add About, Projects, and Footer next!

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;