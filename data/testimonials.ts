export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Risa Putri",
    role: "Anggota KKT",
    content:
      "KKT adalah keluarga kedua saya. Setiap momen bersama mereka selalu berkesan dan penuh tawa. Terima kasih telah menjadi bagian dari perjalanan saya.",
    image: "/testimonial1.jpeg",
    rating: 5,
  },
  {
    id: 2,
    name: "Aldi Wijaya",
    role: "Anggota KKT",
    content:
      "Solidaritas KKT luar biasa. Mereka tidak hanya teman, tapi lebih dari itu. Bersama KKT saya belajar arti kebersamaan yang sejati.",
    image: "/testimonial2.jpeg",
    rating: 5,
  },
  {
    id: 3,
    name: "Sinta Dewi",
    role: "Anggota KKT",
    content:
      "Komunitas yang hangat dan mendukung. Setiap orang di KKT peduli satu sama lain. Saya bangga menjadi bagian dari keluarga ini.",
    image: "/testimonial3.jpeg",
    rating: 5,
  },
  {
    id: 4,
    name: "Budi Santoso",
    role: "Anggota KKT",
    content:
      "KKT mengajarkan saya tentang pentingnya berbagi dan peduli. Kenangan indah yang akan saya simpan selamanya.",
    image: "/testimonial4.jpeg",
    rating: 5,
  },
];
