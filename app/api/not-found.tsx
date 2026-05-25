import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Error",
  description: "API endpoint not found",
};

export default function APINotFound() {
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
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>404</h1>
      <p>API endpoint not found</p>
    </div>
  );
}
