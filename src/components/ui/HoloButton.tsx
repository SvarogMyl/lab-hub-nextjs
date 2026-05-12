"use client";

import React, { useState } from "react";

interface HoloButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  style?: React.CSSProperties;
  onClick?: () => void;
  full?: boolean;
}

export default function HoloButton({
  children,
  variant = "primary",
  style = {},
  onClick,
  full = false,
}: HoloButtonProps) {
  const [hov, setHov] = useState(false);

  const base: React.CSSProperties = {
    border: "none",
    cursor: "pointer",
    padding: "16px 28px",
    borderRadius: 99,
    fontFamily: "var(--font-body)",
    fontSize: "14px",
    fontWeight: 600,
    letterSpacing: "0.2px",
    transition: "transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .25s, background .25s",
    transform: hov ? "translateY(-2px)" : "translateY(0)",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    width: full ? "100%" : "auto",
    justifyContent: "center",
    outline: "none",
  };

  if (variant === "primary") {
    return (
      <button
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        onClick={onClick}
        style={{
          ...base,
          background: "var(--grad)",
          color: "var(--bg)",
          boxShadow: hov
            ? `0 18px 60px rgba(124, 58, 237, 0.5), 0 0 0 1px rgba(165, 180, 252, 0.4)`
            : `0 10px 30px rgba(124, 58, 237, 0.3)`,
          ...style,
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={onClick}
      style={{
        ...base,
        background: hov ? "var(--surface-hi)" : "rgba(15, 17, 25, 0.6)",
        color: "var(--text)",
        border: `1px solid ${hov ? "rgba(165, 180, 252, 0.4)" : "var(--surface-border)"}`,
        backdropFilter: "blur(20px)",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
