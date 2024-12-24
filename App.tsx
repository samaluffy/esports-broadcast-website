import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;