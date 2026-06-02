export interface Person {
  name: string;
  image: string;
  desc: string;
  instagram: string;
  role: string;
  bio: string;
  quote: string;
  joinYear: string;
  contributions: string[];
}

export const peopleData: Person[] = [
  {
    name: "Are Gonzales",
    image: "/are.jpeg",
    desc: "Pendiri utama keluarga kecil Tekkom.",
    instagram: "https://www.instagram.com/are_raihanh/",
    role: "Founder & Visioner",
    bio: "Tokoh visioner yang mengawali perjalanan KKT. Dengan passion untuk membangun komunitas yang solid dan saling mendukung, Are menciptakan fondasi kuat untuk keluarga besar Tekkom.",
    quote: "Bersama kita lebih kuat, bersama kita lebih bermakna.",
    joinYear: "2024",
    contributions: [
      "Mendirikan visi KKT",
      "Membangun kultur komunitas",
      "Strategi kekeluargaan",
      "Leadership & mentoring"
    ],
  },
  {
    name: "Faras Pratama",
    image: "/faras.jpeg",
    desc: "Berperan membangun komunitas.",
    instagram: "https://www.instagram.com/vyrxaer/",
    role: "Koordinator & Organizer",
    bio: "Faras adalah jantung organisasi KKT. Dengan dedikasi tinggi, dia mengelola semua kegiatan dan memastikan setiap acara berjalan dengan sempurna. Kreativitasnya membuat setiap momen menjadi berkesan.",
    quote: "Setiap detail adalah kesempatan untuk menciptakan kenangan indah.",
    joinYear: "2024",
    contributions: [
      "Mengorganisir event & gathering",
      "Manajemen operasional",
      "Koordinasi anggota",
      "Inovasi kegiatan"
    ],
  },
  {
    name: "Cristian Habob",
    image: "/habob.jpeg",
    desc: "Membangun solidaritas KKT.",
    instagram: "https://www.instagram.com/afteralltstimeimstillstanding/",
    role: "Community Builder & Spirit Keeper",
    bio: "Cristian adalah pembawa semangat dalam komunitas. Dengan karakter yang hangat dan peduli, dia memastikan setiap anggota merasa dihargai dan didengar. Solidaritas KKT terwujud berkat komitmennya.",
    quote: "Solidaritas adalah akar dari keluarga yang sejati.",
    joinYear: "2024",
    contributions: [
      "Membangun ikatan komunitas",
      "Dukungan emosional anggota",
      "Resolusi konflik",
      "Kelekatan keluarga"
    ],
  },
];
