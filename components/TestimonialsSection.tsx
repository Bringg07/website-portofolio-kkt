"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials">
      <div className="wrapper">
        <div className="section-title">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            💬 Testimoni
          </motion.span>
          <h2>Apa Kata Mereka?</h2>
          <p>Kesan dan pesan dari anggota keluarga KKT</p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
            >
              <div className="testimonial-quote-icon">
                <FaQuoteLeft />
              </div>

              <p className="testimonial-content">{testimonial.kesan}</p>

              <div className="testimonial-footer">
                <div className="testimonial-avatar-placeholder">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p className="role">{testimonial.role}</p>
                </div>
                <div className="stars">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
