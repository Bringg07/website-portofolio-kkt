import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://keluargakeciltekkom.id"),
  title: "KKT - Keluarga Kecil Tekkom | Portfolio & Komunitas",
  description: "Website resmi Keluarga Kecil Tekkom. Komunitas solid yang berbagi momen bahagia, kebersamaan, dan kenangan indah bersama keluarga besar Tekkom.",
  keywords: ["KKT", "Keluarga Kecil Tekkom", "Komunitas", "Portfolio", "Tekkom"],
  authors: [{ name: "KKT Team" }],
  creator: "KKT",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://keluargakeciltekkom.id",
    siteName: "KKT - Keluarga Kecil Tekkom",
    title: "KKT - Keluarga Kecil Tekkom",
    description: "Website resmi Keluarga Kecil Tekkom. Komunitas solid yang berbagi momen bahagia, kebersamaan, dan kenangan indah.",
    images: [
      {
        url: "https://keluargakeciltekkom.id/kkt.jpeg",
        width: 1200,
        height: 630,
        alt: "KKT Cover Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KKT - Keluarga Kecil Tekkom",
    description: "Website resmi Keluarga Kecil Tekkom",
    images: ["https://keluargakeciltekkom.id/kkt.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#4f4444" />
      </head>
      <body>{children}</body>
    </html>
  );
}