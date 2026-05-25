"use client";

import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="wrapper footer-content">
        <div className="footer-section">
          <h2>KKT</h2>
          <p>Keluarga Kecil Tekkom - Bahagia & Ramah, Solid Forever</p>
        </div>

        <div className="footer-section">
          <h3>Kontak</h3>
          <div className="contact-info">
            <a href="mailto:kkt@example.com" aria-label="Email">
              <FaEnvelope /> kkt@example.com
            </a>
            <a href="tel:+62000000000" aria-label="Phone">
              <FaPhone /> +62 000-000-000
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Ikuti Kami</h3>
          <div className="social-links">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Keluarga Kecil Tekkom. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}