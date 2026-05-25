"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import GalleryModal from "./GalleryModal";

interface Props {
  image: string;
  title: string;
  desc: string;
  galleryImages: string[];
}

export default function ClubCard({
  image,
  title,
  desc,
  galleryImages,
}: Props) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="club-card"
        initial={{ opacity:0, y:50 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.5 }}
      >

        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="club-img"
          loading="lazy"
        />

        <h3>{title}</h3>

        <p>{desc}</p>

        <button
          className="btn"
          onClick={() => setOpen(true)}
        >
          Gallery
        </button>

      </motion.div>

      {open && (
        <GalleryModal
          close={() => setOpen(false)}
          images={galleryImages}
        />
      )}
    </>
  );
}