"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ backgroundColor: "rgba(0,0,0,0.15)" }}>
      <div className="wrapper">
        <div className="section-title">
          <h2>Testimoni Anggota</h2>
          <p>Apa kata mereka tentang KKT?</p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="testimonial-header">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="testimonial-avatar"
                  loading="lazy"
                />
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p className="role">{testimonial.role}</p>
                </div>
              </div>

              <div className="stars">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>

              <p className="testimonial-content">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
