import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Features from './components/Features';
import Architecture from './components/Architecture';
import Footer from './components/Footer';

// Starfield Background Component
const Starfield = () => {
  useEffect(() => {
    const container = document.getElementById('star-container');
    if (!container) return;
    
    const starCount = 100;
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 3 + 2 + 's';
      const delay = Math.random() * 3 + 's';
      const size = Math.random() * 2 + 1 + 'px';
      const opacity = Math.random();

      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.width = size;
      star.style.height = size;
      star.style.setProperty('--duration', duration);
      star.style.setProperty('--delay', delay);
      star.style.setProperty('--opacity', opacity);
      
      container.appendChild(star);
      stars.push(star);
    }

    return () => {
      stars.forEach(s => s.remove());
    };
  }, []);

  return <div id="star-container" className="star-container"></div>;
};

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans selection:bg-primary/30 selection:text-white">
      <Starfield />
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <Features />
        <Architecture />
      </main>
      <Footer />
    </div>
  );
}

export default App;
