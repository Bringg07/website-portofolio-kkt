"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useState } from "react";
import { FaUsers, FaCalendarCheck, FaClock, FaCamera } from "react-icons/fa";

interface StatItem {
  icon: React.ReactNode;
  end: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: <FaUsers />, end: 14, suffix: "+", label: "Anggota Aktif" },
  { icon: <FaCalendarCheck />, end: 20, suffix: "+", label: "Event Digelar" },
  { icon: <FaClock />, end: 2, suffix: " Tahun", label: "Berdiri Sejak 2024" },
  { icon: <FaCamera />, end: 100, suffix: "+", label: "Kenangan Terabadikan" },
];

export default function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <section className="stats">
      <motion.div
        className="wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        onViewportEnter={() => setHasAnimated(true)}
      >
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <h2 className="stat-number">
                {hasAnimated ? (
                  <CountUp
                    end={stat.end}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </h2>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
