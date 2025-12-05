import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

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

function PageWrapper({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.main>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans selection:bg-primary/30 selection:text-white">
        <Starfield />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
