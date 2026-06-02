"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaTimes, FaStar } from "react-icons/fa";
import { Person } from "@/data/people";

interface Props {
  person: Person | null;
  onClose: () => void;
}

export default function ProfileModal({ person, onClose }: Props) {
  if (!person) return null;

  return (
    <AnimatePresence>
      {person && (
        <motion.div
          className="profile-modal-overlay"
          onClick={onClose}
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="profile-modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.4,
            }}
          >
            {/* Close Button */}
            <motion.button
              className="profile-modal-close"
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes />
            </motion.button>

            <div className="profile-modal-tag">Profil Pendiri</div>
            <div className="profile-modal-subtitle">
              Kenali lebih dalam siapa saja yang membawa KKT menuju keluarga yang hangat.
            </div>

            {/* Header Section */}
            <div className="profile-header">
              <motion.div
                className="profile-image-container"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  width={200}
                  height={200}
                  className="profile-image"
                />
                <div className="profile-badge">{person.role}</div>
              </motion.div>

              <motion.div
                className="profile-header-text"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                <h2>{person.name}</h2>
                <p className="profile-desc">{person.desc}</p>
                <p className="profile-year">Bergabung: {person.joinYear}</p>

                {/* Social Link */}
                <a
                  href={person.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaInstagram /> Instagram
                </a>
              </motion.div>
            </div>

            {/* Bio Section */}
            <motion.div
              className="profile-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <h3 className="section-title">Tentang</h3>
              <p className="section-content">{person.bio}</p>
            </motion.div>

            {/* Quote Section */}
            <motion.div
              className="profile-quote"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
            >
              <div className="quote-mark">"</div>
              <p className="quote-text">{person.quote}</p>
            </motion.div>

            {/* Contributions Section */}
            <motion.div
              className="profile-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <h3 className="section-title">Kontribusi Utama</h3>
              <div className="contributions-list">
                {person.contributions.map((contribution, idx) => (
                  <motion.div
                    key={idx}
                    className="contribution-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + idx * 0.05, duration: 0.3 }}
                  >
                    <FaStar className="contribution-icon" />
                    <span>{contribution}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
