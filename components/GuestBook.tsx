"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaPaperPlane } from "react-icons/fa";
import { initialGuestBook } from "@/data/guestbook";

interface GuestBookEntry {
  id: number;
  name: string;
  message: string;
  timestamp: string;
}

export default function GuestBook() {
  const [entries, setEntries] = useState<GuestBookEntry[]>(initialGuestBook);
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Validate
    if (!formData.name.trim() || !formData.message.trim()) {
      setLoading(false);
      return;
    }

    // Simulate submission & add to list
    setTimeout(() => {
      const newEntry: GuestBookEntry = {
        id: entries.length + 1,
        name: formData.name,
        message: formData.message,
        timestamp: new Date().toLocaleDateString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      };
      setEntries([newEntry, ...entries]);
      setFormData({ name: "", message: "" });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setLoading(false);
    }, 500);
  };

  return (
    <section id="guestbook" style={{ backgroundColor: "rgba(0,0,0,0.15)" }}>
      <div className="wrapper">
        <div className="section-title">
          <h2>Buku Tamu Kenangan</h2>
          <p>Bagikan kesan dan pesan Anda untuk KKT</p>
        </div>

        <div className="guestbook-container">
          {/* Form */}
          <div className="guestbook-form-section">
            <form onSubmit={handleSubmit} className="guestbook-form">
              <div className="form-group">
                <label htmlFor="name">Nama Anda</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Pesan/Kesan</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tulis kesan atau pesan Anda di sini..."
                  rows={6}
                  required
                />
              </div>

              <button type="submit" disabled={loading} className="submit-btn">
                {loading ? (
                  "Mengirim..."
                ) : (
                  <>
                    <FaPaperPlane /> Kirim Pesan
                  </>
                )}
              </button>

              {success && (
                <p className="success-message">
                  ✓ Pesan Anda berhasil ditambahkan!
                </p>
              )}
            </form>
          </div>

          {/* Entries List */}
          <div className="guestbook-entries-section">
            <h3>Pesan dari Keluarga KKT ({entries.length})</h3>
            <div className="guestbook-entries">
              {entries.map((entry, index) => (
                <motion.div
                  key={entry.id}
                  className="guestbook-entry"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="entry-header">
                    <div className="entry-avatar">
                      <FaUser />
                    </div>
                    <div className="entry-meta">
                      <h4>{entry.name}</h4>
                      <p className="entry-date">{entry.timestamp}</p>
                    </div>
                  </div>
                  <p className="entry-message">{entry.message}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
