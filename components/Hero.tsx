"use client";

import { motion } from "framer-motion";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

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
      <div className="overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h4>keluargakeciltekkom.id</h4>

        <h1>
          <span ref={typedRef}></span>
        </h1>

        <p>
          Selamat datang di website resmi keluarga kecil Tekkom.
        </p>

        <a href="#club" className="btn" role="button">
          Explore
        </a>
      </motion.div>
    </header>
  );
}