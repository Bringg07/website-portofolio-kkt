import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KKT - Keluarga Kecil Tekkom",
    short_name: "KKT",
    description:
      "Website resmi Keluarga Kecil Tekkom - Komunitas solid dengan motto Bahagia & Ramah, Solid Forever",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#4f4444",
    theme_color: "#4f4444",
    categories: ["lifestyle", "community"],
    icons: [
      {
        src: "/logo kkt.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo kkt.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
