"use client";

interface Props {
  variant?: "wave" | "curve";
  flip?: boolean;
  color?: string;
}

export default function SectionDivider({
  variant = "wave",
  flip = false,
  color = "rgba(0,0,0,0.1)",
}: Props) {
  const transform = flip ? "rotate(180deg)" : "none";

  if (variant === "curve") {
    return (
      <div className="section-divider" style={{ transform }}>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            fill={color}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="section-divider" style={{ transform }}>
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 C120,90 240,10 360,50 C480,90 600,10 720,50 C840,90 960,10 1080,50 C1200,90 1320,10 1440,50 L1440,100 L0,100 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
