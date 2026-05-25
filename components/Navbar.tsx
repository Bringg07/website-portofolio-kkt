"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="wrapper navbar">
        <div className="logo">
          <Image
            src="/logo kkt.png"
            alt="logo"
            width={70}
            height={70}
          />
        </div>

        <div className={`menu ${open ? "show" : ""}`}>
          <a href="#home">Home</a>
          <a href="#club">Club</a>
          <a href="#people">People</a>
          <a href="#events">Events</a>
          <a href="#memories">Galeri</a>
          <a href="#guestbook">Buku Tamu</a>
        </div>

        <button
          type="button"
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
}