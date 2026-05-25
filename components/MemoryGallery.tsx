"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { galleryPhotos } from "@/data/gallery";

export default function MemoryGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("semua");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: "semua", label: "Semua" },
    { id: "liburan", label: "Liburan" },
    { id: "makan", label: "Makan" },
    { id: "gathering", label: "Gathering" },
    { id: "foto", label: "Foto" },
  ];

  const filteredPhotos =
    selectedCategory === "semua"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === selectedCategory);

  return (
    <section id="memories" style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
      <div className="wrapper">
        <div className="section-title">
          <h2>Galeri Kenangan</h2>
          <p>Koleksi momen berharga bersama KKT</p>
        </div>

        {/* Filter Buttons */}
        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedImage(photo.id)}
            >
              <div className="gallery-image-container">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={300}
                  height={250}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <p className="gallery-caption">{photo.caption}</p>
                    <p className="gallery-date">{photo.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="lightbox-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                ✕
              </button>
              {galleryPhotos.map((photo) => {
                if (photo.id === selectedImage) {
                  return (
                    <div key={photo.id} className="lightbox-image-container">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={800}
                        height={600}
                        className="lightbox-image"
                      />
                      <div className="lightbox-info">
                        <p className="lightbox-caption">{photo.caption}</p>
                        <p className="lightbox-date">{photo.date}</p>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
