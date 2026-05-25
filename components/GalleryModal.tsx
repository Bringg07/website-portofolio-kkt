"use client";

import Image from "next/image";

interface Props {
  close: () => void;
  images: string[];
}

export default function GalleryModal({
  close,
  images
}: Props) {

  return (
    <div className="modal-overlay" onClick={close}>

      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <button className="close-btn" onClick={close}>
          ✕
        </button>

        <div className="gallery-grid">

          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Gallery image ${index + 1}`}
              width={300}
              height={300}
              className="gallery-img"
              loading="lazy"
            />
          ))}

        </div>

      </div>

    </div>
  );
}