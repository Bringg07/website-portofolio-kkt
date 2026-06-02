"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingParticle = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="loading-particle"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.3, 0.6, 0.3],
      scale: [0, 1, 0],
      y: [y, y - 100, y],
      x: [x, x + 50, x]
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (!loading) return null;

  const particles = Array.from({ length: 8 }).map((_, i) => ({
    delay: i * 0.2,
    x: Math.random() * 100 - 50,
    y: Math.random() * 100,
  }));

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background Gradient */}
      <div className="loader-gradient-bg"></div>

      {/* Floating Particles */}
      <div className="particles-container">
        {particles.map((p, idx) => (
          <FloatingParticle key={idx} delay={p.delay} x={p.x} y={p.y} />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="loader-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
      >
        <motion.div
          className="loader-icon"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          KKT
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Keluarga Kecil Tekkom
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="loader-subtitle"
        >
          Membangun kebersamaan yang bermakna
        </motion.p>

        {/* Loading Bar */}
        <motion.div 
          className="loader-bar-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="loader-bar"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}