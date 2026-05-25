export interface GalleryPhoto {
  id: number;
  src: string;
  alt: string;
  caption: string;
  date: string;
  category: "liburan" | "makan" | "gathering" | "foto";
}

export const galleryPhotos: GalleryPhoto[] = [
  // Liburan
  {
    id: 1,
    src: "/unnes.jpeg",
    alt: "Kenangan di UNNES",
    caption: "Berkumpul di kampus tercinta",
    date: "Mei 2026",
    category: "liburan",
  },
  {
    id: 2,
    src: "/curug.jpeg",
    alt: "Curug indah",
    caption: "Petualangan ke curug yang memukau",
    date: "April 2026",
    category: "liburan",
  },
  {
    id: 3,
    src: "/kaca.jpeg",
    alt: "Pantai dengan cerminan kaca",
    caption: "Momen indah di pantai yang tenang",
    date: "Mei 2026",
    category: "liburan",
  },
  {
    id: 4,
    src: "/biru.jpeg",
    alt: "Langit biru yang jernih",
    caption: "Keindahan alam yang menakjubkan",
    date: "April 2026",
    category: "liburan",
  },
  // Makan
  {
    id: 5,
    src: "/mam.jpeg",
    alt: "Momen makan bersama",
    caption: "Berkumpul sambil menikmati hidangan lezat",
    date: "Mei 2026",
    category: "makan",
  },
  {
    id: 6,
    src: "/jajan.jpeg",
    alt: "Jajan bersama",
    caption: "Jajan favorit keluarga KKT",
    date: "April 2026",
    category: "makan",
  },
  {
    id: 7,
    src: "/gacoan.jpeg",
    alt: "Gathering di Gacoan",
    caption: "Makan enak bareng di Gacoan",
    date: "Mei 2026",
    category: "makan",
  },
  // Gathering
  {
    id: 8,
    src: "/bukber.jpeg",
    alt: "Bukber bersama",
    caption: "Momen berbuka puasa yang hangat",
    date: "Maret 2026",
    category: "gathering",
  },
  {
    id: 9,
    src: "/mall.jpeg",
    alt: "Jalan-jalan ke mall",
    caption: "Berbelanja dan bersenang-senang bersama",
    date: "April 2026",
    category: "gathering",
  },
  // Foto
  {
    id: 10,
    src: "/coverloh.jpeg",
    alt: "Foto keluarga besar",
    caption: "Dokumentasi momen berharga KKT",
    date: "Mei 2026",
    category: "foto",
  },
  {
    id: 11,
    src: "/coverpantai.jpeg",
    alt: "Cover liburan pantai",
    caption: "Kenang-kenangan indah di pantai",
    date: "Mei 2026",
    category: "foto",
  },
  {
    id: 12,
    src: "/mantaii.jpeg",
    alt: "Momen seru",
    caption: "Saat-saat yang tidak terlupakan",
    date: "April 2026",
    category: "foto",
  },
];
