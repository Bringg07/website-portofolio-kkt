"use client";

import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";

interface Props {
  close: () => void;
  images: string[];
}

export default function GalleryModal({
  close,
  images
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 25,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        onClick={close}
        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
        animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{
            duration: 0.4,
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <motion.button
            className="close-btn"
            onClick={close}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>

          <motion.div
            className="gallery-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                className="gallery-item-wrapper"
                variants={itemVariants}
                onClick={() => setSelectedIndex(index)}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="gallery-item-container">
                  <Image
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    width={300}
                    height={300}
                    className="gallery-img"
                    loading="lazy"
                  />
                  <div className="gallery-item-overlay">
                    <p className="view-text">Lihat</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Lightbox untuk view penuh */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="gallery-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
            >
              <motion.div
                className="lightbox-image-wrapper"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[selectedIndex]}
                  alt={`Full view ${selectedIndex + 1}`}
                  width={800}
                  height={600}
                  className="lightbox-image-full"
                />
                <motion.button
                  className="lightbox-close"
                  onClick={() => setSelectedIndex(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ✕
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}