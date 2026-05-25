import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#4f4444",
        color: "white",
        textAlign: "center",
        padding: "20px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "5rem",
          marginBottom: "10px",
          fontWeight: "700",
        }}
      >
        404
      </h1>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Halaman Tidak Ditemukan
      </h2>
      <p
        style={{
          fontSize: "1.1rem",
          marginBottom: "30px",
          color: "rgba(255, 255, 255, 0.8)",
        }}
      >
        Maaf, halaman yang Anda cari tidak ada. Kembali ke halaman utama.
      </p>
      <Link
        href="/"
        style={{
          padding: "12px 30px",
          borderRadius: "50px",
          cursor: "pointer",
          fontWeight: "600",
          textDecoration: "none",
          backgroundColor: "#fff",
          color: "#4f4444",
          border: "none",
          fontSize: "1rem",
        }}
      >
        Kembali ke Home
      </Link>
    </div>
  );
}
