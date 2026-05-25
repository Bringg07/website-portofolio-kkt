export interface GuestBookEntry {
  id: number;
  name: string;
  message: string;
  timestamp: string;
}

export const initialGuestBook: GuestBookEntry[] = [
  {
    id: 1,
    name: "Are Gonzales",
    message: "KKT adalah keluarga yang telah memberikan banyak kenangan indah. Terima kasih atas setiap momen yang kita lalui bersama.",
    timestamp: "20 Mei 2026",
  },
  {
    id: 2,
    name: "Faras Pratama",
    message: "Bersama KKT, saya belajar arti sejati dari kebersamaan dan persahabatan. Semoga kenangan ini abadi selamanya.",
    timestamp: "22 Mei 2026",
  },
  {
    id: 3,
    name: "Cristian Habob",
    message: "Terima kasih telah menjadi bagian dari perjalanan saya. Setiap moment bersama KKT sangat berharga.",
    timestamp: "23 Mei 2026",
  },
];
