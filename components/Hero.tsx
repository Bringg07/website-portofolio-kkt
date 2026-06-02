"use client";

import { motion } from "framer-motion";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const FloatingShape = ({ delay, size, top, left }: { delay: number; size: number; top: string; left: string }) => (
  <motion.div
    className="floating-shape"
    style={{ width: size, height: size, top, left }}
    animate={{
      y: [-50, 50, -50],
      x: [-30, 30, -30],
      rotate: [0, 360],
      opacity: [0.1, 0.3, 0.1]
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Keluarga Kecil Tekkom",
        "Bahagia & Ramah",
        "Solid Forever"
      ],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <header id="home" role="banner">
      {/* Animated Gradient Background */}
      <div className="hero-gradient-bg"></div>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Floating Shapes */}
      <div className="floating-shapes-container">
        <FloatingShape delay={0} size={100} top="10%" left="10%" />
        <FloatingShape delay={1} size={150} top="60%" left="80%" />
        <FloatingShape delay={2} size={80} top="50%" left="5%" />
        <FloatingShape delay={0.5} size={120} top="20%" left="70%" />
      </div>

      {/* Hero Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
      >
        {/* Domain Tag */}
        <motion.div
          className="hero-tag"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span>✨ keluargakeciltekkom.id</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span ref={typedRef}></span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Selamat datang di website resmi keluarga kecil Tekkom.
          <br />
          Komunitas solid yang berbagi kebersamaan dan kenangan indah.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a href="#club" className="btn btn-primary" role="button">
            Explore Sekarang
          </a>
          <a href="#memories" className="btn btn-secondary" role="button">
            Lihat Galeri
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </motion.div>
    </header>
  );
}
