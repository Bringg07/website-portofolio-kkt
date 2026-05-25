"use client";

import { motion } from "framer-motion";
import { FaCalendar, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  participants: number;
}

const events: Event[] = [
  {
    id: 1,
    title: "Liburan Bersama ke Pantai",
    date: "15 Mei 2026",
    location: "Pantai Jepara",
    description:
      "Momen bahagia bersama keluarga kecil Tekkom di pantai yang indah.",
    participants: 45,
  },
  {
    id: 2,
    title: "Gathering & Makan Bersama",
    date: "20 April 2026",
    location: "Restoran Gacoan",
    description:
      "Berkumpul, berbagi cerita, dan menikmati waktu bersama keluarga besar.",
    participants: 60,
  },
  {
    id: 3,
    title: "Foto Keluarga Besar KKT",
    date: "10 Maret 2026",
    location: "Universitas Negeri Semarang",
    description:
      "Dokumentasi kenangan indah bersama KKT di kampus tercinta.",
    participants: 75,
  },
];

export default function EventSection() {
  return (
    <section id="events" style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
      <div className="wrapper">
        <div className="section-title">
          <h2>Timeline Acara</h2>
          <p>Perjalanan dan kenangan bersama KKT</p>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="event-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="event-header">
                <h3>{event.title}</h3>
              </div>

              <div className="event-info">
                <div className="info-item">
                  <FaCalendar />
                  <span>{event.date}</span>
                </div>
                <div className="info-item">
                  <FaMapMarkerAlt />
                  <span>{event.location}</span>
                </div>
                <div className="info-item">
                  <FaUsers />
                  <span>{event.participants} peserta</span>
                </div>
              </div>

              <p className="event-description">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
