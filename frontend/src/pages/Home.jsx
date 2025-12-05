import React, { useEffect, useState, useRef } from 'react';
import HeroPremium from '../components/HeroPremium';
import Features from '../components/Features';
import ValueProp from '../components/ValueProp';
import Architecture from '../components/Architecture';
import Aurora from '../components/Aurora';
import '../components/Aurora.css';

export default function Home() {
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const heroEl = document.querySelector('.hero-root') || heroRef.current;
    // Use IntersectionObserver to compute how much of the hero is visible.
    if (!heroEl || typeof IntersectionObserver === 'undefined') {
      // fallback to simple scroll
      const onScroll = () => {
        const y = window.scrollY || document.documentElement.scrollTop;
        const trigger = window.innerHeight * 0.6;
        setOverlayOpacity(Math.min(1, Math.max(0, y / trigger)));
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener('scroll', onScroll);
    }

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        // when hero is fully visible, intersectionRatio ~ 1 -> overlay 0
        // when hero not visible, intersectionRatio ~ 0 -> overlay 1
        const ratio = e.intersectionRatio;
        const opacity = 1 - ratio; // invert
        setOverlayOpacity(Math.min(1, Math.max(0, opacity)));
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    );

    if (heroEl) io.observe(heroEl);
    return () => io.disconnect();
  }, []);

  // dynamic aurora params based on overlayOpacity
  const baseAmplitude = 1.0;
  const amplitude = baseAmplitude * (1 - overlayOpacity * 0.85); // reduce amplitude as we fade
  const blend = 0.5 + overlayOpacity * 0.35;
  const colorStops = ['#071020', '#2b6cb0', '#071020'];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 -z-10">
        <Aurora colorStops={colorStops} amplitude={amplitude} blend={blend} />
      </div>

      {/* Overlay that fades in as user scrolls - soft, classy blue */}
      <div
        aria-hidden
        className="aurora-overlay"
        style={{
          opacity: overlayOpacity,
        }}
      />

      <div className="relative z-10" ref={heroRef}>
        <div className="hero-root">
          <HeroPremium />
        </div>
        <ValueProp />
        <Features />
        <Architecture />
      </div>
    </div>
  );
}
