"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryPhotos } from "@/data/gallery";
import { logEvent } from "@/lib/analytics";

export default function MemoryGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("semua");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "semua", label: "Semua" },
    { id: "liburan", label: "Liburan" },
    { id: "makan", label: "Makan" },
    { id: "gathering", label: "Gathering" },
    { id: "foto", label: "Foto" },
  ];

  // Filter by category and search
  const filteredPhotos = useMemo(() => {
    let filtered = galleryPhotos;

    // Filter by category
    if (selectedCategory !== "semua") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query (caption, alt, date)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.caption.toLowerCase().includes(query) ||
          p.alt.toLowerCase().includes(query) ||
          p.date.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    logEvent("gallery_filter", { category: catId });
  };

  const handleImageClick = (photoId: number) => {
    setSelectedImage(photoId);
    logEvent("gallery_view_full", { photo_id: photoId });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim()) {
      logEvent("gallery_search", { query: e.target.value });
    }
  };

  return (
    <section id="memories" style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
      <div className="wrapper">
        <div className="section-title">
          <h2>Galeri Kenangan</h2>
          <p>Koleksi momen berharga bersama KKT</p>
        </div>

        {/* Search Box */}
        <motion.div
          className="gallery-search-container"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <input
            type="text"
            placeholder="Cari kenangan... (caption, tanggal, kategori)"
            value={searchQuery}
            onChange={handleSearchChange}
            className="gallery-search-input"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="gallery-search-clear"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </motion.div>

        {/* Filter Buttons */}
        <div className="gallery-filters">
          {categories.map((cat, idx) => (
            <motion.button
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? "active" : ""}`}
              onClick={() => handleCategoryChange(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Results Count */}
        <motion.div
          className="gallery-results-count"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {filteredPhotos.length > 0 ? (
            <p>
              Menampilkan <strong>{filteredPhotos.length}</strong> kenangan
              {searchQuery && ` untuk "${searchQuery}"`}
            </p>
          ) : (
            <p className="no-results">
              Tidak ada kenangan yang cocok. Coba ubah filter atau search.
            </p>
          )}
        </motion.div>

        {/* Gallery Grid */}
        {filteredPhotos.length > 0 && (
          <motion.div
            className="gallery-grid"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <AnimatePresence mode="wait">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  className="gallery-item"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  onClick={() => handleImageClick(photo.id)}
                  whileHover={{ y: -10 }}
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
                    <motion.div
                      className="gallery-overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="gallery-info">
                        <p className="gallery-caption">{photo.caption}</p>
                        <p className="gallery-date">{photo.date}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="lightbox-content"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {galleryPhotos.map((photo) => {
                  if (photo.id === selectedImage) {
                    return (
                      <motion.div
                        key={photo.id}
                        className="lightbox-image-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          width={800}
                          height={600}
                          className="lightbox-image"
                          priority
                        />
                        <motion.div
                          className="lightbox-info"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.3 }}
                        >
                          <p className="lightbox-caption">{photo.caption}</p>
                          <p className="lightbox-date">{photo.date}</p>
                        </motion.div>
                      </motion.div>
                    );
                  }
                  return null;
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
